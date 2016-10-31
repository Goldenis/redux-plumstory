import axios from 'axios'

export default (headers) => {
 return axios.create(Object.assign({}, {
   baseURL: process.env.API_BASE_PATH || `http://mvl-api-staging.herokuapp.com/api`,
 }, headers))
}
