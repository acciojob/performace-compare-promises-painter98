// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here

function fetchData(url){
	return fetch(url).then ((response)=>return response.JSON(););
}

let promises = [];

promises.push(apiUrls.forEach((url) => {
	return Promise((resolve,reject) => {
		resolve(fetchData(url));
		reject('error');
	});
}););

Promise.all(promises).then((event) => {
	document.getElementById('output-all').innerText = event;
})
Promise.any(promises).then((event) => {
	document.getElementById('output-any').innerText = event;
})
