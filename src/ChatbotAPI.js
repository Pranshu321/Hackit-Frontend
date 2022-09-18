import axios from "axios";
// import fetch  from 'node-fetch';
async function moodGuesser(message) {
	// http://tweetmoodchk.d7cgcshfajbxf6dv.eastus.azurecontainer.io/mood

	// const response = await fetch(
	// 	"https://indian-jokes-api.herokuapp.com/jokes/random",
	// 	{
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	}
	// )
	// 	.then((response) => response.json())
	// 	.then((json) => console.log(json))
	// 	.catch((error) => console.log(error));

	// const data = await response.json();
	// return data.text;

	// const response = await axios
	// 	.get("https://indian-jokes-api.herokuapp.com/jokes/random", {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 			"Access-Control-Allow-Origin": "*",
	// 			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	// 			"Access-Control-Allow-Headers":
	// 				"Origin, X-Requested-With, Content-Type, Accept",
	// 		},
	// 	})
	// 	.then((response) => console.log(response))
	// 	.catch((error) => console.log(error));
	// return response;

	const response = axios
		.get("https://official-joke-api.appspot.com/random_joke")
		.then(function (response) {
			// handle success
			console.log(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});

	return response.data.setup + response.data.punchline;
}

async function getMeme() {
	const response = axios
		.get("https://meme-api.herokuapp.com/gimme/IndianDankMemes")
		.then(function (response) {
			// handle success
			console.log(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		})
		.then(function () {
			// always executed
		});

	return response.data.setup + response.data.punchline;
}

const API = {
	GetChatbotResponse: async (message) => {
		return new Promise(function (resolve, reject) {
			setTimeout(function () {
				if (message === "hi" || message === "hello" || message === "hey")
					resolve(
						"Here I am  your mood guesser bot , I will send you jokes which will make you happy! Plese type 'joke'. "
					);
				else if (message === "joke") {
					axios
						.get("https://official-joke-api.appspot.com/random_joke")
						.then(function (response) {
							// handle success
							console.log(response.data);
							resolve(response.data.setup + " " + response.data.punchline);
						})
						.catch(function (error) {
							// handle error
							console.log(error);
						});
				} else {
					resolve("Here I am  your mood guesser bot , I will send you jokes which will make you happy! Plese type 'joke'. ");
        }
			}, 1000);
		});
	},
};

export default API;
