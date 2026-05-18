import GlassCard from './GlassCard.js';

export default function MainTodayCard(today, brand) {
  return GlassCard({ className: 'main-today-card float-in delay-1', children: `
    <div class="main-card-art" aria-hidden="true">
      <span class="petal petal-one"></span>
      <span class="petal petal-two"></span>
      <span class="petal petal-three"></span>
      <span class="season-ring"></span>
    </div>
    <div class="brand-row">
      <div class="logo-mark">养</div>
      <div>
        <p>${brand.parent}</p>
        <h1>${brand.name}</h1>
      </div>
    </div>
    <div class="today-content">
      <p class="eyebrow">${brand.subtitle}</p>
      <div class="time-row">
        <strong>${today.time}</strong>
        <span>${today.solarTerm}</span>
      </div>
      <p class="date-line">${today.date}</p>
      <p class="lunar-line">${today.lunarDate} · ${today.weather}</p>
    </div>
    <blockquote>${today.wellnessLine}</blockquote>
  ` });
}
