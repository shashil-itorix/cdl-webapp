export const makeApiCall = (method = "GET", url, body = {}) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
    myHeaders.append("Authorization", `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjBZcVlHdndudGtPZHdFNXlXS2tqUSJ9.eyJuaWNrbmFtZSI6InNoYXNoaWwiLCJuYW1lIjoid2lsbGlhbXBvdCIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8xZTlkYzU1ZTBlMGI0YTU0NmM1M2FhMzFiMjQwODE1MD9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnNoLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI1LTAyLTA5VDEwOjE2OjExLjE5NVoiLCJlbWFpbCI6InRvbS5yaWRkbGVAY2RsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9kZXYtbnhzYnc1MmZiOGVkYmpjNy51cy5hdXRoMC5jb20vIiwiYXVkIjoiZTFPakNlSFZLRkRYdWFCMVVKRUtwTmJEWUNDcWpxTGwiLCJzdWIiOiJhdXRoMHw2N2E4NmQwZjJlNGNkOGRiYWJkYzE3ZjQiLCJpYXQiOjE3MzkwOTc5MDcsImV4cCI6MTczOTEzMzkwNywic2lkIjoiMEVFQ2hZUU9lYUJpQ1RsSzdoQmxCU2J0X25VakU2LXgiLCJub25jZSI6IlpWaHpRa1ZmZW5CWFFrVldRVmhFWjFjNWJFMDRWemhpY0VsM1l5NTZURGw1V1V3eWNuSkZjVFl4Wmc9PSJ9.Lqm1_WuD6gKnOjfhcfGWu34UZQA1zodIjd1IotvtslUJRZuELYd2E65nunNbsq8pIocXtZpr22GJaf1Th4avysKdYLzjf4Msgh9ypbAq20yLs1qwgQZ0k-4nV8IklaC4-T2hsOuVnfrXWoCvDQ5bCuCeG8jn9y79lVjUGui5vl6EuXXguPJwScEPcGN74lBn3AblHTgF4ZkNRpggv2jkwDbIDdwpzK3tyY5qZWg0owb07aAG_CDRl0o1ZUs2augTqySB9AjSgi416EM3fbzPPNvj3TCul3-1bn_gPvTDc-hrk_YHzilHQIQBT3npOr5iG9ivKD16bCE0Ov7bwR_ZjA`)

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