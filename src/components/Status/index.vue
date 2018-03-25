<template>
  <div class="status box">
    <DateLocation />
    <Weather />
  </div>
</template>
<script>
import DateLocation from '../DateLocation'
import Weather from '../Weather'

export default {
  name: 'Status',
  components: {
    DateLocation,
    Weather
  }
}
</script>
<style>
.status {
  flex-direction: column;
  align-items: center;
}
</style>
