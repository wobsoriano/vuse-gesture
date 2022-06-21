<script setup lang="ts">
import { useSpring } from 'vue-use-spring'
import { normalizeProps, useDrag } from '@wobsoriano/use-gesture'

const position = useSpring({ x: 0, y: 0 })

const bind = useDrag(({ down, movement: [mx, my] }) => {
  position.x = down ? mx : 0
  position.y = down ? my : 0
})
</script>

<template>
  <div
    id="box"
    v-bind="normalizeProps(bind?.())"
    :style="{ touchAction: 'none', transform: `translate(${position.x}px, ${position.y}px)` }"
  />
</template>

<style>
#box {
  background: skyblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
