const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    director: "Christopher Nolan",
    genres: ["sci-fi", "thriller", "action"],
    hasSequel: 0,
    runtime: 148,
    boxOffice: {
      worldwide: "$829.9M",
      domestic: "$292.6M",
      international: "$536.3M",
    },
    ratings: {
      imdb: {
        rating: 8.8,
        votes: 2200000,
      },
      rottenTomatoes: {
        rating: 87,
        reviewsCount: 350,
      },
    },
  },
  {
    id: 2,
    title: "The Matrix",
    releaseDate: "1999-03-31",
    director: "The Wachowskis",
    genres: ["sci-fi", "action", "adventure"],
    hasSequel: false,
    runtime: 136,
    boxOffice: {
      worldwide: "$463.5M",
      domestic: "$171.5M",
      international: "$292M",
    },
    ratings: {
      imdb: {
        rating: 8.7,
        votes: 1800000,
      },
      rottenTomatoes: {
        rating: 88,
        reviewsCount: 300,
      },
    },
  },
  {
    id: 3,
    title: "The Godfather",
    releaseDate: "1972-03-24",
    director: "Francis Ford Coppola",
    genres: ["crime", "drama"],
    hasSequel: true,
    runtime: 175,
    boxOffice: {
      worldwide: "$250M",
      domestic: "$136M",
      international: "$114M",
    },
    ratings: {
      imdb: {
        rating: 9.2,
        votes: 1600000,
      },
      // rottenTomatoes: {
      //   rating: 98,
      //   reviewsCount: 150,
      // },
    },
  },
  {
    id: 4,
    title: "Pulp Fiction",
    releaseDate: "1994-10-14",
    director: "Quentin Tarantino",
    genres: ["crime", "drama", "thriller"],
    hasSequel: false,
    runtime: 154,
    boxOffice: {
      worldwide: "$213.9M",
      domestic: "$107.9M",
      international: "$106M",
    },
    ratings: {
      imdb: {
        rating: 8.9,
        votes: 1900000,
      },
      rottenTomatoes: {
        rating: 92,
        reviewsCount: 250,
      },
    },
  },
  {
    id: 5,
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    director: "Christopher Nolan",
    genres: ["action", "crime", "drama"],
    hasSequel: true,
    runtime: 152,
    boxOffice: {
      worldwide: "$1.005B",
      domestic: "$535M",
      international: "$469.7M",
    },
    ratings: {
      imdb: {
        rating: 9.0,
        votes: 2500000,
      },
      rottenTomatoes: {
        rating: 94,
        reviewsCount: 330,
      },
    },
  },
];

// function

const a = 5;
const b = 6;
// 1. function declaration
function calcDecl() {
  return a + b;
}

console.log("Function Declaration: ", calcDecl());

// 2. function expression
const calcExp = function () {
  return a + b;
};

console.log("Function Expression: ", calcExp());

//3. function ananymous
console.log(
  (function () {
    return a + b;
  })(),
);

// 4. arrow function
const arrowFucntion = () => a + b;

function getFilm(id) {
  return movies.find((item) => item.id === id);
}

const film = getFilm(2);

// Destructurig Objects and array

// console.log(film);
// const title = film.title;

const { title, releaseDate, director } = film;

console.log(title);
console.log(releaseDate);
console.log(director);

// REST
const [firstGenre, ...other] = film.genres;

console.log(other);

// SPREAD
movies[1].genres = [...film.genres, "humor"];
console.log(film.genres);

const str = "hello";

const testSpread = [...str];

console.log(testSpread);

const updatedFilm = { ...film, newKey: "hello" };
console.log(updatedFilm);

// template literal
console.log(
  `${film.title}, is released in ${film.releaseDate.split("-")[0]} has a rating of ${film.ratings.imdb.rating}`,
);

// if else condition
const age = 18;
let canVote;

if (age > 18) {
  canVote = "You can vote!";
} else {
  canVote = "You are too young to vote!";
}

console.log(canVote);

// Ternary operator
const canVote2 = age >= 18 ? "You can vote" : "You are too young to vote!";

console.log(canVote2);

const score = 55;

const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";

console.log(grade);

////////////////////
// Logical operator

//&&
const result = film.ratings.imdb.rating > 8 && console.log("Good film");

// || (OR)

const result1 = film.ratings.imdb.rating > 9 || console.log("Good film!");

// ??
const userAge = null;
const defaultAge = 18;

const age1 = userAge ?? defaultAge;
console.log(age1);

// optional chaining
const getRaitingVotes = () => {
  const idmbRating = film.ratings.imdb.votes;
  const rottenTomatoesRating = film.ratings.rottenTomatoes?.reviewsCount;

  console.log("Test:", rottenTomatoesRating);

  return idmbRating + rottenTomatoesRating;
};

console.log(getRaitingVotes());

const title1 = movies.map((i) => {
  return i.title;
});

console.log(title1);

const title2 = movies.map((i) => {
  return { name: i.title, director: i.director };
});

console.log(title2);

// filter method
const grreatFilms = movies.filter((film) => film.rating >= 9);

console.log(grreatFilms);

const longMovies = movies.filter((film) => film.runtime >= 150);

console.log(longMovies);


