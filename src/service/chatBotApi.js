export default function apiCall(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        });
}