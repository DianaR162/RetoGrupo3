const getExample = async () => {
    const response = await exampleInstance.get('/example');
    console.log(response.data);
};
