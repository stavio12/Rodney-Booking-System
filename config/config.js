import{ config } from './keys.js';

// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: config.apiKey,
      authDomain: config.authDomain,
      databaseURL: config.databaseURL,
      projectId: config.projectId,
      storageBucket: config.storageBucket,
      messagingSenderId: config.messagingSenderId,
      appId: config.appId,
      measurementId: config.measurementId
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  const database =firebase.database();
  const rootRef = database.ref('Messages');
  
   document.querySelector('#sendMessage').addEventListener("click",function(){
     const Id = rootRef.push().key
    rootRef.child(Id).set({
      Fname: document.getElementById('fname').value,
      Lname: document.getElementById('lname').value,
      Email: document.getElementById('email').value,
      Telephone: document.getElementById('tel').value,
      Subject: document.getElementById('subject').value,
      Message: document.getElementById('message').value
    });
 
    // document.querySelector('#form').reset()
  
  })
  


  



//   const root_Ref = database.ref('Session Booking');


// function sendSession(){
//    const Id = rootRef.push().key
//   root_Ref.child(Id).set({
//     Fname : document.querySelector("#fname").value,
//     Lname : document.querySelector("#lname").value,
//     Email : document.querySelector("#email").value,
//     Telephone : document.querySelector("#tel").value,
//     Date: `${dates} / ${currentMonth} / ${currentYear}` ,
//     Time: `${timer}` 
//   });


//   form = document.querySelector("#form")
  
  
//   form.reset()

// }  


