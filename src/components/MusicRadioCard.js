import GlassCard from './GlassCard.js';

export default function MusicRadioCard(music) {
  return GlassCard({ className: 'music-card float-in delay-2', children: `
    <div>
      <p class="eyebrow">今日推荐 · ${music.mood}</p>
      <h2>${music.title}</h2>
    </div>
    <div class="sound-stage" aria-hidden="true">
      <span class="wave wave-one"></span>
      <span class="wave wave-two"></span>
      <span class="wave wave-three"></span>
      <button class="play-button" type="button" aria-label="播放五音疗愈电台">▶</button>
    </div>
    <div class="music-meta">
      <span>${music.recommendation}</span>
      <strong>${music.purpose}</strong>
      <em>${music.duration}</em>
    </div>
  ` });
}
