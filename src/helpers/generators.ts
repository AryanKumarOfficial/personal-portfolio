const generateSecretTokens: () => string = (): string => {
    return [...Array(32)]
        .map(() => Math.random().toString(36)[2])
        .join('')
}

export {generateSecretTokens};