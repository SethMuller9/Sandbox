$('.dropdown-toggle').dropdown();

$(document).ready(function(){
  $('.dropdown').click(function(e){
  	$(this).find('.faq-bars').toggleClass('open');
    $(this).find('.dropdown-menu').toggleClass('open');
    $($(e.target).find('.down-caret').toggleClass('open-caret'));
    e.preventDefault();
    e.stopPropagation();
    $(document).click(function(){
      $('.dropdown-menu').removeClass('open');
      $('.down-caret').removeClass('open-caret');
      $('.faq-bars').removeClass('open');

      console.log('Hello Mom');
    });
  });
});