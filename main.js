
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

});


