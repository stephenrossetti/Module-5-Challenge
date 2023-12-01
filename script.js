
let scheduleArray = [
    {time: "9AM", event: ""},
    {time: "10AM", event: ""},
    {time: "11AM", event: ""},
    {time: "12PM", event: ""},
    {time: "1PM", event: ""},
    {time: "2PM", event: ""},
    {time: "3PM", event: ""},
    {time: "4PM", event: ""},
    {time: "5PM", event: ""},
];

let currentDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(currentDay);

let currentHour = dayjs().format('HH');
let currentHourInt = parseInt(currentHour);
console.log(currentHourInt);

$('.saveBtn').click (
    function () {
        let nineAM = $('.description').val();
        localStorage.setItem('nineAM', JSON.stringify(nineAM));
    }
);

function get () {
let getNineAM = localStorage.getItem('nineAM');
$('.description').textContent = JSON.parse(getNineAM);
}

get ();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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


function highlightHours () {
    if (currentHourInt < 9) {
      } else if (currentHourInt < 10 && currentHourInt >= 9) {
        $('#hour-9').addClass('present');
      } else if (currentHourInt < 11 && currentHourInt >= 10) {
        $('#hour-9').addClass('past');
        $('#hour-10').addClass('present');
      } else if (currentHourInt < 12 && currentHourInt >= 11) {
        $('#hour-9,#hour-10').addClass('past');
        $('#hour-11').addClass('present');
      } else if (currentHourInt < 13 && currentHourInt >= 12) {
        $('#hour-9,#hour-10,#hour-11').addClass('past');
        $('#hour-12').addClass('present');
      } else if (currentHourInt < 14 && currentHourInt >= 13) {
        $('#hour-9,#hour-10,#hour-11,#hour-12').addClass('past');
        $('#hour-13').addClass('present');
      } else if (currentHourInt < 15 && currentHourInt >= 14) {
        $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13').addClass('past');
        $('#hour-14').addClass('present');
      } else if (currentHourInt < 16 && currentHourInt >= 15) {
        $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14').addClass('past');  
        $('#hour-15').addClass('present');
      } else if (currentHourInt < 17 && currentHourInt >= 16) {
        $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14,#hour-15').addClass('past');           
        $('#hour-16').addClass('present');
      } else if (currentHourInt < 18 && currentHourInt >= 17) {
        $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14,#hour-15,#hour-16').addClass('past');    
        $('#hour-17').addClass('present');
      } else if (currentHourInt >= 18) {
        $('#hour-9,#hour-10,#hour-11,#hour-12,#hour-13,#hour-14,#hour-15,#hour-16,#hour-17').addClass('past');
      }
};

highlightHours ();
