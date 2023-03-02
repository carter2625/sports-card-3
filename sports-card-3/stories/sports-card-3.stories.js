import { html } from 'lit';
import '../src/sports-card-3.js';

export default {
  title: 'SportsCard3',
  component: 'sports-card-3',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <sports-card-3
      style="--sports-card-3-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </sports-card-3>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
