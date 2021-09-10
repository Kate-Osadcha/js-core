// INTERECTION OBSERVER
// const refs = {
//   propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// }
import references from '../references/refs.js'
// console.log('IntersectionObserver:', references)
const { propagation, articleProp, articleList, myBtn } = references

// console.dir(IntersectionObserver)

const options = {
  root: articleList,
  //   rootMargin: '5px 5px 5px 5px',
  threshold: 0,
}
function callback(elems) {
  console.log(elems)
  if (elems[0].isVisible) {
    console.log(`ok`)
  }
}
const myObserver = new IntersectionObserver(callback, options)

// console.log('экземпляр наблюдателя', myObserver)

myObserver.observe(myBtn)
// ==================================================================================//

// DEBOUNCE

// _.debounce(callback, time)

// const refs = {
//   form: document.querySelector('.form'),
// }
import refs from '../references/refs.js'
// console.log('debounce:', refs)
const { form } = refs
// console.log(form)

const options = {
  leading: true, // первый вызов колбека сразу, как в throttle
  trailing: true,
}

form.addEventListener(
  'input',
  _.debounce(
    (e) => {
      console.log('1:', e.target.value)
    },
    350,
    // options,
  ),
)
// ========================================================================================//

// EVENT PROPAGATION (распространение событий) - Capture,Target

// const refs = {
//   propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// } // это старый объект доступов, теперь все доступы в отдельном файле

import refs from '../references/refs.js'
// console.log('PROPAGATION: ', refs)
import galleryItems from '../references/images.js'
// console.log(galleryItems)
const { propagation, articleProp, articleList } = refs

// BUBLING
window.addEventListener("click", (e) => {
  console.log("window:", e);
});
propagation.addEventListener("click", (e) => {
  console.log("propagation:", e);
});
articleProp.addEventListener("click", (e) => {
  console.log("articleProp:", e);
});
articleList.addEventListener("click", (e) => {
  console.log("articleList-1:", e);
});
//==================================================================================//
// // EVENT DELEGATION (ДЕЛЕГАЦИЯ СОБЫТИЙ)
// articleList.addEventListener('click', () => {
//   console.log(`я слушаю click у всех тегов li и их потомков`)
// })
articleList.addEventListener('click', (e) => {
  //   console.log(e)
  console.log('articleList-2:', e.target.attributes.name.value)
  //   e.stopPropagation() // все обработчики на этом же элементе будут вызваны, а выше уже нет
  e.stopImmediatePropagation()
  //   console.log(e.target.textContent)
  //   console.log(e.target.nodeName)
  //   console.log(e.target.getAttribute('name')) - need to fix
})
// articleList.addEventListener('click', (e) => {
//   console.log('articleList-1:', e)
// })
