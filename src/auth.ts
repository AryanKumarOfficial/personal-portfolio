import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./lib/db"
import { getEventBus } from "./infrastructure/event-bus"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  events: {
    createUser: async (message) => {
      const bus = getEventBus();
      await bus.publish('USER_REGISTERED', {
        userId: message.user.id,
        email: message.user.email,
        name: message.user.name,
      });
    },
    signIn: async (message) => {
      const bus = getEventBus();
      if (message.user.id) {
        await bus.publish('USER_LOGIN', {
          userId: message.user.id,
          provider: message.account?.provider,
        });
      }
    }
  },
  callbacks: {
    session: ({ session, user }) => {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
})
