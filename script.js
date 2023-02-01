const numberOfFilms = +prompt("Сколько фильмо вы уже посмотрели?", "");

const personaleMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", ""),
      c = prompt("Один из последних просмотренных фильмов?", ""),
      d = prompt("На сколько оцените его?", "");

personaleMovieDB.movies[a] = b;
personaleMovieDB.movies[c] = d;

console.log(personaleMovieDB);
