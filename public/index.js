const show = (output) =>
  (document.querySelector('#output').innerHTML += `<p>${output}</p>`);

// show(`location.href: ${location.href}`);
// show(`location.search: ${location.search || 'nothing'}`);
// show(`location.hash: ${location.hash || 'nothing'}`);

// history.go(-3);
// history.back();
// history.forward()

// location.reload()
// location.replace('https://www.google.com')

show(`history.state: ${history.state}`)
