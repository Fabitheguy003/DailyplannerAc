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
    
 