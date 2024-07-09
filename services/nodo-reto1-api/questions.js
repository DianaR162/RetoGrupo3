const getQuestions = async () => {
    const response = await nodoReto1Instance.get('/questions');

    return response.data;
};
