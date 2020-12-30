
// using jquery
$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".slider").slider({full_width:true});
    $('.parallax').parallax();
    $('.myshift').carousel({
        numVisible:7,
        shift:20,
        padding:20,
    });


    

});

function toggleModal(){
    var instance = M.Modal.getInstance($('.modal'));
    instance.open();
}