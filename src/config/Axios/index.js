import axios from 'axios'

const base_url = "https://staging.gicindonesia.com/bo_homepage_new/api"
const APIGET = async (endpoint) => {
    let response = null
    await axios.get(base_url+endpoint)
    .then((res) => {
        response = res
    })
    .catch((error) => {
        response = error.response
    })
    return response
}

const $axios = axios.create({
    baseURL: base_url,
  })

export {
    APIGET,
    $axios
}