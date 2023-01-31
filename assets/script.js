//create function to wrap all JS to run after page is loaded
$(document).ready(function () {


  //First, get todays date on top of page by referencing day.js documentation
  var todayDate = dayjs();
  $("#currentDay").text(todayDate.format("dddd, MMMM D"));

  
  //calling hourColor function to set the appropriate color according to current hour
  hourColor();

  function hourColor() {
    //create a variable to reference the current hour we are in
    var hourTime = dayjs().format("H");
    //creating a function to look at each div with the time-block class
    $(".time-block").each(function() {
      //created a variable using 'this' to seperate the hour associated with each time block and turn it into a number 
      var hourCode = parseInt($(this).attr('id').split('hour-')[1]);
      //if else statements to compare each time blocks hour to the current hour and set the color accordingly
      if (hourTime == hourCode) {
        $(this).addClass("present")
        $(this).removeClass("future")
        $(this).removeClass("past")
      } else if (hourTime > hourCode) {
        $(this).addClass("past")
        $(this).removeClass("present")
        $(this).removeClass("future")
      } else {
        $(this).addClass("future")
        $(this).removeClass("present")
        $(this).removeClass("past")
      }

    })
  }

  //for loop starting at 9am stopping at 5pm
  //this for loop is retrieving stored data and displaying in the correct time block
  for (let i = 9; i < 18; i++) {
    var dataStore = localStorage.getItem('hour-' + i);
    $('#hour-' + i + ' .description').val(dataStore);
  }

  //function with event listener for the save button
  //assigning the id as thr 'key' and the user input from the text area as the value
  //storing in local storage
  $(".saveBtn").click(function () {
    var id = $(this).parent().attr("id");
    var textArea = $(this).siblings(".description").val();
    localStorage.setItem(id,textArea);
  });

  //it wasn't asked but I added a clear storage button for practicality.
  $(".clearStorage").click(function() {
    localStorage.clear()
  })
  });
