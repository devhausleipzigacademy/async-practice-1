## Outline

### Overview

- Parts of URL
  - Base URL
  - Path
  - Query Parameters
- HTTP Request Methods
- HTTP Request Components
  - Method
  - Headers
  - Body
  - Response Code
  - Response Body
- Endpoints
- API: REST
- Axios
- Thread of Execution, Blocking / Non-blocking
- Event Loop Visualization
- Promises
- Promise Visualizer

### URLs

[What is a URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)


### HTTP Request Methods

[HTTP Methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)


### Insomnia

Insomnia is a desktop app, that you can use to explore and debug an API
Install insomnia from [Insomnia](https://insomnia.rest/)

Use Insomnia and the linked API's and their documentation to complete these tasks.
Don't Google!!!

1. Find a Chuck Norris Joke about linux.
2. Alofi is the capital of which country.
3. How many countries state US Dollar as one of their official national currencies.
4. Get some random advice
5. Download the astronomy picture of the day
6. How many search results do you get on GitHub if you search for vue

#### APIs

- [Chuck Norris API](https://api.chucknorris.io/)
- [Country API](https://restcountries.com/)
- [Advice API](https://api.adviceslip.com/)
- [NASA API](https://api.nasa.gov/index.html)
- [GitHub API](https://developer.github.com/v3/)


### Axios

Axios is a javascript library, which lets you trigger HTTP Requests.
You can use it to call an API from Javascript.

[Axios](https://github.com/axios/axios)


#### Include through CDN

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

#### Calling an API

```js
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
    console.log("Something went wrong!", error);
  });
```

Instead of specifying the http method in the options, there are also methods defined on the axios object itself. For example for a get request this would look like this.

```js
axios.get("https://api.chucknorris.io/jokes/random", {
  /* options */
});
```

There's also `axios.post`, `axios.delete`, `axios.put` and `axios.patch`


### Thread of Execution, Blocking / Non-blocking


### Event Loop Visualization

[JavaScript Visualizer](https://www.jsv9000.app/)


### Promises

Axios is using a Javascript feature called promises.

Promises are a way to define asynchronous operations simpler and more scalable than using callbacks.

Up until now, when we had to specify code to be run at a later point, we used a callback.
We passed a function, with the code we wanted to be run at a later point as an **argument** to the original function.

```js
setTimeout(() => {
  console.log("Log this after 3 seconds");
}, 3000);
```

Some functions also expect a callback which takes an error object, to handle errors which occur in an asynchronous operation.

Here's an example from the node file system library

```js
fs.writeFile("test.txt", "This is the content of the file", (error) => {
  if (error) {
    console.log("Something went wrong while writing the file...", error);
  } else {
    console.log("Success!!!");
  }
});
```

Promises turn this around.
Instead of using **arguments** to define actions to be carried out later, we add "event handlers" on the **return value**.

Instead of returning 'undefined', a function like setTimeout or fs.writeFile would return a Promise.

A Promise then gives us the opportunity to register code to be run at a later point.
You can think about it like installing an event listener.

The main event is called `then`, which will be triggered when the Promise gets successfully resolved, i.e. the asynchronous operation was successful and generated a result. For example, we got back a response from an HTTP request to a server.

Another event we can register to is `catch` which will be triggered whenever an error occurs before the promise gets resolved.
The error itself will be passed to the handler.

The tricky part about promises is that they can be chained.
A call to the '.then' or the '.catch' method will return yet another promise on which another then handler or a catch handler can be registered.

The most typical scenario is to install multiple nested then handlers, which are finished by a catch handler, which will _catch_ any errors that might occur in the chain of asynchronous operations.

Here's a more verbose version of the axios example above, showcasing how the promises are getting created.

```js
// Start the operation, which will immediately return the promise object
const promise1 = axios.get("https://api.chucknorris.io/jokes/random");

// Install a then handler to be run if the server returns a response.
const promise2 = promise1.then((response) => {
  console.log("Success", response);
});

// Install a catch handler to be run if there is an error in either the original request or the then handler.
promise2.catch((error) => {
    console.log("Error", error);
});
```


### Promise Visualizer

[Promise Visualizer](https://bevacqua.github.io/promisees/)
