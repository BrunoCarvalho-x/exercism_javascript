export function removeDuplicates(playlist) {
  let newPlayList = new Array();

  for (let i = 0; i < playlist.length; i++) {
    if (newPlayList.indexOf(playlist[i]) == -1) {
      newPlayList.push(playlist[i]);
    }
  }

  return newPlayList;
}

export function hasTrack(playlist, track) {
  return playlist.indexOf(track) == -1 ? false : true;
}

export function addTrack(playlist, track) {
  playlist.push(track);

  return removeDuplicates(playlist);
}

export function deleteTrack(playlist, track) {
  if (playlist.indexOf(track) != -1) {
    playlist.splice(playlist.indexOf(track), 1);
  }

  return playlist;
}

export function listArtists(playlist) {
  let listArtists = new Array();

  for (let i = 0; i < playlist.length; i++) {
    const artist = playlist[i].split('-')[1].trim();

    if (listArtists.indexOf(artist) == -1) {
      listArtists.push(artist);
    }
  }

  return listArtists;
}
