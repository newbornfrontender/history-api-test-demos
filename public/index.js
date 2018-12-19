function show(output) {
  const p = document.createElement('p');
  p.textContent = output;

  document.querySelector('#output').appendChild(p);

  setTimeout(() => document.querySelector('#output').removeChild(p), 4000);
}

function loadPerson() {
  show('loadPerson');

  const hs = JSON.stringify(history.state);
  const data = JSON.parse(hs);
  console.log(data.pid);
  show(data.pid);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#link').addEventListener('click', (event) => {
    show('clicked');

    event.preventDefault();

    const href = event.currentTarget.href;
    const personId = event.currentTarget.getAttribute('data-person');
    show(href);

    // history.pushState({ pid: personId }, 'title', href);
    history.replaceState({ pid: personId }, 'title', href);

    loadPerson();
  });

  window.addEventListener('hashchange', () => show('hashchange'));
  window.addEventListener('popstate', () => show('popstate'));
});
