<template>
  <div class="date-location box">
    <h2>
      {{ curDate }}
    </h2>
    &nbsp;
    <h2>
      in <i>{{ timezone }}</i>
    </h2>
  </div>
</template>
<script>
export default {
  name: 'DateLoaction',
  props: {
    curDate: {
      type: String,
      default: null,
      required: true
    },
    timezone: {
      type: String,
      default: null
    }
  }
}
</script>
<style>
.date-location {
  justify-content: space-between;
}
</style>
