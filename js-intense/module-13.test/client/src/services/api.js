const URL = 'http://localhost:3000/posts';


export const getItems = () => {
    return fetch(URL).then(response => {
        if(response.ok){
            return response.json()
        };


        throw new Error('Error while fetching' + response.statusText)
    });
};

export const saveItem = (post) => {
    const opts = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    };

    return fetch(URL, opts).then(response => {
        if(response.ok){
            return response.json()
        };


        throw new Error('Error while fetching' + response.statusText)
    });
};


export const deleteItem = (id) => {
    const opts = {
        method: 'DELETE'
    };

    return fetch(`${URL}/${id}`, opts).then(response => {
        if(response.ok){
            return response.json();
        };


        throw new Error('Error while fetching ' + response.statusText)
    });
};