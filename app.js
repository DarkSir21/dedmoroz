import './common.css'

import './dialog-polyfill.js'
import './owl.carousel.min.js'
import './material.min.js'

import sbjs from 'sourcebuster';

$(document).ready(function() {

  sbjs.init();

  var $carousel = $('.slider');

  $carousel.owlCarousel({
    items: 1,
    loop: true,
    dots: true
  });

  var dialog = document.querySelector('dialog');
  var showDialogButton = $('.show-dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }

  showDialogButton.on('click', function() {
    dialog.showModal();
  })

  // showDialogButton.addEventListener();
  dialog.querySelector('.close').addEventListener('click', function() {
    dialog.close();
  });

  window.onsubmit = (e) => {

    e.preventDefault();

    var formData = new FormData(e.target);
    formData.append('utm', JSON.stringify(sbjs.get.current));
    fetch('message.php', {
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.good) e.target.innerHTML = `<span class="success-message">${data.good}</span>`;
    });
  };
});