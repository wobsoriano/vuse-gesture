# vuse-gesture

[![npm (tag)](https://img.shields.io/npm/v/vuse-gesture?style=flat&colorA=000000&colorB=000000)](https://www.npmjs.com/package/vuse-gesture) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/vuse-gesture?style=flat&colorA=000000&colorB=000000) ![NPM](https://img.shields.io/npm/l/vuse-gesture?style=flat&colorA=000000&colorB=000000)


vuse-gesture is a Vue 3 library that lets you bind richer mouse and touch events to any component or view. With the data you receive, it becomes trivial to set up gestures, and often takes no more than a few lines of code.

You can use it stand-alone, but to make the most of it you should combine it with an animation library like [vue-use-spring](https://github.com/posva/vue-use-spring), though you can most certainly use any other.

## Installation

```bash
pnpm add vuse-gesture # or npm or yarn
```

## Usage

```html
<script setup>
import { useSpring } from 'vue-use-spring'
import { normalizeProps, useDrag } from 'vuse-gesture'

const position = useSpring({ x: 0, y: 0 })

const bind = useDrag(({ down, movement: [mx, my] }) => {
  position.x = down ? mx : 0
  position.y = down ? my : 0
})
</script>

<template>
  <div
    id="box"
    v-bind="normalizeProps(bind())"
    :style="{
      touchAction: 'none',
      transform: `translate(${position.x}px, ${position.y}px)`,
    }"
  />
</template>
```

## License

[MIT](./LICENSE) License © 2022 [Robert Soriano](https://github.com/wobsoriano)
