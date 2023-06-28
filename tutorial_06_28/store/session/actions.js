import axios from 'axios'

const plainAxiosInstance = axios.create({
  baseURL: 'https://api.ipify.org',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
})
export default {
  /*
  유저의 현재 IP 주소를 구한다.
  */
  async get_ip_addr({ commit }) {
    return await new Promise((resolve, reject) => {
      plainAxiosInstance
        .get('https://api.ipify.org?format=json')
        .then((resp) => {
          window.console.log('[debug] get_ip_addr resp', resp)
          const obj = resp.data.ip
          if (obj === null || obj === undefined) {
            reject(new Error('API return value is wrong'))
          }
          commit('set_ip_addr', obj)
          resolve(resp)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}