// Added a window.on 'load' listener to only run the function when window is loaded (i.e., browser has rendered all HTML)//
$(window).on('load', function () {
    
    // Added a variable for current day using Day.js and applied that variable as text in the #currentDay ID line of HTML// 
    let currentDay = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDay').text(currentDay);

    // Created variable for the current hour to utilize for highlightling timeblock rows for past/present/future functions//
    let currentHour = dayjs().format('HH');
    let currentHourInt = parseInt(currentHour);
    
    // Added a click event listener to the saveBtn. Since all div elements (hour-9, hour-10, etc.) have the same saveBtn ID for the button element, I utilized "this" to pinpoint the applicable element.//
    // Backtracked from "this" saveBtn ID using "sibling" to create a variable to add a value to the decription ID (i.e., added locally stored text to text area element and not button element)//
    // Backtracked from "this" saveBtn ID using "parent" to create a variable to grab the applicable hour title to organize local storage data (i.e., added locally stored descriptor to know what data to pull. For example, Hour-9 will have Hour-9 text)//
    $(".saveBtn").click(function (event) {
      event.preventDefault();
      let eventNote = $(this).siblings(".description").val();
      let hour = $(this).parent().attr("id");
      localStorage.setItem(hour, eventNote);
    });
  
    // Render value stored in localStorage (after saveBtn is clicked) that has applicable ID (e.g. hour-9) and class tag from the matching tag in localStorage//
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    // Likely a better way to do this, but created a function that turns the courrent hour in Day.js to an integer and then applies a past/present/future css attributed to each HTML timeblock based on what hour it is//
    // Since all timeblocks begin with 'future' css class, we just need to apply past/present changes// 
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
  
  //Run the coloring scheme function//
  highlightHours ();

  });



