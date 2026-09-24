'use strict';

const $ = (selector) => document.querySelector(selector);
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

// Edit these three pages to personalise Jordyn’s birthday letter.
const pages = [
  {
    title: 'Dear Jordyn,',
    message: 'Some people make the world feel a little softer, a little brighter, and a lot more like home. You’re one of those people.'
  },
  {
    title: 'Here’s to your 24th chapter.',
    message: 'To the belly laughs, the tiny adventures, the “you had to be there” moments. And to all the good things we haven’t even met yet.'
  },
  {
    title: 'You’ve got this. And you’ve got me.',
    message: 'You don’t have to have it all figured out at 24. Just keep being wonderfully you. I’m so happy I get to be in your corner. Happy birthday, Jordyn. ♡'
  }
];

const letter = $('#letter');
const nextButton = $('#letter-next');
let currentPage = 0;

function showPage() {
  $('#letter-title').textContent = pages[currentPage].title;
  $('#letter-copy').textContent = pages[currentPage].message;
  $('#letter-count').textContent = `A NOTE FOR YOU · ${currentPage + 1} OF ${pages.length}`;
  nextButton.textContent = currentPage === pages.length - 1
    ? 'Here’s to you, birthday girl ✨'
    : 'There’s more →';
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
    $('.card-bottom > p').textContent = 'Happy 24th, Jordyn. So loved. Always.';
    $('#main-action').innerHTML = 'Read your letter again <span>♡</span>';
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
