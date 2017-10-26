// noinspection Annotator
// noinspection Annotator
$(document).ready(function(){
  
  // variables
  // noinspection Annotator
    var $header_top = $('.header-top');
  // noinspection Annotator
    var $nav = $('nav');



  // toggle menu 
  // noinspection Annotator
    // noinspection Annotator
    $header_top.find('a').on('click', function() {
    // noinspection Annotator
        // noinspection Annotator
        $(this).parent().toggleClass('open-menu');
  });



  // fullpage customization
  // noinspection Annotator
    // noinspection Annotator
    $('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: false,
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    anchors: ['firstSection'],
    menu: '#menu',

    afterLoad: function(anchorLink, index) {
      // noinspection Annotator
        $header_top.css('background', 'rgba(0, 47, 77, .3)');
      // noinspection Annotator
        $nav.css('background', 'rgba(0, 47, 77, .25)');
      if (index == 5) {
          // noinspection Annotator
          // noinspection Annotator
          $('#fp-nav').hide();
        }
    },

    onLeave: function(index, nextIndex, direction) {
      if(index == 5) {
        // noinspection Annotator
          $('#fp-nav').show();
      }
    },

    /*afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          $.fn.fullpage.setAllowScrolling(false, 'up');
        // noinspection Annotator
          $header_top.css('background', 'transparent');
        // noinspection Annotator
          $nav.css('background', 'transparent');
        // noinspection Annotator
          // noinspection Annotator
          $(this).css('background', '#374140');
        // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          $(this).find('h2').css('color', 'white');
        // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          $(this).find('h3').css('color', 'white');
        // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          $(this).find('p').css(
          {
            'color': '#DC3522',
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
      }
    },

    onSlideLeave: function( anchorLink, index, slideIndex, direction) {
      if(anchorLink == 'fifthSection' && slideIndex == 1) {
        // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          // noinspection Annotator
          $.fn.fullpage.setAllowScrolling(true, 'up');
        // noinspection Annotator
          $header_top.css('background', 'rgba(0, 47, 77, .3)');
        // noinspection Annotator
          $nav.css('background', 'rgba(0, 47, 77, .25)');
      }
    } */
  }); 
});