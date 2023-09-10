<template>
  <canvas ref="cvsRef" class="game-container"></canvas>
</template>
<script setup lang="ts">
import { useGameScene } from "@/hooks/scene"

const { cvsRef } = useGameScene()
</script>
<style>
.game-container {
  width: 100%;
  height: 100%;
}
</style>
