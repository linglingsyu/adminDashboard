import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VueTippy from 'vue-tippy';
import 'tippy.js/dist/tippy.css'; // optional for styling
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy', // => v-tippy
    component: 'tippy', // => <tippy/>
    componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
    defaultProps: {
      placement: 'auto-start',
      allowHTML: true,
    }, // => Global default options * see all props
  }
);
app.mount('#app');
