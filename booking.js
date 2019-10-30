
    /*--------------------Navigation----------*/
      $(document).ready(()=> {
        $(".fa-bars").click(()=> {
            console.log("hello")
            $("#head").toggleClass('active')
        })
        
    })



              /*--------------------Displaying Calender---------- */

          
              $(document).ready(()=>{
                $("#calendar").hide();

                $(".select > img").click(()=> {
                    $("#calendar").show();

                })
                
            })
        


            /*--------------------Displaying Time---------- */
            

            $(document).ready(()=>{
              $("#time").hide();

              $("td div").click(()=> {
                  $("#time").show();
                  
              });
          
              
          })
      

              
              



    
          /*--------------------Calendar Display---------- */

    
          /*--------------------Calling and assigning variables---------- */
          
          var Gdate = new Date();
          
        document.querySelector("#calendar").onload=renderDate();

          function renderDate(){
            
            Gdate.setDate(1);

          var Gmonth = Gdate.getMonth();
          
          var month = document.querySelector(".month");

          var Gday = Gdate.getDay();

          var year = Gdate.getFullYear();

          var day = document.querySelector(".day"); 
          
          
          
          var enddate = new Date(               
            Gdate.getFullYear(),
            Gdate.getMonth() + 1,
             0

          ).getDate();
      
          var prevdate = new Date(
            Gdate.getFullYear(),
            Gdate.getMonth(), 0
          ).getDate();
 
        var today = new Date();

          

          /*--------------------Month Display---------- */
          function Month () {
            var m = new Array();
            m[0] = "January" ;
            m[1] = "February";
            m[2] = "March";
            m[3] = "April";
            m[4] = "May";
            m[5] = "June";
            m[6] = "July";
            m[7] = "August";
            m[8] = "September";
            m[9] = "October";
            m[10] = "November";
            m[11] = "December";

           Gmonth = m[Gdate.getMonth()];
           month.innerHTML = Gmonth + ' , ' + Gdate.getFullYear();  
          }          
       Month();





           /*--------------------Day Display---------- */



 function Day() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
 day.innerHTML = n + " , " + Gmonth + " , " + d.getDate();
}
Day();



var cells = "";

for( x = Gday; x > 0; x--){
    cells+= "<div class='prevDate'>" + (prevdate - x + 1) + "</div>";
}


for (i = 1; i <= enddate; i++ ){
  
  if (i == today.getDate() && Gdate.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
  else
      cells += "<div>" + i + "</div>";
}
 document.getElementsByClassName("days")[0].innerHTML = cells;

}




/*--------------------Toggling between Prev and Next Month---------- */

function moveDate(rod){
  if (rod == "prev"){
    Gdate.setMonth(Gdate.getMonth() - 1);
  } 

  else if(rod == "next") {
  Gdate.setMonth(Gdate.getMonth() + 1);
}

renderDate();
}



            
