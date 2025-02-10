export const makeApiCall = (method = "GET", url, body = {}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (localStorage.getItem("accessToken")) {
        myHeaders.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
    }
    const raw = JSON.stringify(body);

    const requestOptions = method === "GET" ? {
        method, headers: myHeaders,
    } : {
        method,
        headers: myHeaders,
        body: raw,
    };

    return fetch(`${process.env.REACT_APP_API_URL}${url}`, requestOptions)
    .then((response) => {
        if (response && response.status === 401) {
            throw("Your role doesn't have permission to access this feature")
        }
        return response.json()
    })
    .catch((error) => {
        console.log('error', error)
        throw (error)
    });
}