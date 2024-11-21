/* eslint-disable no-console */ 'use strict';
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
// const tree = document.querySelector('#tree');
// function createTree(element, data) {
//   if (!Object.keys(data).length) {
//     return;
//   }
//   const ul = document.createElement('ul');
//   for (const key in data) {
//     if (data.hasOwnProperty(key)) {
//       const li = document.createElement('li');
//       li.textContent = data;
//       createTree(li, data[key]);
//       ul.appendChild(li);
//     }
//   }
//   element.appendChild(ul);
// }
// createTree(tree, food);
document.addEventListener('DOMContentLoaded', ()=>{
    const tree = document.querySelector('#tree');
    if (tree) {
        createTree(tree, food);
        // eslint-disable-next-line no-sequences
        console.log("\u0414\u0435\u0440\u0435\u0432\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E:", tree.innerHTML);
    } else console.log("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 #tree \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 DOM.");
});
function createTree(element, data) {
    if (!Object.keys(data).length) return;
    const ul = document.createElement('ul');
    for(const key in data)if (data.hasOwnProperty(key)) {
        const li = document.createElement('li');
        li.textContent = key;
        createTree(li, data[key]);
        ul.appendChild(li);
    }
    element.appendChild(ul);
}

//# sourceMappingURL=index.f75de5e1.js.map
