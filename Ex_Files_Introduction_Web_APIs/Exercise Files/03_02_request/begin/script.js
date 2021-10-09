const request = new XMLHttpRequest();

request.open("get", "https://hplussport.com/api/products");

request.onload = function() {
    let response = request.response;
    parsedData = JSON.parse(response);
    console.log(parsedData);
}

request.send();