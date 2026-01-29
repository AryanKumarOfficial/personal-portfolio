import db from '@/lib/db';
import { getEventBus } from '@/infrastructure/event-bus';
import { Post } from '@/.generated/prisma/client';

export type CreatePostInput = {
  title: string;
  content: string;
  excerpt?: string;
  coverImage?: string;
  authorId: string;
  tags?: string[];
  categories?: string[];
  status?: string;
};

export class BlogService {
  static async createPost(input: CreatePostInput): Promise<Post> {
    const bus = getEventBus();
    // Generate a clean, human-readable base slug from the title
    const baseSlugRaw = input.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const baseSlug = baseSlugRaw || 'post';

    // Ensure slug uniqueness by appending a counter only if needed
    let slug = baseSlug;
    let counter = 1;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const existing = await db.post.findUnique({ where: { slug } });
      if (!existing) {
        break;
      }
      slug = `${baseSlug}-${counter++}`;
    }
    const post = await db.post.create({
      data: {
        title: input.title,
        slug,
        content: input.content,
        excerpt: input.excerpt,
        coverImage: input.coverImage,
        authorId: input.authorId,
        tags: input.tags || [],
        categories: input.categories || [],
        status: input.status || 'DRAFT',
        publishedAt: input.status === 'PUBLISHED' ? new Date() : null,
      },
    });

    // publish event might fail if event bus is not set up for this event, but it is fine
    // We need to ensure EventBus supports 'POST_CREATED' or is generic string
    await bus.publish('POST_CREATED', { postId: post.id, title: post.title, content: post.content });
    return post;
  }

  static async getPosts(status?: string) {
    return db.post.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
      include: { author: true },
    });
  }

  static async getPostBySlug(slug: string) {
    return db.post.findUnique({
      where: { slug },
      include: { author: true },
    });
  }
}
