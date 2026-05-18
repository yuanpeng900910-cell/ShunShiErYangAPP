import GlassCard from './GlassCard.js';

export default function BodyStatusCard(body) {
  return GlassCard({ className: 'body-card float-in delay-3', children: `
    <div class="body-header">
      <div>
        <p class="eyebrow">今日身体状态</p>
        <h2>${body.status}</h2>
      </div>
      <div class="score-orb"><strong>${body.score}</strong><span>分</span></div>
    </div>
    <div class="organ-bars" aria-label="脏腑平衡指数">
      ${body.organs.map((organ) => `
        <div class="organ">
          <span>${organ.name}</span>
          <div class="energy-track"><i style="height: ${organ.value}%"></i></div>
          <small>${organ.value}</small>
        </div>
      `).join('')}
    </div>
  ` });
}
