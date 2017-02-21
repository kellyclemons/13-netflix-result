import 'whatwg-fetch';
import fillInResult from './fill-in-result';

const form = document.querySelector('.search-bar__title');
const button = document.querySelector('.search-bar__button');
const result = document.querySelector('.container');

// NOTES ON ABOVE ACTIONS
// document.querySelector returns the first item in the document that matches the specified group of selectors;
// tries to find the tage name '.search-bar__prompt' (use the dot to find the class name .search-bar__prompt)

fetch('http://netflixroulette.net/api/api.php?title=Attack%20on%20titan')
  .then(res => res.json()
  ).then((data) => {
    fillInResult(result, data);
  });

button.addEventListener('click', () => {
  fetch(`http://netflixroulette.net/api/api.php?title=${form.value}`)
    .then(res => res.json()
    ).then((data) => {
      fillInResult(result, data);
    });


  // window.alert('You have typed in {$searchInput.value}');
});
