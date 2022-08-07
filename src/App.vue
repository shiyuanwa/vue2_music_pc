<template>
  <div id="app" class="h-screen">
    <header>
      <div class="flex items-center px-2 py-4">
        <div class="w-1/6 h-auto">
          <img src="@assets/img/logo.jpg" alt="logo" class="my-0 mx-auto">
        </div>
        <div class="w-5/6 h-auto text-right">3</div>
      </div>
      <div class="flex px-6 py-2">
        <div class="w-1/6">2</div>
        <div class="w-5/6">
          <router-view />
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
</style>
