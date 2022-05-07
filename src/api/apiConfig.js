const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '0a19ff580f94d4ab87e58481bcb6171c',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;