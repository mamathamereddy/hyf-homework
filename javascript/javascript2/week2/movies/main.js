const movies = require ('./movies.js').movies;

//1. Movies with a short title
const shortTitle = movies.filter (element => element.title.length <= 2);
console.log ('Movies with short title are:', shortTitle);

//2.Long movie titles
const longTitle = movies.filter (item => item.title.length >= 40);
console.log ('Movies with Long title are:', longTitle);

//3.Number of movies made between 1980-1989 (including both the years)
const moviesRelease = movies.filter (item => item.year >= 1980 && item.year <= 1989)
console.log ('number of movies made between 1980-1989 including both the years:',moviesRelease)

//4.Adding extra key called tag.
const extraTag = movies.forEach (item => {
  if (item.rating >= 7) {
    item.tag = 'Good';
  } else if (item.rating >= 4 && item.rating < 7) {
    item.tag = 'Average';
  } else {
    item.tag = 'Bad';
  }
});
console.log ('movies withextra key added', movies);

//5.Movies rated higher than 6
const movieRating = movies.filter (item => item.rating > 6)
  .map (item => item.rating);
console.log (movieRating);

//6.Number of movies containing any of following keywords: Surfer, Alien or Benjamin.
const includeKeywords = movies.filter(item => {
  const title = item.title.toLowerCase();
  return (title.includes('surfer') ||title.includes('alien') ||title.includes('benjamin'));
}).length;
console.log('movies containing surfer, alien and benjamin are : ',includeKeyword);

/*//or
  const title = item.title;
  return (title.search (/Surfer/i) >= 0 ||title.search (/Alien/i) >= 0 ||title.search (/Benjamin/i) >= 0) //where i is the case insensitive modifier*/

//9.Average rating of all movies
const avgRating = movies.reduce ((acc, item) => acc + item.rating / movies.length, 0).toFixed (2);
console.log ('Average rating of all movies is:', avgRating);

// 10.Total number of good movies
const countTotalNumber = movies.reduce(
  (acc, movie) => {
    if (movie.tag === 'Good') {
      acc.good += 1;
    } else if (movie.tag === 'Average') {
      acc.average += 1;
    } else {
      acc.bad += 1;
    }
    return {
      ...acc
    };
  }, {
    good: 0,
    average: 0,
    bad: 0
  }
);

console.log(countTotalNumber);





/*working 
const goodMovies = movies.map (item => item.tag === 'Good');
const totalGoodmovies = goodMovies.reduce ((acc, item) => acc + item);
console.log ('Total no.of Good Movies are:', totalGoodmovies);
// Total number of average movies
const avgmovies = movies.map (item => item.tag === 'Average');
const totalAvgmovies = avgmovies.reduce ((acc, item) => acc + item);
console.log ('Total no.of Average Movies are:', totalAvgmovies);
// Total number of bad movies
const badmovies = movies.map (item => item.tag === 'Bad');
const totalBadmovies = badmovies.reduce ((acc, item) => acc + item);
console.log ('Total no.of Bad Movies are:', totalBadmovies);

/*
//or// 10.Total number of good movies(working)
const totalGoodmovies=movies.reduce((acc,item)=> item.tag==='Good' ? acc += 1 : acc,0)
console.log(totalGoodmovies)

// Total number of average movies
const totalAvgmovies=movie.reduce((acc,item)=> item.tag==='Average' ? acc += 1 : acc,0)
console.log(totalAvgmovies)

//Total number of bad movies
/*const totalBadmovies=movie.reduce((acc,item)=> item.tag==='Bad' ? acc += 1 : acc,0)
console.log(totalBadmovies)*/

















