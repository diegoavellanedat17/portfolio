$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

// Type Writer to introduce Myself
$.fn.typewriter = function() {
    this.each(function() {
      var c = $(this),
        b = c.html(),
        a = 0,
        d = 0;
      c.html("");
      var e = function() {
        if ("<" == b.substring(a, a + 1)) {
          var f = new RegExp(/<span class="instant"/),
            g = new RegExp(/<span class="clear"/);
          if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
          else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
          else
            for (;
              ">" != b.substring(a, a + 1);) a++
        }
        c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
        a >= b.length || setTimeout(e, 70 + 50 *
          Math.random())
      };
      e()
    });
    return this
  };
  $(".terminal").typewriter();



  const formulario=document.forms['formulario']

  formulario.addEventListener('submit', enviarMensaje);

  function enviarMensaje(event){
    event.preventDefault();
    const email = formulario['email'].value;
    console.log(email)

    Email.send({
        SecureToken : "6690898e-38b0-4429-88cb-d8926b69cbbd",
        // Host : "smtp.elasticemail.com",
        // Username : "diego.avellaneda1733@gmail.com",
        // Password : "547c4c94-dccf-4c3d-8c6c-924c87da53d3",
        To : 'diego.avellaneda1733@gmail.com',
        From : "diego.avellaneda1733@gmail.com",
        Subject : "Nuevo mensaje de cliente en Dover",
        Body : email
    }).then(
      message => {
          console.log(message)
          alert('El mensaje fue enviado al lab')
        
            }

    );

  }

