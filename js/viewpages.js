$(document).ready(function () {
    window.scrollTo(0,700);
});


$(document).scroll(function(){
 if($(window).scrollTop() < 1350){
   $('#qbox-prep').addClass('qbox-prep-before');
   $('#qbox-prep').removeClass('qbox-prep-after');
 }
 else if($(window).scrollTop() > 1350){
   $('#qbox-prep').addClass('qbox-prep-after');
   $('#qbox-prep').removeClass('qbox-prep-before');
 }
});
