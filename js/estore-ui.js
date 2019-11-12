feather.replace();
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();

            $('#dismiss, .overlay').on('click', function () {
                $('#drawer').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#drawerCollapse').on('click', function () {
                $('#drawer').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
       $('.products-list').slick({
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
           responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
       // product slider
        $('.productSlider').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.productSlider',
          dots: true,
          centerMode: true,
          focusOnSelect: true
        });
    })

    var menu = new MmenuLight( document.querySelector( '#sideMenu' ), {
        // title: 'Menu',
        // theme: 'light',// 'dark'
        // slidingSubmenus: true,// false
        // selected: 'Selected'
      });
      menu.enable( 'all' ); // '(max-width: 900px)'
      menu.offcanvas({
        // position: 'left',// 'right'
        // move: true,// false
        // blockPage: true,// false / 'modal'
      });

      //  Open the menu.
      document.querySelector( 'a[href="#sideMenu"]' )
        .addEventListener( 'click', ( evnt ) => {
          menu.open();

          //  Don't forget to "preventDefault" and to "stopPropagation".
          evnt.preventDefault();
          evnt.stopPropagation();
        });
// tree view
$.fn.extend({
    treed: function (o) {
      
      var openedClass = 'feather-plus-circle';
      var closedClass = 'feather-plus-circle';
      
      if (typeof o != 'undefined'){
        if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
        }
        if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
        }
      };
      
        //initialize each of the top levels
        var tree = $(this);
        tree.addClass("tree");
        tree.find('li').has("ul").each(function () {
            var branch = $(this); //li with children ul
            branch.prepend("<i class='indicator feather " + closedClass + "'></i>");
            branch.addClass('branch');
            branch.on('click', function (e) {
                if (this == e.target) {
                    var icon = $(this).children('i:first');
                    icon.toggleClass(openedClass + " " + closedClass);
                    $(this).children().children().toggle();
                }
            })
            branch.children().children().toggle();
        });
        //fire event from the dynamically added icon
      tree.find('.branch .indicator').each(function(){
        $(this).on('click', function () {
            $(this).closest('li').click();
        });
      });
        //fire event to open branch if the li contains an anchor instead of text
        tree.find('.branch>a').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
        //fire event to open branch if the li contains a button instead of text
        tree.find('.branch>button').each(function () {
            $(this).on('click', function (e) {
                $(this).closest('li').click();
                e.preventDefault();
            });
        });
    }
});

//Initialization of treeviews

$('.tree-view').treed();

//$('#tree2').treed({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'});

