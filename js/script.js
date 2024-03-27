const cards = document.getElementById("row");

const sorted = movies.sort(function (a, b) {
  return b.year - a.year;
});
const cut_movies = sorted.slice(0, 16);

cut_movies.forEach((elem) => {
  const div = document.createElement("div");
  // let text = elem.extract
  div.className = "container col-12 col-sm-6 col-lg-3 pb-3 pt-3";
  div.innerHTML = `<div class="img_cont"><img src="${elem.thumbnail}" /></div><h4>${elem.title}</h4><p class="text mt-3">${elem.extract}</p>`;
  cards.appendChild(div);
});

const sorted_genres = movies.filter(function (movie) {
  return movie.genres.includes("Action"); // 2
});

let name_sorted_genres = [];
sorted_genres.forEach((elem) => {
  name_sorted_genres.push(elem.title);
});

console.log("Фільми які відносяться до жанру 'Action': \n" + name_sorted_genres);

let all_genres = []; // 3
movies.reduce(function (acc, mov) {
  mov.genres.forEach((elem) => {
    if (!all_genres.includes(elem)) {
      all_genres.push(elem);
    }
  });
}, []);
console.log("Масив зі всіма можливими жанрами з фільмів: \n" + all_genres);
