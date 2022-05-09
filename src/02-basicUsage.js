import { init, h } from 'snabbdom';

const patch = init([]);
const oldVnode = h('div#container', [
    h('h1', 'hello snabbdom'),
    h('p', '这是一个p')
]);
const app = document.querySelector('#app');
patch(app, oldVnode);

setTimeout(() => {
    // const vnode = h('div#container', [
    //     h('h1', 'hello world'),
    //     h('p', 'hello p')
    // ]);
    // patch(oldVnode, vnode);
    // "!"表示注释节点
    patch(oldVnode, h('!'));
}, 2000);