const baseUri = 'http://localhost:8081';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const addInventory = async(payload) => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user_data.accessToken,
    };

    return fetch(`${baseUri}/api/inventory`,{
        method: 'POST',
        headers: _headers,
        body: JSON.stringify(payload)
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => {
            console.log('data ...')
            console.log(JSON.stringify(data));
            return {status: true, data: data}
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            // console.error('Invalid Credentials');
            return  {status: false, data: error};
        });
}

const listInventory = async() => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user_data.accessToken,
    };

    return fetch(`${baseUri}/api/inventory`,{
        method: 'GET',
        headers: _headers
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => {
            console.log('data ...')
            console.log(JSON.stringify(data));
            return {status: true, data: data}
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            // console.error('Invalid Credentials');
            return  {status: false, data: error};
        });
}

const updateInventory = async(payload) => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user_data.accessToken,
    };

    return fetch(`${baseUri}/api/inventory`,{
        method: 'PUT',
        headers: _headers,
        body: JSON.stringify(payload)
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => {
            console.log('data ...')
            console.log(JSON.stringify(data));
            return {status: true, data: data}
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            // console.error('Invalid Credentials');
            return  {status: false, data: error};
        });
}

const addInventorySale = async(payload) => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user_data.accessToken,
    };

    return fetch(`${baseUri}/api/inventorysale`,{
        method: 'POST',
        headers: _headers,
        body: JSON.stringify(payload)
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => {
            console.log('addInventorySale ...', data);
            return {status: true, data: data}
        })
        .catch((error) => {
            console.log("addInventorySale::error", error);
            // console.error('Invalid Credentials');
            return  {status: false, data: error};
        });
}

const listInventorySales = async() => {
    let user_data = JSON.parse(localStorage.getItem("user_data"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user_data.accessToken,
    };

    return fetch(`${baseUri}/api/inventorysales`,{
        method: 'GET',
        headers: _headers
        })
        .then((response) =>  {
            if (response.ok)
                return response.json();
            throw response;
        })
        .then((data) => {
            console.log('inventorysales ...', data)
            return {status: true, data: data}
        })
        .catch((error) => {
            console.log(JSON.stringify(error));
            // console.error('Invalid Credentials');
            return  {status: false, data: error};
        });
}

export default {
    addInventory,
    updateInventory,
    listInventory,
    addInventorySale,
    listInventorySales
};