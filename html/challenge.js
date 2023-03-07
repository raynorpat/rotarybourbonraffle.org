function calculateAge (userDay,userMonth,userYear,nowDate) {
    var age = nowDate.getFullYear() - userYear;
    var ay = nowDate.getMonth(); 
    var gun = nowDate.getUTCDate();
    if(userMonth > nowDate.getMonth()) {
        age--;
    }
    else if (userMonth == nowDate.getMonth() && userDay > nowDate.getUTCDate()) {
        age--;
    }
        return age;
}

// Year range should be from 1920 to (current year=2023)
function isYearValid(year) {
    var regex = /^[0-9]+$/;
    if (!regex.test(year)){
        return false;
    }
    var test = year.length;
    if (year == "" || year.length != 4) {
        return false;
    }  
    var currentDate = new Date();
    var intYear = parseInt(year);
    if (intYear < currentDate.getFullYear() && intYear >= 1920 ) {
        return true;
    } 
}

$(document).ready (function(){
    $('.submit_date').click(function (){

      var $selectedMonth = $('.month').find('option:selected');
      var monthIndex = parseInt($selectedMonth.val());
      var day = parseInt($('.day').val());    

      if(monthIndex == 0 || monthIndex == 2 || monthIndex == 4
        || monthIndex == 6 ||monthIndex == 7 || monthIndex == 9
        || monthIndex == 11 ){
            if(day<1 || day>31){
              $('.errors').text('Day Format should be between 1 - 31');
              $('.errors').addClass("red");
              $('.main_container').hide();
              return;
              }
        }else if(monthIndex == 3 || monthIndex == 5|| monthIndex == 8
          || monthIndex == 9 ){
            if(day<1 || day>30){

            $('.errors').text('Day Format should be between 1 - 30');
            $('.errors').addClass("red");
            $('.main_container').hide();
            return;
            }
          }else if(monthIndex == 1){
            if(day<1 || day>28){
                $('.errors').text('Day Format should be between 1 - 28');
            $('.errors').addClass("red");
            $('.main_container').hide();
            return;
            }
          }

        var year =  $('.year').val();
        var userYear;

        if (isYearValid(year) ) {
          userYear = parseInt(year);
        } else {
            $('.errors').text('Date is invalid or empty.');
            $('.errors').addClass("red");
            $('.main_container').hide();
            return;
            
        }  

        var now = new Date ();
        var age = calculateAge(day,monthIndex,userYear,now);

        if (age >= 21 ){
            setTimeout(function () {
                window.location = 'https://go.rallyup.com/dwrotarybourbon/Campaign/Details';
            }, 2000);
            $('.errors').text('Success! You are now being redirected to the raffle...');
            $('.errors').addClass("green");
        } else {
            $('.errors').text('We are sorry! You must be 21 years of age or older to enter the raffle.');
            $('.errors').addClass("red");
        } 
            $('.main_container').hide();
        });
});
