$(document).ready(function ()
{

  var url = 'https://www.reddit.com/r/pics/.json?';
  var size = 'imgContent';
  
  display(size, url);
  
  document.querySelector(".sort").addEventListener("change",function(e) {
    var idx = e.target.selectedIndex;
    url = e.target.options[idx].dataset.url;
    display(size, url);
  });

  document.querySelector(".size").addEventListener("change",function(e) {
    var idx = e.target.selectedIndex;
    size = e.target.options[idx].dataset.img;
    display(size, url);
  });
  
  function display(size, url){
    $('.content').empty();
    
    $.getJSON(url, function (data) {
      $.each(data.data.children, function (i, item) {
        if(item.data.preview!=undefined){
          var thumbnail = item.data.preview.images[0].source.url;
          var link = item.data.preview.images[0].source.url;
          var title = item.data.title;
          $('.content').append(
          '<a href="' + link + '" target="_blank">'+'<div class='+size+'>'+
          '<div class="img_title">'+title+'</div>'+
          '<img   src='+link+' alt='+title+'>'+
          '</div>');
        };
      });
    });
  }
});