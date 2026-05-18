import App from './App.js';

async function bootstrap() {
  const response = await fetch('/src/data/visualHome.json');
  const homeData = await response.json();
  document.getElementById('root').innerHTML = App(homeData);
}

bootstrap();
