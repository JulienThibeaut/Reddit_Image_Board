$(document).ready(function ()
{

$('#hot').click(function() {
	$('.text').text('loading...');
	$.ajax({
		type: 'GET',
		url: 'https://www.reddit.com/r/pics/new.json?',
		success: function(response) {
			$('.text').text('');
			for (var i = 0; i < response.data.children.length; i++) {
				var thumbnail = response.data.children[i].data.preview.images[0].source.url;
				var link = response.data.children[i].data.url;
				var title = response.data.children[i].data.title;
				$('.image-list').append(
					'<li><a href="' + link + '" target="_blank">' +
					'<img class="thumbnail" src="' + thumbnail + '"></a><br /><p>' + title + '<p></li>');
			}
		}
	});
});

});