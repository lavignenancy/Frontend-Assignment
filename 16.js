
const movies = [
  { title: "The Lion King",  year: 1994, rating: 8.5, watched: true  },
  { title: "Inception",      year: 2010, rating: 8.8, watched: true  },
  { title: "Black Panther",  year: 2018, rating: 7.3, watched: false },
  { title: "Up",             year: 2009, rating: 8.2, watched: true  },
  { title: "Interstellar",   year: 2014, rating: 8.6, watched: false },
];

console.log(`Movies list:`);

for(let i=0; i< movies.length; i++){
    const movieTitle = movies[i].title;
    console.log(`Title of the movie is ${movieTitle}`);
}

console.log(`----------------------`);
console.log(`Movies released after 2010:`);

for(let i=0; i< movies.length; i++){
    const movieTitle = movies[i].title;
     const movieYear = movies[i].year;
     if(movieYear >=2010){
    console.log(`Title of the movie is ${movieTitle}`);
}
}

console.log(`----------------------`);
console.log(`Counting movies that have been watched`);

let count = 0;
for(let i=0; i< movies.length; i++){
    
    if(movies[i].watched=== true){
        count = count +1;
}
}
console.log(count);

console.log(`----------------------`);
console.log(`Highest rated movie`);

let highestRating = movies[0];
for(let i=0; i< movies.length; i++){
    if(movies[i].rating>highestRating.rating){
        highestRating = movies[i];
}
}
console.log(`The highest rated movie is: ${highestRating.title}`);


console.log(`----------------------`);
console.log(`Concantenation:`);

for(let i=0; i< movies.length; i++){
const string = movies[i].title + "," + movies[i].year;
console.log(string)

}









