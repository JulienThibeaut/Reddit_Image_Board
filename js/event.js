$(document).ready(function ()
{

  loadPage();

    $('.size').on('change', function() {
        prepPage();
    });

    $('.sort').on('change', function() {
        prepPage();
    });

    function whatSize(chooseSize){
      switch (chooseSize) {
        case "#small":
          return ('img_contenerS');
          break;
        case "#medium":
          return ('img_contenerM');
          break;
        case "#large":
          return ('img_contenerL');
          break;
        default:
          return ('img_contenerM');
        }
    };

    $("#hot").click(function(){
        $(".content").load("https://www.reddit.com/r/pics/hot.json?");
    });

    $("#hot").click(function(){
        $("#div1").load("demo_test.txt");
    });


    function whatSort(chooseSort){
      switch (chooseSort) {
        case "#hot":
          return('https://www.reddit.com/r/pics/hot.json?');
          break;
        case "#new":
          return('https://www.reddit.com/r/pics/new.json?');
          break;
        case "#rising":
          return('https://www.reddit.com/r/pics/rising.json?');
          break;
        case "#controversial":
          return('https://www.reddit.com/r/pics/controversial.json?');
          break;
		default :
		  return('https://www.reddit.com/r/pics/.json?');		
        }
    };

    function prepPage(){
      $('.content').empty();
      resolution = sizeHandler($('.size').val());
      url = sortHandler($('.sort').val());
      displayer(resolution, url);
    }

    function displayer(resolution, url) {

      // Préparation de la requête, URL fixe
      var requete = url;
      var photos;
      var varTab=$.getJSON(requete,function(data)
        {
         photos=data;
          dataReady(resolution);
        });
        function dataReady(resolution)
        {
          $.each(photos.data.children, function(k, v) {
              if(typeof (v.data) != 'undefined'){
                if(typeof(v.data.preview) != 'undefined'){
                    var datImage =  '<div class='+resolution+'>'+
                                    '<div class="img_title">'+v.data.title+'</div>'+
                                    '<img   src='+v.data.preview.images[0].source.url+' alt='+v.data.title+'>'+
                                    '</div>';

                  $('.content').append(datImage);
                };
              };
            });
        }
    }


});