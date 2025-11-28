// Определяем сезон по месяцу
const month = new Date().getMonth(); // 0 = январь
let season;

if (month === 11 || month === 0 || month === 1) season = 'winter';
else if (month >= 2 && month <= 4) season = 'spring';
else if (month >= 5 && month <= 7) season = 'summer';
else season = 'autumn';

document.body.classList.add('season-' + season);
