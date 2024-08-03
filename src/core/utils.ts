
export function getUrlPath () {
    if (import.meta.env.DEV) return 'src/'
    return ''
}