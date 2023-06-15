const baseUri = 'http://localhost:8081';
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

const signIn = async(payload) => {
    return fetch(`${baseUri}/api/auth/signin`,{
        method: 'POST',
        headers: headers,
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

const signUp = (payload) => {
    return fetch(`${baseUri}/auth/signup`,{
        method: 'POST',
        headers: headers,
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
            return data
        })
        .catch((error) => {
            console.error('error....');
            console.log(JSON.stringify(error));
            return null;
        });
}

const addUser = async(payload) => {
    let _token = JSON.parse(localStorage.getItem("token"));
    let _headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": _token.accessToken,
    };

    return fetch(`${baseUri}/user`,{
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
            return data
        })
        .catch((error) => {
            console.error('error....');
            console.log(JSON.stringify(error));
            return null;
        });
}



export default {
    signIn,
    signUp,
    addUser,
};