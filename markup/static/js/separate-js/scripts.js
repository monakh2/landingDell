$(document).ready(function(){

//images lazy loading

  $('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: "fadeIn",
    effectTime: 500,
    threshold: 0,
    visibleOnly: true
  });
  $('.pic').not('.nolazy').Lazy({
    scrollDirection: 'vertical',
    effect: "fadeIn",
    effectTime: 500,
    threshold: 0,
    visibleOnly: true,
    afterLoad: function(element) {
      element.addClass('show');
    }
  });



  $('.folds [data-fold]').on('click', function(){
    var thisId = $(this).data('fold');
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    $('[data-cat="'+thisId+'"]').siblings('[data-cat]').fadeOut(0);
    $('[data-cat="'+thisId+'"]').fadeIn(300);
  });


  //scroll by ankor

  $('a.toankor').click(function(e) {
    var id = $(this).attr("href");
    var offset = $(id).offset();

    $("html, body").animate({
      scrollTop: offset.top-100
    }, 700);
  });


  $('[data-showform]').on('click', function(e){
    e.preventDefault();
    var thisbtn = $(this);
    if(thisbtn.hasClass('colored')){
      var style = thisbtn.parents('.item').find('.caption').text();
      $('.formfloat[data-form="makeorder"] legend').text('Р—Р°РєР°Р·: '+style);
    }
    var thisId = thisbtn.data('showform');
    $('#formoverlay, .formfloat[data-form="'+thisId+'"]').fadeIn(200);

  });

  $('.formfloat .close').on('click', function(){
    $(this).parents('.formfloat').fadeOut(200);
    $('#formoverlay').fadeOut(200);
  });

  $('input[type="file"]').on('change', function(){
    $(this).parents('form').find('[data-emptyfile]').fadeOut(0);
    $(this).parents('form').find('.attached').fadeIn();
  });

  $('.delfile').on('click', function(e){
    e.preventDefault();
    $(this).parents('form').find('.attached').fadeOut(0);
    $(this).parents('form').find('[data-emptyfile]').fadeIn();
  });


  $('.spinnerfield').val(1);
  $('.spinnerfield').spinner({
    min: 1
  });

//header

  $(window).on('scroll', function(){
    var fTop = $('header').height();
    var wBB = $(window).scrollTop();
    if(fTop < wBB){
      if(!$('header').is('.fix')){
        $('header').addClass('fix');
      }
    } else {
      $('header.fix').removeClass('fix');
    }

  });



  //--up button
  $(window).scroll( function(){
    var wsup = $(window).scrollTop() - $('body').position().top;
    if (wsup > 50){
      $('#goup').animate({'opacity':1}, 0);
    } else {
      $('#goup').animate({'opacity':0}, 0);
    }
  });
  $('#goup').click(function () {
    $('html, body').animate({scrollTop: $('body').offset().top}, 500);
  });
  //!--up button


  $('[name="models"]').on('change', function(){
    var curimg = $(this).find('option:selected').data('img');
    var currack = $(this).find('option:selected').data('rack');
    $('[name="config"] .picbox .img').css('background-image', 'url('+curimg+')');
    $('[name="config"] [name="corp"][value="'+currack+'"]').prop('checked', true);
  })
  $('[name="config"] [name="corp"]').on('change', function(){
    var curimg = $('[name="models"] option[value="model00"]').data('img');
    $('[name="config"] .picbox .img').css('background-image', 'url('+curimg+')');
    $('[name="models"] option[value="model00"]').prop('selected', true);
  })


  $('[name="more"]').on('click', function(){
    $('.operbox').removeClass('active');
    $(this).parents('.operbox').toggleClass('active');
    $(this).parents('.catitem').siblings('.catitem').removeClass('chosen');
    $(this).parents('.catblock').siblings('.catblock').find('.catitem').removeClass('chosen');
    $(this).parents('.cat').siblings('.cat').find('.catitem').removeClass('chosen');
    $(this).parents('.catitem').toggleClass('chosen');
    $('.operbox').not('.active').find('.description').slideUp(100);
    $(this).parents('.operbox').find('.description').slideToggle(100);
    $('.catblock.cur').removeClass('cur');
    if(!$(this).parents('.catblock').hasClass('cur')){
      $(this).parents('.catblock').addClass('cur');
    }
  });


  $('#rightnow').on('click', function(){
    $('[data-form="promo"], #formoverlay').fadeIn('200');
  });

  $('[data-callform]').on('click', function(){
    $('[data-form="makeorder"], #formoverlay').fadeIn('200');
  });

  $('[name="order"]').on('click', function(){
    var product = $(this).parents('.catitem').find('.name').text();
    $('[data-form="makeorder"]').find('input[name="product"]').val(product);
    $('[data-form="makeorder"]').find('input[name="product"]').prop('disabled', true);
    $('[data-form="makeorder"], #formoverlay').fadeIn('200');
  });

  $('[name="configsend"]').on('click', function(){
    var product = $('[name="models"] option:selected').text();
    if(!$('[name="models"] option[value="model00"]:selected').length){
      $('[data-form="makeorder"]').find('input[name="product"]').val(product);
      $('[data-form="makeorder"]').find('input[name="product"]').prop('disabled', true);
    }
    $('[data-form="makeorder"], #formoverlay').fadeIn('200');
  });

  $('[data-form] .close').on('click', function(){
    $(this).parents('[data-form]').fadeOut(200);
    $('#formoverlay').fadeOut('200');
    $(this).parents('[data-form]').find('.field').val('');
    $(this).parents('[data-form]').find('.field').prop('disabled', false);
    $(this).parents('[data-form]').find('.field.error').removeClass('error');
  });

  $('.spoilerhead').click(function(){
    $(this).parents('.spoiler').find('.spoilerbody').slideToggle(100);
    $(this).toggleClass('active');
  });


});


function thanks(){
  $('#formoverlay, [data-form="thanks"]').fadeIn(200);
};
