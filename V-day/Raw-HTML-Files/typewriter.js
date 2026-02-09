document.addEventListener('DOMContentLoaded', function(){
  const elements = Array.from(document.querySelectorAll('.typewriter'));
  elements.forEach(el => {
    const full = el.textContent;
    el.dataset.fulltext = full;
    el.textContent = '';
  });

  elements.forEach((el, idx) => {
    const full = el.dataset.fulltext || '';
    const speed = parseInt(el.dataset.speed) || 40;
    const startDelay = parseInt(el.dataset.delay) || (idx * 500 + 200);
    setTimeout(() => {
      let i = 0;
      const t = setInterval(() => {
        el.textContent += full.charAt(i);
        i++;
        if (i >= full.length) clearInterval(t);
      }, speed);
    }, startDelay);
  });
});
