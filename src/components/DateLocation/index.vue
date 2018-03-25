<template>
  <div class="date-location box">
    <h2>
      {{ curDate }}
    </h2>
    &nbsp;
    <h2>
      in <i>Asia/Tokyo</i>
    </h2>
  </div>
</template>
<script>
import moment from 'moment'

const api = 'https://api.darksky.net/forecast/af1dd67f02165446b1427f3ca8323d12/'

export default {
  name: 'DateLoaction',
  props: {
    curDate: {
      type: String,
      default: null,
      required: true
    }
  },
  data () {
    return {
      coordinates: {
        lat: 35.68,
        lng: 139.76
      }
    }
  },
  async created () {
    this.$getLocation().then(coordinates => {
      this.coordinates = coordinates
    })
    this.$http.get(this.dataUrl())
      .then(res => {
        console.log(res)
      })
  },
  methods: {
    formatDate (dt) {
      return moment(dt, 'YYYY/MM/DD').format('MMM Do YYYY')
    },
    formatDateToUnix (dt) {
      return moment(dt, 'YYYY/MM/DD').unix()
    },
    dataUrl (dt) {
      return `${api}${this.coordinates.lat},${this.coordinates.lng},${this.formatDateToUnix(dt)}?exclude=currently,flags,alerts`
    }
  }
}
</script>
<style>
.date-location {
  justify-content: space-between;
}
</style>
