import { init, h, styleModule, eventListenersModule } from "snabbdom";

const patch = init([ styleModule, eventListenersModule ]);

const vnode = h('div', [
    h('h1', { style: { border: '1px solid red' } }, 'hello snabbdom'),
    h('p', { on: {
        click() {
            console.log('====-10');
        }
    } }, 'p')
]);
const app = document.querySelector('#app');
patch(app, vnode);