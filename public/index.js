function show(output) {
  let p = document.createElement('p');
  p.textContent = output;

  document.querySelector('#output').appendChild(p);

  setTimeout(() => document.querySelector('#output').removeChild(p), 4000);
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#link').addEventListener('click', () => show('clicked'))

  window.addEventListener('hashchange', () => show('hashchange'));
  window.addEventListener('popstate', () => show('popstate'));
});
