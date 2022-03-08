const fs = require('fs')
const axios = require('axios')

axios({
    method: "get",
    url: "https://api.chucknorris.io/jokes/random",
    /* more options, like params, data, headers, timeout etc...*/
})
    .then((response) => {
    // This code will run as soon as the request is resolved
    const status = response.status; // The status code, most often 200
    const data = response.data; // The actual response data
    console.log("Status Code: ", status);
    console.log("Here's a Joke for you: ", data.value);
    })
    .catch((error) => {
    const response = error.response; // The response from the server
    console.log("Status Code: ", response.status);
    // This code will run if something went wrong
    console.log("Something went wrong!", error.code);
});

setTimeout(() => {
    console.log("Log this after 3 seconds");
}, 3000);


fs.writeFile("./test.txt", "This is the content of the file", (error) => {
    if (error) {
        console.log("Something went wrong while writing the file...", error.code);
    } else {
        console.log("Success!!!");
    }
});


// Start the operation, which will immediately return the promise object
const promise1 = axios.get("https://api.chucknorris.io/jokes/random");

// Install a then handler to be run if the server returns a response.
const promise2 = promise1.then((response) => {
    console.log("Success", response.status)
});

promise2.catch((error) => {
    console.log("Error", error.code);
});