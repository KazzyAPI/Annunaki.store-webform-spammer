/*Change this for loop to what ever you like for now set at 100
If you have experience with using proxies please let me know <3
You are probably asking why i made this, and its simply he is 
a scammer and whats the point in manually spamming him when you can bot it !
*/


      var url = "https://formoid.net/api/push";
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var xhr = new XMLHttpRequest();
      for(i = 0;i < 100;i++) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        try {
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};
   
     let name = makeid(8);
     let email = makeid(5) + '@gmail.com';
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
console.log(`Sending annunaki with the details %s:%s:%s with a dumb message :D`, name, email, phone)
xhr.send(data);
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
