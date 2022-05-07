import { init, h } from 'snabbdom';

const patch = init([]);
const container = document.querySelector('#app');
let vnode = h('div#container.cls', 'hello world');
// patch会返回一个VNode
let oldVnode = patch(container, vnode);

vnode = h('div#container.xxx', 'hello snabbdom');
setTimeout(() => {
    patch(oldVnode, vnode);
}, 2000);


