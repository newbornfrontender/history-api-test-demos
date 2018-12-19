const show = (output) =>
  (document.querySelector('#output').innerHTML = `<p>${output}</p>`);

show(`location.href: ${location.href}`);
