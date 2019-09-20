const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

//Add song to database
function addSongToDatabase(song){
  if(song!=null && typeof (song)==='object' ){
    songDatabase.push(song);
  }
  }

  //add some of your favorite songs to the database
  addSongToDatabase({
    songId: 5,
      title: 'Every Day in my life',
      artist: ' I dontknow',
  });
  addSongToDatabase({
    songId: 6,
      title: 'I donot care',
      artist: ' Justin Bieber',
  })
  addSongToDatabase({
    songId: 7,
      title: 'I donot care',
      artist: 'Soggy socks',
  })
  //console.log(songDatabase)
  
  //Searching for a song
  function getSongByTitle(title){
    for(i=0;i<songDatabase.length;i++){
      if(songDatabase[i].title===title){
        return songDatabase[i];
      }  
    }
  return ("There is no song with the given title");
  }
  const searchedSong1 = getSongByTitle('Every Day in my life');
  console.log("\nSearched song1 :",searchedSong1);
  const searchedSong2 = getSongByTitle('my day');
  console.log("\n\nSearched song2 :",searchedSong2);
  
//Optional: Add fuzzy search
function getSongByTitleFuzzy(title) {
  const titleSplit = (title.split(' '));
  for (let i = 0; i < titleSplit.length; i++) {
      for (let j = 0; j < songDatabase.length; j++) {
          const titleDatabase = songDatabase[j].title.toLowerCase();  
          const titleSearched = titleSplit[i].toLowerCase();
          if (titleDatabase.search(titleSearched) >= 0) {
              return songDatabase[j];
          } 
      }
  }
  return("There is no such song name in the database");
}
console.log("\n\nResult of Fuzzy search of given title",getSongByTitleFuzzy('when'));

  //Create our own playlist
  const myPlaylist = [];
  function addSongToMyPlaylist(title){
    return myPlaylist .push(getSongByTitle(title));
    }
    addSongToMyPlaylist('I donot care');
    addSongToMyPlaylist('When is enough too little?');
    console.log("\nMy playlist :" ,myPlaylist); 
  
  
    //Improving our application 
    // multiple songs with the same name(duplictaes)
    function hasDuplicates(title) {
      const songs = [];
      for (let i = 0; i <songDatabase.length; i++) {
        if(songDatabase[i].title.includes(title)){
         songs.push(songDatabase[i])
        }
      }
      return songs
    }
    //console.log(songDatabase)
    const songsWithSameName=hasDuplicates('I donot care');
    console.log("\nMultiple songs with same title:",songsWithSameName);
  
  
  