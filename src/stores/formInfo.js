import { defineStore } from 'pinia'

export const useFormInfoStore = defineStore('formInfo', {
  state: () => {
        return {
            info: {
             fullName: '',
                gender: '',
                allergyList: [],
                preferredView: '',
                requests: '',
        } }
  },

  actions: {
    updateInfo(info) {
          this.info = info
    },
  },
})