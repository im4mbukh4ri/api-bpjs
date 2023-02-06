import Api from '@/services/Api'
export default {
  listCountry () {
    return Api().get('countries')
  },
  listCity (credentials) {
    return Api().post('cities', credentials)
  }
}
