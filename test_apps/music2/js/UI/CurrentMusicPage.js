var CurrentMusicPage = function(){

  Utils.loadDomIds(this, [
      "currentMusicPageHeaderTitle"
  ]);

  this.controls = new CurrentMusicPageControls();

  var currentPlaylistView = document.getElementById('currentPlaylistView');
  this.playlist = new PlaylistView(currentPlaylistView);

  this.source = new CurrentMusicPageSource();
}

CurrentMusicPage.prototype = {
  setTitle: function(text){
    this.dom.currentMusicPageHeaderTitle.innerHTML = text;
  }
}
