
// TODAYS DATE AT TOP OF PAGE//
    var currentDay = moment().format('MMMM Do YYYY');
    $('#currentDay').html(currentDay);
    console.log(currentDay);

// save button click listener
$(document).ready(function() {
    $(".saveBtn").on('click', function() {
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
        if(timeBlock < timeNow) {
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

    timeTracker();
});


