import GlassCard from './GlassCard.js';

export default function SeasonPlantCard(plant) {
  return GlassCard({ className: 'plant-card float-in delay-4', children: `
    <div class="plant-copy">
      <p class="eyebrow">${plant.title}</p>
      <h2>${plant.name}</h2>
      <p>${plant.hint}</p>
      <div class="nutrient-bar" aria-label="当前养分 ${plant.nutrients}"><span style="width: 62.5%"></span></div>
      <small>当前养分 ${plant.nutrients}</small>
    </div>
    <div class="plant-illustration css-plant" role="img" aria-label="桃花花盆占位插画">
      <span class="stem"></span>
      <span class="leaf leaf-left"></span>
      <span class="leaf leaf-right"></span>
      <span class="flower flower-one"></span>
      <span class="flower flower-two"></span>
      <span class="flower flower-three"></span>
      <span class="pot"></span>
    </div>
  ` });
}
