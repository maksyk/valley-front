const BASE_API = import.meta.env.VITE_BASE_URL

const DEBUG = import.meta.env.DEV
const DEBUG_INIT_DATA = import.meta.env.VITE_INIT_DATA
const DEBUG_TELEGRAM_USER_ID = +import.meta.env.VITE_DEBUG_TELEGRAM_USER_ID
const DEBUG_TELEGRAM_USERNAME = 'username2'

export {
    DEBUG,
    DEBUG_INIT_DATA,
    BASE_API,
    DEBUG_TELEGRAM_USER_ID,
    DEBUG_TELEGRAM_USERNAME,
}