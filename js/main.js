$(document).ready(function () {
      
    
    
    let tabsItem = $('.tabs-item');
    
    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');          
    });
    $('.more').click(function(){
        console.log("кликликлик");
        $('.content').toggle().toggleClass('visiblecontent');
    });
    
});