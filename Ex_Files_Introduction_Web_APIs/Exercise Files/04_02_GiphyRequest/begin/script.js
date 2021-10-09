const request = new XMLHttpRequest();

request.open("get", "https://api.giphy.com/v1/gifs/random?api_key=DphwdVfDx4npJp2Uq0S82D5NJRlRaYAf&tag=squirrels&rating=g");

request.onload = function() {
    let response = request.response;
    let parsedData = JSON.parse(response);
    console.log(parsedData);
    let originalUrl = parsedData.data.images.original.url;
    console.log(originalUrl);

    let gif = document.createElement('img');
    gif.setAttribute('src', originalUrl);
    document.body.appendChild(gif);
}

request.send();