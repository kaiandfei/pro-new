<template>
  <div>{{data[prop]}}</div>
</template>

<script>
export default {
  name: 'ComText',
  props: {
    prop:{
        type:String,
        default:""
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped></style>
