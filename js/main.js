$(document).ready(function () {
    if ($(window).width() < 768) {
        $('.spikers-list li').each(function () {
            if ($(this).children('.spiker-image').index() == 1) {
                var el = $(this).children('.spiker-image').detach();
                $(this).prepend(el);
            }
        });

        $(document).on('click', '.mobile-navigation a', function(){
           var pr = $(this).parent();
            pr.siblings().removeClass('active');
            pr.addClass('active');
        });
    }
    if ($(window).width() < 480) {
        $('table tr').eq(1).find('td').eq(0).text('Участие');
    }

    $('a[href^=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 70
        }, 1500);
        e.preventDefault();
    });

    $(document).on('click', '.video img', function () {
        var id = $(this).attr('data-id');
        var height = $(this).attr('data-height');
        $(this).after('<iframe width="100%" height="' + height + '" src="//www.youtube.com/embed/' + id + '?rel=0&amp;vq=hd720&amp;autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>');
        $(this).remove();
    });

    $(document).on('click', '.navbar-toggle', function () {
        $('.mobile-navigation').slideToggle('slow');
    });

    });

