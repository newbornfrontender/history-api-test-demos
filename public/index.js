function show(output) {
  let p = document.createElement('p');
  p.textContent = output;

  document.querySelector('#output').appendChild(p);

  setTimeout(() => document.querySelector('#output').removeChild(p), 4000);
};

function hashChange(event) {
  show('hashchange')
}

function popState(event) {
  show('popstate')
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', hashChange);
  window.addEventListener('popstate', popState);
});
