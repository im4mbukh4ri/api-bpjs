import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:3000/api/v1/',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJidWtoNHJpaW00bUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJJbWFtIiwibGFzdE5hbWUiOiJCdWtoYXJpIiwiUm9sZSI6eyJpZCI6MSwicm9sZSI6IkFkbWluIiwiY3JlYXRlZEF0IjoiMjAyMy0wMi0wNVQxMDozNjo1Mi4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wMi0wNVQxMDozNjo1Mi4wMDBaIn0sImlhdCI6MTY3NTU5OTk4MCwiZXhwIjoxNjc4MTkxOTgwfQ.OORFfHB_eP9rCEbr2XRM2zv3TmlS6XEGw91iz2ELDms',
      Accept: 'application/json'
    }
  })
}
