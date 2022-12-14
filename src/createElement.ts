import { addStyle, throttle } from 'lazy-js-utils'

const style = `
.cbutton{
  position: absolute;
  transform: translate(-50%,-50%);
  background-color: #bbb;
  border-radius: 50%;
  animation: big 1s;
  pointer-events: none;
}
@keyframes big{
  0%{
    width: 0px;
    height: 0px;
  opacity: 1;
  }
  100%{
  opacity: 0;
  width: 100px;
  height: 100px;
  }
}

`
try {
  addStyle(style)
}
catch (error) {

}

function createTarget(e: MouseEvent, timeout = 1000) {
  try {
    const element = document.createElement('div')
    element.style.left = `${e.clientX}px`
    element.style.top = `${e.clientY}px`
    element.style.transition = `all ${timeout}ms ease-in-out`
    element.setAttribute('class', 'cbutton')
    document.body.appendChild(element)
    setTimeout(() => document.body.removeChild(element), timeout)
  }
  catch (error) {
  }
}
export const createElement = throttle(createTarget, 200)

