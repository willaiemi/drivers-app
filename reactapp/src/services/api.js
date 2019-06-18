// INTERACTION WITH NODE.JS API

import axios from 'axios'

// do NOT change this, only if you know what you're doing
const BASE_URL = "http://localhost:3002/api"

const api = axios.create({ baseURL: BASE_URL });

export default api;