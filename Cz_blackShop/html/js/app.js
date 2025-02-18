const container = document.querySelector('.first-dialogue')
const first = document.querySelector('.all-second')

window.addEventListener('load', (event) =>{
  const container = document.querySelector('.first-dialogue')
  const first = document.querySelector('.all-second')
  container.style.display = 'none';

  window.addEventListener('message', (event) => {
      let data = event.data
      if (data.action === 'open'){
          container.style.display ='flex';
      }else if (data.action === 'close') {
          container.style.display ='none';
      }
  })

  window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
          fetch('https://Cz_blackShop/closeall')
          container.style.display = 'none';
          first.style.display = 'none';
      }
  })

  document.querySelector('#next').addEventListener('click', (event) =>{
      container.style.display = 'none';
      first.style.display = 'flex';
  })

  document.querySelector('#quit').addEventListener('click', (event) =>{
      fetch('https://Cz_blackShop/closeall')
      container.style.display = 'none';
      first.style.display = 'none';
  })

  document.querySelector('#buy').addEventListener('click', (event) =>{
      fetch('https://Cz_blackShop/buy')
      container.style.display = 'none';
      first.style.display = 'none';
  })
})

window.addEventListener("DOMContentLoaded", (event) => {
  observeDisplayChange();
});

function observeDisplayChange() {
  const target = document.querySelector('.first-dialogue');

  if (!target) return; 

  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.attributeName === "style") {
              const displayValue = window.getComputedStyle(target).display;
              if (displayValue === "flex") {
                  animate_text();
              }
          }
      });
  });

  observer.observe(target, { attributes: true, attributeFilter: ["style"] });
}

function animate_text() 
{
  let delay = 30,
      delay_start = 0,
      contents,
      letters;

  document.querySelectorAll(".animate-text").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {

        elem.textContent += letter;

      }, delay_start + delay * index_1);
    });
    delay_start += delay * letters.length;
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  observeDisplayChange2();
});

function observeDisplayChange2() {
  const target = document.querySelector('.all-second');

  if (!target) return; 

  const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
          if (mutation.attributeName === "style") {
              const displayValue = window.getComputedStyle(target).display;
              if (displayValue === "flex") {
                  animate_text2();
              }
          }
      });
  });

  observer.observe(target, { attributes: true, attributeFilter: ["style"] });
}


function animate_text2() 
{
  let delay = 30,
      delay_start = 0,
      contents,
      letters;

  document.querySelectorAll(".animate-text2").forEach(function (elem) {
    contents = elem.textContent.trim();
    elem.textContent = "";
    letters = contents.split("");
    elem.style.visibility = 'visible';

    letters.forEach(function (letter, index_1) {
      setTimeout(function () {

        elem.textContent += letter;

      }, delay_start + delay * index_1);
    });
    delay_start += delay * letters.length;
  });
}



