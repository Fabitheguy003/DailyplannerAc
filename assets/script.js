let planData = {};
let currentdate =  dayjs().format('DD/MM/YYYY');
$("#currentdate").html(currentdate);

let hour = dayjs().hour()


$(document).ready(function() {

  // TODO: Add a listener for click events on the save button. This code should
  $(".saveBtn").on("click", function() {
    let t8 = $('#hour-8 .description').val();
    console.log(t8); 

    for (let i = 7; i <= 17; i++) {
      planData['t' + i] = $('#hour-' + i +' .description').val();
    }
    console.log(planData);
    localStorage.setItem("planData", JSON.stringify(planData));
  });
    
  function Updaterforhour() {

    
    let currentHour = dayjs().hour();
    console.log(currentHour);
     
      // Create a jQuery loop over all time blocks
      $(".time-block").each(function() {
        var blocktime = parseInt($(this).attr("id").split("-")[1]);
  
        
        if (blocktime < currentHour) {
          // Hours on calendar taking place before current hour of day, rows will appear grey as determined by class "past"
          $(this).addClass("past");
          // If current hour is the same as that of calendar, row will appear greenas determined by class "present"--removing "past"
        } else if (blocktime === currentHour) {
          $(this).removeClass("past").addClass("present");
          // Hours on calendar taking place after current hour of day, row will appear green as determined by class "future"--removing "past" and "present"
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
    Updaterforhour();

    LoadedPlanData = localStorage.getItem("planData");

    if (LoadedPlanData){
     planData = JSON.parse( LoadedPlanData)
    }
    
    for (let i = 7; i <= 17; i++) {
   
     $('#hour-' + i +' .description').val(planData['t' + i]); 
   }
 
   dayjs().format('DD/MM/YYYY')
 });
 
 
 for (let i = 7; i <= 17; i++) {
  
   if ( i == hour) { 
     $('#hour-' + i).addClass("present"); 
   }
   else if (i > hour) {
     $('#hour-' + i).addClass("future"); 
   }
   else if (i < hour) {
     $('#hour-' + i).addClass("past");  
   }
 }