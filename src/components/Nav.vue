<template>
  <div class="flex flex-row">
    <el-input placeholder="请输入歌名、歌词、歌手和专辑" v-model="input" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" class="bj-white" />
    </el-input>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui';
export default {
  name: 'Nav',
  components: {
    [Input.name]: Input,
    [Button.name]: Button
  },
  data () {
    return {
      input: '',
    };
  },
};
</script>
