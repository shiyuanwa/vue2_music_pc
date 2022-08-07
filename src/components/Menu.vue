<template>
  <div>
    <div class="flex content-center px-5 py-3" :class="[isActive(v.value)]" v-for="(v,i) in data" :key="i" @click="onActive(v)" @keydown="onActive(v)">
      <div class="h-8 w-8 rounded shadow p-1 flex-shrink-0" :class="isActive(v.value).length?'bg-red-500 ':''">
        <div :class="[`bg-${v.src}`,isActive(v.value).length?'active':'']" class="w-full h-full bg-cover" />
      </div>
      <h1 class="leading-8 pl-2 text-sm">{{v.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => '',
    },
  },
  computed: {
    isActive() {
      return function name(active) {
        return this.value === active ? 'bg-white shadow rounded' : '';
      };
    },
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.value);
  },
  methods: {
    onActive(tab) {
      this.$emit('input', tab.value);
    },
  },
};
</script>

<style lang="less" scope>
.active {
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(36deg) brightness(116%) contrast(113%);
}
</style>
