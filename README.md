## mouse-element
提供一个简单的鼠标小动画

## 🔨 Install
```
## 安装依赖
npm install mouse-element

## 导入组件
import { createMouseAnimation } from 'createMouseAnimation'

```

## 🌈 Usage
```vue
<main w-full h-full @mousemove="e => createMouseAnimation(e, { backgroundColor: 'yellow', timeout: 1000 })">
</main>
```

## 🚀 Props
- backgroundColor: 背景颜色
- timeout: 动画时长
- width: 宽度
- height: 高度

## :tea: 
[请我喝一杯咖啡](https://github.com/Simon-He95/sponsor)


## :question: 问题
[issues](https://github.com/Simon-He95/mouse-element/issues)

## 依赖
- [lazy-js-utils](https://github.com/Simon-He95/lazy-js-utils)
