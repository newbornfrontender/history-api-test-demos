document.addEventListener('DOMContentLoaded', () =>
  console.log('DOM was loaded!'),
);

const show = (output) => {
  const p = document.createElement('p');
  p.textContent = output;

  document.querySelector('output').appendChild(p);

  setTimeout(() => document.querySelector('output').removeChild(p), 4000);
};
