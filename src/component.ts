import { addStyle, throttle } from 'simon-js-tool'

const style = `
.cbutton{
  position: absolute;
  transform: translate(-50%,-50%);
  background-color: rgb(255, 254, 254);
  border-radius: 50%;
  animation: big 1s;
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

addStyle(style)

function createTarget(e: MouseEvent, timeout = 1000) {
  const element = document.createElement('div')
  element.style.left = `${e.clientX}px`
  element.style.top = `${e.clientY}px`
  element.style.transition = `all ${timeout}ms ease-in-out`
  element.setAttribute('class', 'cbutton')
  document.body.appendChild(element)
  setTimeout(() => document.body.removeChild(element), timeout)
}
export const createElement = throttle(createTarget, 200)

