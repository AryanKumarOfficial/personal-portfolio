const env = {
    appwrite: {
        endpoint: String(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT),
        projectId: String(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID),
        apiKey: String(process.env.NEXT_PUBLIC_APPWRITE_API_KEY),
    },
    site: {
        title: String(process.env.NEXT_PUBLIC_SITE_TITLE),
        description: String(process.env.NEXT_PUBLIC_SITE_DESCRIPTION),
        url: String(process.env.NEXT_PUBLIC_APP_URL),
    },
}

export default env;