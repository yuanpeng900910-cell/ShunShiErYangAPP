import AmbientBackground from './AmbientBackground.js';
import BodyStatusCard from './BodyStatusCard.js';
import FloatingNav from './FloatingNav.js';
import GentleActionCard from './GentleActionCard.js';
import MainTodayCard from './MainTodayCard.js';
import MusicRadioCard from './MusicRadioCard.js';
import SeasonPlantCard from './SeasonPlantCard.js';

export default function VisualHomePage(homeData) {
  return `
    <main class="visual-home" aria-label="顺时而养东方疗愈智能屏首页">
      ${AmbientBackground()}
      ${FloatingNav(homeData.nav)}
      <section class="home-shell">
        <header class="topline float-in">
          <div>
            <p>${homeData.brand.parent}</p>
            <span>${homeData.brand.subtitle}</span>
          </div>
          <button type="button">节气随行</button>
        </header>
        <div class="spatial-board">
          ${MainTodayCard(homeData.today, homeData.brand)}
          <div class="side-column">
            ${MusicRadioCard(homeData.music)}
            ${BodyStatusCard(homeData.body)}
          </div>
          <div class="right-rail">
            ${SeasonPlantCard(homeData.plant)}
            ${GentleActionCard(homeData.actions)}
          </div>
        </div>
      </section>
    </main>
  `;
}
