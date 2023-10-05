import { createApp } from 'vue'
import App from './App.vue'
import test from './components/test.vue'
import log from './components/log.vue'

let app=createApp(App);
app.component("test",test);
app.component("log",log);
app.mount('#app')
