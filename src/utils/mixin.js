// import Vue from 'vue'
import { DEVICE_TYPE } from './device'
import { mapState } from 'vuex'

// const mixinsComputed = Vue.config.optionMergeStrategies.computed
// const mixinsMethods = Vue.config.optionMergeStrategies.methods

const mixinDevice = {
  computed: {
    ...mapState({
      device: state => state.device
    })
  },
  methods: {
    isMobile () {
      console.log(this.device)
      return this.device === DEVICE_TYPE.MOBILE
    },
    isDesktop () {
      return this.device === DEVICE_TYPE.DESKTOP
    },
    isTablet () {
      return this.device === DEVICE_TYPE.TABLET
    }
  }
}

export {
  mixinDevice
}
