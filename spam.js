/*Change this for loop to what ever you like for now set at 100
If you have experience with using proxies please let me know <3
You are probably asking why i made this, and its simply he is 
a scammer and whats the point in manually spamming him when you can bot it !
*/


      const request = require('request');
       const fs = require('fs');
      var url = "https://formoid.net/api/push";
      let proxydata = fs.readFileSync('./proxies.txt', 'utf8');
      let proxies = proxydata.split("\n");
      let proxyi = 0;
      for(i = 0;i < args[0];i++) {
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
request.post(url,{form: data,proxy: `http://${proxies[proxyi]}`}, async function (err,res,body) {
            console.log(body)
            console.log(`Sending annunaki with the details %s:%s:%s with a dumb message using proxy: %s`, name, email, phone, proxies[proxyi]);
     
            proxyi++;
})
await new Promise(resolve => setTimeout(resolve, 3000));


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
