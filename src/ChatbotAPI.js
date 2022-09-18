import axios from 'axios'; 
// import fetch  from 'node-fetch';

async function moodGuesser(message){

  // http://tweetmoodchk.d7cgcshfajbxf6dv.eastus.azurecontainer.io/mood



    // const response = await fetch('http://tweetmoodchk.d7cgcshfajbxf6dv.eastus.azurecontainer.io/mood', {
    //     method: 'POST',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(
    //         { "?input_mood=": message }
    //     ),

    // })
    // .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log(error));

    // const data = await response.json();
    // console.log(data);
    

   const response = await axios.post("https://cbtest201.azurewebsites.net/mood" , {
    input_mood: message
   } , {
    headers: {
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin': '*',
      'content-type': "application/json"
    }
   })
    .then(response => response.json())
    .catch(error => {
      console.log(error);
    });

   console.log(response.data);
   console.log(response.data.name);
    return response.data.name;

    
}

const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === "hi") resolve("Here I am  your mood guesser bot , I will send you jokes and memes which will make you happy!");

        else {
          resolve(moodGuesser(message));
          // moodGuesser(message);
          resolve("echo : " + message);
        }
      }, 2000);
    });
  }
};

export default API;
