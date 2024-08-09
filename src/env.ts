const env = {
    appwrite: {
        endpoint: String(process.env.NEXT_APP_APPWRITE_ENDPOINT),
        projectId: String(process.env.NEXT_APP_APPWRITE_PROJECT_ID),
        apiKey: String(process.env.NEXT_APP_APPWRITE_API_KEY),
    }
}

export default env;