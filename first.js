var API_URL = 'https://icanhazdadjoke.com';
var request = {
    method: "GET",
    headers: {
        "Accept": "application/json"
    }
};
function nextJoke() {
    fetch(API_URL, request)
        .then(function (response) { return response.json(); })
        .then(function (jokes) {
        var tpl = jokes;
        console.log("Seg\u00FCent acudit: ".concat(tpl.joke));
    });
}
