<template>
<div class="parent-sample">
  <h2>Parent</h2>
  <input type="text">
  <!-- 単一コンポーネントを取り込み -->
  <router-view name="child" />
  <router-view name="child2" />
  <router-view name="child3" />
</div>
</template>
<script>
</script>
