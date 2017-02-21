// create a module that exports a function and accepts two arguments: element and data object
export default function fillInResult(el, data) {
  el.querySelector('.movie-info__name').innerText = data.show_title;
  el.querySelector('.movie-info__genre').innerText = data.category;
  el.querySelector('.rating__number').innerText = data.rating;
  el.querySelector('.movie-info__image').src = data.poster;
  el.querySelector('.summary-text').innerText = data.summary;
  el.querySelector('.actors-text').innerText = data.show_cast;
}
