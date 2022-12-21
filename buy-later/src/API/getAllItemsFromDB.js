
export const getAllItemsFromDB = async() => {
        try{
            const response = await fetch("http://localhost:8080/getItems", {
            });
                if(response.ok){
                    const jsonResponse = response.json();
                    return jsonResponse;
                }
                throw new Error('Resquest failed!')
        }
        catch(error){
            console.log(error)
        }
}

export const getAllBoughtsFromDB = async() => {
    try{
        const response = await fetch("http://localhost:8080/getBought", {
        });
            if(response.ok){
                const jsonResponse = response.json();
                return jsonResponse;
            }
            throw new Error('Resquest failed!')
    }
    catch(error){
        console.log(error)
    }
}