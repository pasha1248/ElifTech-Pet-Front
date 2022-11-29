/** @format */

import Cookie, { CookieSetOptions } from 'universal-cookie'

const cookies = new Cookie()

class CookieService {
  get(key: string) {
    return cookies.get(key)
  }

  set(key: string, value: string, options: CookieSetOptions) {
    cookies.set(key, value, options)
  }

  remove(key: string) {
    cookies.remove(key)
  }
}

export default new CookieService()
