<template>
  <div class="main">
    <h2>
      Pick a good day for laundry
    </h2>
    <div class="main__content box">
      <div class="main__status box">
        <DateLocation
          :curDate="curDate"
        />
        <Weather
          :temperature="25"
          :humidity="0.2"
          :wind="10"
        />
      </div>
      <vue-calendar
        @day-changed="handleDayChanged"
      />
    </div>
  </div>
</template>
<script>
import DateLocation from '../DateLocation'
import Weather from '../Weather'
import moment from 'moment'

const api = 'https://api.darksky.net/forecast/af1dd67f02165446b1427f3ca8323d12/'

export default {
  name: 'Main',
  components: {
    DateLocation,
    Weather
  },
  data () {
    return {
      curLocation: '',
      curDate: moment().format('MMM Do YYYY'),
      coordinates: {
        lat: 35.68,
        lng: 139.76
      }
    }
  },
  async created () {
    this.$getLocation().then(coordinates => {
      this.coordinates = coordinates
      console.log(coordinates)
    })
    this.$http.get(this.dataUrl())
      .then(res => {
        console.log(res)
      })
  },
  methods: {
    handleDayChanged (data) {
      if (this.curDate !== data.date) {
        this.curDate = this.formatDate(data.date)
      }
    },
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
<style scoped>
.main__content {
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}

.main__status {
  flex-direction: column;
  align-items: center;
}
</style>
