
//1. Does it work? Are the two files liked up properly? console.log ('it works!')


//$('.show_filters').on('click', function () {
  //2. does the code grab the right place in the DOM? console.log ('you have clicked the filter')

  //3. if you like you can toggle the filter items on click with

$('h1').on('click', function () {
  $('.item').toggle(400)
})

$('.fire').on('click', function () {
   $('.fire').hide(400)
})

$('.bulb').on('click', function () {
   $('.bulb').hide(400)
})

$('.pill').on('click', function () {
   $('.pill').hide(400)
})

$('.leaf').on('click', function () {
   $('.leaf').hide(400)
})

$('.detergent').on('click', function () {
   $('.detergent').hide(400)
})


 //if ($(img).is(':visible')) {
  // $('img').slideUp ()
   //$('.show_filters').text('Show filters')
  //} else {
    //$('.filters li').slideDown ()
  //  $('.show_filters').text('Hide filters')
//  }

//})

//$(this)
//})

//$('.filter li a').on('click', function () {

  // check that it grabs the right place in the DOM with:
  // console.log('you have clicked a filter');

  //link between the element and what you are controlling inside of your function. chack with
  // console.log($(this).data('filter'))

  //set up a variable that can be used over and over again
  //var filter = $(this).attr('data-filter');
  // console.log(filter);

 //hide all the products
 //show products with a partiular filter

 //$('.ice_cream').hide(500);
 //$(filter).show(800);
 // console.log($('.green'));
 // $('.green').show();

 // give each of the clicked filters the selected class

 //$('.filter li a').removeClass('selected')
 //$(this).addClass('selected')

  // stop javascript from trying to navigate to link given in <a> tag
  //return false

//})

//$('.container h1').on('click', function () {
  //console.log("you clicked the h1")
//  $('.ice_cream').show(700);
//})
