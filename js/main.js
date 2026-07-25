document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.primary');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }
  var y = document.querySelector('[data-year]');
  if (y) { y.textContent = new Date().getFullYear(); }

  var form = document.querySelector('form.contact-form');
  if (form) {
    var btn = form.querySelector('button[type="submit"]');
    var status = form.querySelector('.form-status');
    var btnLabel = btn.textContent;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Envoi en cours…';

      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          status.textContent = 'Merci, votre message a bien été envoyé. Nous revenons vers vous rapidement.';
          status.style.color = 'var(--vert-700)';
          form.reset();
        } else {
          response.json().then(function (data) {
            var msg = (data && data.errors) ? data.errors.map(function (er) { return er.message; }).join(', ') : "une erreur est survenue.";
            status.textContent = "Le message n'a pas pu être envoyé (" + msg + "). Vous pouvez aussi écrire directement à alili.mostafa@gmail.com.";
            status.style.color = '#B4453F';
          });
        }
      }).catch(function () {
        status.textContent = "Le message n'a pas pu être envoyé. Vérifiez votre connexion ou écrivez directement à alili.mostafa@gmail.com.";
        status.style.color = '#B4453F';
      }).finally(function () {
        status.style.display = 'block';
        btn.disabled = false;
        btn.textContent = btnLabel;
      });
    });
  }
});
