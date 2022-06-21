<script setup lang="ts">
import { useSpring } from 'vue-use-spring'
import { normalizeProps, useDrag } from '@wobsoriano/vue-gesture'
import { onMounted } from 'vue'

const position = useSpring({ x: 0, y: 0 })

const bind = useDrag(({ down, movement: [mx, my] }) => {
  console.log(mx, my, down)
  position.x = down ? mx : 0
  position.y = down ? my : 0
})
</script>

<template>
  <div id="test" v-bind="normalizeProps(bind())" :style="{ touchAction: 'none', transform: `translate(${position.x}px, ${position.y}px)` }">
    Hello Worlds
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#test {
  background: red;
  height: 100px;
  width: 200px;
}
</style>
