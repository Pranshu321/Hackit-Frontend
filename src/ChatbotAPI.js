import axios from 'axios'; 

async function moodGuesser(message){
   const res = await axios.post("http://tweetmoodchk.d7cgcshfajbxf6dv.eastus.azurecontainer.io/mood" , {
    input_mood: message
   } , {
    headers: {
      'Access-Control-Allow-Credentials':true,
      'Access-Control-Allow-Origin': '*',
      'content-type': "application/json"
    }
   });
   console.log(res.data);
}

const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === "hi") resolve("Here I am  your mood guesser bot , I will send you jokes and memes which will make you happy!");

        else {
          moodGuesser(message);
          resolve("echo : " + message);
        }
      }, 2000);
    });
  }
};

export default API;
