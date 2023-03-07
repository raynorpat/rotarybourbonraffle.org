$(document).ready (function(){
    $('.yes').click(function (){
        setTimeout(function () {
            window.location = 'https://go.rallyup.com/dwrotarybourbon';
        }, 2000);
        $('.errors').text('Success! You are now being redirected to the raffle...');
        $('.errors').addClass("green");
        $('.main_container').hide();
    });

    $('.no').click(function (){
        $('.errors').text('We are sorry! You must be 21 years of age or older to enter the raffle.');
        $('.errors').addClass("red");
        $('.main_container').hide();
    });
});
