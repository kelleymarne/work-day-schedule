
// TODAYS DATE AT TOP OF PAGE//
var currentDay = moment().format('MMMM Do YYYY');
$('#currentDay').html(currentDay);
console.log(currentDay);


// save button click listener
$(document).ready(function () {
    $(".saveBtn").on('click', function () {
        // Get the values in the textarea descriptions
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log(this);

        // save text in local storage
        localStorage.setItem(time, text);

    });

    // Time Tracker Function
    function timeTracker() {
        var timeNow = moment().hour();

        // time block loops
        $('.time-block').each(function () {
            var timeBlock = parseInt($(this).attr('id').split('hour')[1]);

            // Check past, present, future and change classes for color indicator
            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }

            else if (timeBlock === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }

            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");

            }
        })
    }


    // retrieve from local storage
    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));


    timeTracker();
});


