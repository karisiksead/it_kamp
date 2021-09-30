import fetch from "node-fetch";
import { freemem } from "os";

var myData = {};
fetchingData = fetch()

fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => console.log(data));