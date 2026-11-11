const URL_API = 'https://randomuser.me/api/';
const btn = document.getElementById('loadBtn');
const card = document.getElementById('card');
const statusEl = document.getElementById('status');

btn.addEventListener('click', loadUser);

function loadUser() {
  statusEl.textContent = 'Loading...';
  fetch(URL_API)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      showUser(data.results[0]);
      statusEl.textContent = '';
    })
    .catch(function (err) {
      statusEl.textContent = 'Error fetching data: ' + err.message;
    });
}

function showUser(user) {
  document.getElementById('picture').src = user.picture.large;
  document.getElementById('country').textContent = user.location.country;
  document.getElementById('email').textContent = user.email;
  document.getElementById('phone').textContent = user.phone;
  const c = user.location.coordinates;
  document.getElementById('coordinates').textContent =
    'lat: ' + c.latitude + ', lon: ' + c.longitude;
  card.hidden = false;
}