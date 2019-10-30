
//Movies exercise
  fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
  
    .then(response => response.json())
    .then(movies => {
      const badMovies = movies.filter(movie => movie.rating < 4);
      console.log('Bad Movies are:', badMovies);

      const moviesafter2000 = badMovies.filter(badMovies => badMovies.year > 2000);
      console.log('Movies Science 2000 are:', moviesafter2000);

      const titleBadMovies = badMovies.filter(badMovies => badMovies.title);
      console.log('Bad Movies Titles are:', titleBadMovies);
    });