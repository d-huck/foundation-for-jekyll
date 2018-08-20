var request = new XMLHttpRequest();

request.open('GET', 'http://stream.vaporwav.in/api/nowplaying', true);
request.onload = function () {

  // Begin accessing JSON data here
  var response = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    var artwork = response[0].now_playing.song.art;
    var current_dj = response[0].now_playing.song.artist;
    var track_description = response[0].now_playing.song.lyrics;
    var track_name = response[0].now_playing.song.title;
    var is_live = response[0].live.is_live;
    // console.log("Current Artwork is: " + artwork);
    // console.log(current_dj);
    // console.log(track_description);
    // console.log(track_name);
  } else {
    console.log('error');
  }
  if (is_live == true) {
    console.log('The content is currently live');
  } else {
    document.getElementById('track_artwork').style = 'background: linear-gradient(rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url('+artwork+'); background-position: 50% 50%; background-repeat: no-repeat; background-size: cover;';
    // document.getElementById('current_dj').innerHTML = current_dj;
    document.getElementById('np_current_dj').innerHTML = current_dj;
    // document.getElementById('track_description').innerHTML = track_description;
    // document.getElementById('track_name').innerHTML = track_name;
    document.getElementById('np_track_name').innerHTML = track_name;
  }


}

request.send();
