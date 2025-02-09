export const makeApiCall = (method = "GET", url, body = {}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);

    const raw = JSON.stringify(body);

    const requestOptions = method === "GET" ? {
        method, headers: myHeaders,
    } : {
        method,
        headers: myHeaders,
        body: raw,
    };

    return fetch(`${process.env.REACT_APP_API_URL}${url}`, requestOptions)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}