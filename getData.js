const getData = async () => {
    try {
        const response = await fetch("stock.json");
        const data = await response.json();
       console.log(getData);
        return data;
    } catch (error) {
        console.log('Hubo un error', error)
    }
}