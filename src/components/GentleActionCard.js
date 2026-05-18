import GlassCard from './GlassCard.js';

export default function GentleActionCard(actions) {
  return GlassCard({ className: 'action-card float-in delay-5', children: `
    <div class="action-title">
      <p class="eyebrow">今日轻行动</p>
      <h2>慢一点，身体会听见</h2>
    </div>
    <div class="action-strip" aria-label="今日轻行动建议">
      ${actions.map((action) => `
        <article class="mini-action">
          <span class="action-glyph action-glyph-${action.illustration}" aria-hidden="true"></span>
          <span>${action.label}</span>
          <strong>${action.value}</strong>
        </article>
      `).join('')}
    </div>
  ` });
}
