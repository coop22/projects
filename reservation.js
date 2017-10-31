$(function(){
    $('div').click(function(){
         $(this).toggleClass('clicked');
         $('span', this).toggle();
         $('div', this).toggle();
    });
    
    // $('li').hover(function(){
    //   $(this).fadeTo('fast', 0.25);
    // }, function(){
    //   $(this).fadeTo('fast', 1);
    // });
    
    });
    
    // function add(){
    //   var firstName = document.getElementById("firstname");
    //   var lastName = document.getElementById("lastname");
    //   var showTime = document.getElementById("seat-number");
    //   console.log(firstName.value, lastName.value, showTime.value);
    // }
    var reserved =[];
    $('button').on('click', function(){
     var name = $('#name').val();
     var seatNumber = $('#seat-number').val();
     reserved.push ({
       name : name, seatNumber: seatNumber
       });
      console.log(reserved);
      
    });
    
    $('div').hover(function(){
     for (var i =0; i < reserved.length; i++){
       var $div = $(this);
       if($div.text() == reserved[i].seatNumber){
         $div.text(reserved[i].name);
       }
     }
    });