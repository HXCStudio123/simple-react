import Sreact from '../packages/sreact';

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.querySelector('#app');
Sreact.render(element, container);
