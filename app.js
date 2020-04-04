$(document).ready(function() {
  $(".time").click(function () {
      $(this).addClass("active");
      $(".time").not(this).removeClass("active");
  });
  
  });

  $(document).ready(function() {
    $("td").click(function () {
        $(this).css({"width":"2em",
        "background-color": "#D3D3D3"})
        $("td").not(this).css({"width":"",
        "background-color": ""});
    });
    
    });



const currentDate = document.querySelector('#calendar'),
currentTime = document.querySelector('#time'),
sendBtn = document.querySelector('#sendBtn'),
currentDay = document.querySelector('#day')





let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();


let months = [
  "January",
  "Feburary",
  "March", 
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October", 
  "November", 
  "December"
]





let monthAndYear = document.querySelector("#month");

showCalendar(currentMonth, currentYear);

function showCalendar(month,year){
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(month, year, 32).getDate();

  let tbl =document.querySelector('#calendar');

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + ", " + year


function Day() {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[today.getDay()];
  currentDay.innerHTML = n + " , " + months[month] + " , " + today.getDate();
}
Day()



  let date = 1;

  for(let i = 0; i < 6; i++){
    let row = document.createElement('tr');
    for(let j = 0; j< 7; j++){      
      if(i === 0 && j < firstDay){
        let cell =document.createElement('td');
        let cellText = document.createTextNode("")
            cell.appendChild(cellText);
            row.appendChild(cell);
      }

      else if(date > daysInMonth){
 break;
      }

      else{
        let cell =document.createElement('td');
        let cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }

      date++

    }
    tbl.appendChild(row);

  }
}





function previous(){
  currentYear = (currentMonth === 0)? currentYear -1: currentYear
  currentMonth = currentMonth === 0? 11 : currentMonth -1
  showCalendar(currentMonth, currentYear);
}


function next(){
  currentYear = currentMonth === 11 ? currentYear + 1: currentYear
  currentMonth = (currentMonth + 1) % 12
  showCalendar(currentMonth, currentYear);
}








eventListener();

function eventListener(){
  
  currentDate.addEventListener('click', selectedDay);  

  currentTime.addEventListener('click', selectedTime);  


}



function selectedDay(dated){
  dates= dated.target.innerText;

  currentDay.innerHTML = dates + " / "  + currentMonth + " / "+ currentYear

  return  dates.selectedTDay
}

// currentTime = document.querySelector('#time'),
// sendBtn = document.querySelector('#sendBtn'),
// currentDay = document.querySelector('#day')




function selectedTime(timed){


  timer= timed.target.innerText;

  return timer.selectedTDay





}




  var firebaseConfig = {
    apiKey: "AIzaSyDRiP6fT9F-8c5z054E9cOqsep_s0ZgUk4",
    authDomain: "rodney-ticketing.firebaseapp.com",
    databaseURL: "https://rodney-ticketing.firebaseio.com",
    projectId: "rodney-ticketing",
    storageBucket: "rodney-ticketing.appspot.com",
    messagingSenderId: "423709569593",
    appId: "1:423709569593:web:37fd39d2dbbd18d1b613e8",
    measurementId: "G-THKT90Y1SY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const rootRef = database.ref('Session Booking');


function sendSession(){
   const Id = rootRef.push().key
  rootRef.child(Id).set({
    Fname : document.querySelector("#fname").value,
    Lname : document.querySelector("#lname").value,
    Email : document.querySelector("#email").value,
    Telephone : document.querySelector("#tel").value,
    Date: `${dates} / ${currentMonth} / ${currentYear}` ,
    Time: `${timer}` 
  });


  form = document.querySelector("#form")
  
  
  form.reset()

}  






