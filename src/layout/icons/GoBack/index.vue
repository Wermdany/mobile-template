<template>
  <div class="go-back">
    <van-icon name="arrow-left" />
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  name: "GoBack",
  components: {
    vanIcon: Icon
  }
};
</script>
<style lang="less" scoped>
.go-back {
  display: flex;
}
</style>
