import {config} from "dotenv"
config({
    path:process.cwd() + '/.env.local'
})
import {defineConfig, env} from "prisma/config"

console.log(`Using DATABASE_URL: ${env('DATABASE_URL')}`)

export default defineConfig({
    schema: process.cwd() + '/prisma/schema.prisma',
    migrations: {
        path: process.cwd() + '/prisma/migrations',
    },
    datasource: {
        url: env('DATABASE_URL')
    }
})