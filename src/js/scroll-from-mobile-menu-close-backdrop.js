      $('a.scrollto').click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;
        jQuery('html:not(:animated),body:not(:animated)').animate(
          {
            scrollTop: destination,
          },
          800,
        );
        document.querySelector('[data-menu-backdrop]').classList.toggle('is-open-backdrop');
        return false;
      });
