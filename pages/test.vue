<script setup>
const position = ref('left');

function swipeCoverPosition() {
  const newPosition = {
    left: 'right',
    right: 'left',
  }[position.value];

  position.value = newPosition;

  console.log(position.value);
}
</script>
<template>
  <div>
    <h1>Teste de swipper</h1>
    <div>
      <button @click="swipeCoverPosition">Direita</button>
      <button @click="swipeCoverPosition">Esquerda</button>
    </div>
    <div class="relative flex w-[400px] h-[400px] bg-green-400">
      <div class="bg-red-400 flex-1 w-full h-full">
        <span>Left</span>
      </div>
      <div class="bg-blue-400 flex-1">
        <span>right</span>
      </div>
      <div
        :class="[
          'bg-black w-1/2 h-full z-10 absolute transition-all duration-500',
          position.value === 'left' ? 'left-0' : 'right-0',
        ]"
      ></div>
    </div>
  </div>
</template>
