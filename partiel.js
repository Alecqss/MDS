$(document).ready(function(){
	$('div').height($('div').width());

	

	$('#vdo').click(function(){
		$('iframe').attr('src','https://www.youtube.com/embed/boW_XClqrrw')
		$('iframe').show();
	});

	$('#vdo2').click(function(){
		$('iframe').attr('src','https://www.youtube.com/embed/SlCdYBQHgbg')
		$('iframe').show();
	});

	$('#vdo3').click(function(){
		$('iframe').attr('src','https://www.youtube.com/embed/jRyaRXesJa4')
		$('iframe').show();
	});

	// $('#loupe').hide();
	// $('td').hover(
    //   $('#loupe').show()
    // );

    var loupe = $('<div id="loupe"></div>').appendTo('#tableau').css("display","none");
    $('td').hover(
      function(){
        loupe.css("display","block");
        var $text = $(this).text();
        //console.log($text);
        loupe.text($text);
        // loupe.css("display","block").text($(this).text());   Autre manière
      },
      function(){
        loupe.css("display","none");
      }
    );

    $('#boite-onglet').click(function(){
    	$('#boite').show();
		$('#video').hide();
		$('#tableau').hide();
	});
	$('#video-onglet').click(function(){
		$('#video').show();
		$('#boite').hide();
		$('#tableau').hide();
	});
	$('#tableau-onglet').click(function(){
		$('#tableau').show();
		$('#boite').hide();
		$('#video').hide();
	});
});

