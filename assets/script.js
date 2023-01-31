$(document).ready(function () {
  //First, get todays date on top of page

  var todayDate = dayjs();
  $("#currentDay").text(todayDate.format("dddd, MMMM D"));

  //create variable to track the current hour
  var hourTime = dayjs().format("H");







  //write function to handle save button
  for (let i = 9; i < 17; i++) {
    var dataStore = localStorage.getItem('hour-' + i)
    $('#hour-' + i + ' .description').val(dataStore)
    // var id = $(this).parent().attr("id")
    // var hourColor = id.slice(4)
    console.log(dataStore)
  }


  $(".saveBtn").click(function () {
    var id = $(this).parent().attr("id");
    var textArea = $(this).siblings(".description").val();
    localStorage.setItem(id,textArea);
  });

  console.log(hourTime);

  // function hourMon() {
  //   var thisHour = hourTime
  //   console.log(hourTime)
  // }

  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
