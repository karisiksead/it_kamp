// 12. Write a JavaScript function to parse an URL.

// primer URL - a:
// https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

path = 'https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php';

url = {
    protocol: path.slice(0, path.indexOf(":")),
    domain: path.slice(
        path.indexOf(".") + 1,
        path.indexOf("/", path.indexOf("."))
    ),
    route: path.slice(path.indexOf("/", path.indexOf(".")) + 1).split("/"),
};

console.log(url);