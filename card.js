'use strict';

const $ = (selector) => document.querySelector(selector);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

// Edit these three pages to personalise Jordyn’s birthday letter.
const pages = [
  {
    title: 'My dear Jordyn,',
    message: 'Happy birthday my angel, thank you for coming into my life and showing me how beautiful friendship can be. '
  },
  {
    title: 'You are so amazing.',
    message: 'I hope today is everything and more. I hope you know that you are the absolute bomb and you will always have a special place in my heart.'
  },
  {
    title: '24 is old- jokes',
    message: 'I love you lots! Keep being so amazing. Happy birthday, my labooboo. ♡'
  }
];

const letter = $('#letter');
const nextButton = $('#letter-next');
let currentPage = 0;

function showPage() {
  $('#letter-title').textContent = pages[currentPage].title;
  $('#letter-copy').textContent = pages[currentPage].message;
  $('#letter-count').textContent = `A love letter to my love`;
  nextButton.textContent = currentPage === pages.length - 1
    ? 'LOVE YOU!!!!'
    : 'Next';
  document.querySelectorAll('.page-dots i').forEach((dot, index) => {
    dot.classList.toggle('active', index === currentPage);
  });
  letter.scrollTop = 0;
}

function celebrate() {
  if (motionPreference.matches) return;
  const holder = $('.particles');
  const symbols = ['✦', '♡', '✿'];
  const colours = ['#f5d577', '#f39ea9', '#83ae87', '#fff3bf'];
  if (holder.childElementCount > 100) return;
  for (let i = 0; i < 48; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.textContent = symbols[i % symbols.length];
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      color: ${colours[i % colours.length]};
      --drift: ${Math.random() * 220 - 110}px;
      --spin: ${Math.random() * 700 - 350}deg;
      --duration: ${2 + Math.random() * 2}s;
      animation-delay: ${Math.random() * 0.7}s;
      font-size: ${12 + Math.random() * 17}px;
    `;
    holder.append(particle);
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
    setTimeout(() => particle.remove(), 5000);
  }
}

for (let i = 0; i < 21; i++) {
  const firefly = document.createElement('i');
  firefly.className = 'speck';
  firefly.style.cssText = `
    left: ${5 + Math.random() * 90}%;
    top: ${36 + Math.random() * 47}%;
    --speed: ${3 + Math.random() * 5}s;
    --delay: -${Math.random() * 7}s;
  `;
  $('.specks').append(firefly);
}

$('#main-action').addEventListener('click', () => {
  currentPage = 0;
  showPage();
  letter.showModal();
});

nextButton.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage();
  } else {
    letter.close();
    celebrate();
    $('.card-bottom > p').textContent = 'Happy 24th, Old lady.';
    $('#main-action').innerHTML = 'Read again <span>♡</span>';
  }
});

$('.close-dialog').addEventListener('click', () => letter.close());
letter.addEventListener('click', (event) => {
  if (event.target !== letter) return;
  const bounds = letter.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    letter.close();
  }
});
