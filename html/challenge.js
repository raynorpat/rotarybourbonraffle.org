$(document).ready (function(){
    $('.yes').click(function (){
        setTimeout(function () {
            window.location = 'https://go.rallyup.com/dwrotarybourbon';
        }, 2000);
        $('.errors').text('You are now being redirected to the raffle.');
        $('.errors').addClass("green");
        $('.main_container').hide();
    });

    $('.no').click(function (){
        $('.errors').text('You must be at least 21 years of age to enter the raffle.');
        $('.errors').addClass("red");
        $('.main_container').hide();
    });
});
