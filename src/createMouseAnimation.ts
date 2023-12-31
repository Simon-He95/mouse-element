import { addStyle, removeElement, throttle, useRaf } from 'lazy-js-utils'
import type { Options } from './types'

const generateStyle = (backgroundColor: string, width: string, height: string) => `
.mouse-animation{
  position: absolute;
  transform: translate(-50%,-50%);
  background-color: ${backgroundColor};
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
    width: ${width};
    height: ${height};
  }
}
`

function createTarget(e: MouseEvent, options?: Options) {
  try {
    const { timeout = 1000, backgroundColor = '#bbb', width = '100px', height = '100px', mode = 'page' } = options || {}
    addStyle(generateStyle(backgroundColor, width, height))
    const element = document.createElement('div')

    const { clientX, clientY, offsetX, offsetY, pageX, pageY, screenX, screenY } = e
    const pByMode = {
      page: [pageX, pageY],
      client: [clientX, clientY],
      offset: [offsetX, offsetY],
      screen: [screenX, screenY],
    }
    const [x, y] = pByMode[mode]

    element.style.left = `${x}px`
    element.style.top = `${y}px`
    element.style.transition = `all ${timeout}ms ease-in-out`
    element.setAttribute('class', 'mouse-animation')
    document.body.appendChild(element)
    useRaf(() => removeElement(element), timeout, true)
  }
  catch (error) {
  }
}

export const createMouseAnimation = throttle(createTarget, 200)

