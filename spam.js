/*Change this for loop to what ever you like for now set at 100
If you have experience with using proxies please let me know <3
You are probably asking why i made this, and its simply he is 
a scammer and whats the point in manually spamming him when you can bot it !
*/
const request = require('request');
const fs = require('fs');
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const prompt = require('prompt');

      
      var url = "https://formoid.net/api/push";
      let proxydata = fs.readFileSync('./proxies.txt', 'utf8');
      let proxies = proxydata.split("\n");
      let proxyi = 0;
      for(i = 0;i < 10;i++) {
        try {
     let name = makeid(8);
     let email = makeid(10) + '@gmail.com';
     let phone = makeid(8);
     let message = makeid(28);
     
var data = `{
   "email":"rLjexACbvSx+YW1RGMMUpL4VVpQZKRtljYg3sZHnDgOdJatLcQQi/5C1rjvRXuNsKxEVUe5Z++OUGNJX7Ufy/0RzXe5nZevgBPPxSPmPzIXWmjMduwrsdw/IW2B6WVfu",
   "form":{
      "title":"Mobirise Form",
      "data":[
         [
            "Name",
            "${name}"
         ],
         [
            "Email",
            "${email}"
         ],
         [
            "Phone",
            "${phone}"
         ],
         [
            "Message",
            "${message}"
         ]
      ]
   }
}`;



if(!proxies[proxyi]) {
   proxyi = 0;
}


if (cluster.isMaster) {
   console.log(`Master ${process.pid} is running`);
 
   // Fork workers.
   for (let i = 0; i < numCPUs; i++) {
     cluster.fork();
   }
 
   cluster.on('exit', async (worker, code, signal) => {
     console.log(`worker ${worker.process.pid} died`);
    // await new Promise(resolve => setTimeout(resolve, 3000));
   });
 } else {
    try{
      proxyi++
   request.post(url,{form: data,proxy: `http://${proxies[proxyi]}`}, async function (err,res,body) {
     // console.log(body)
      if(body === undefined) {
         console.log('Failed to send request! Retrying.....')
      } else if(body.error) {
         proxyi++;
      }else {
      console.log(`Sending annunaki with the details %s:%s:%s with a dumb message using proxy: %s`, name, email, phone, proxies[proxyi]);
      console.log(body)
      }
     // await new Promise(resolve => setTimeout(resolve, 3000));

      proxyi++;
})


    //sleep(10000);
   console.log(`Worker ${process.pid} started`);
   proxyi++
}  catch (err) {
   console.log(error)
}
 }
        }
        catch(err) {
          console.log(err)
        }
}
     
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function sleep(time) {
   await new Promise(resolve => setTimeout(resolve, time));
}
