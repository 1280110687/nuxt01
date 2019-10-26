<template>
  <div class="userid">
    <h4>007 -- {{id}}号</h4>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  }
}
</script>
<style lang="less" scoped>
</style>
