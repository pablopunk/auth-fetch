const fetch = require('isomorphic-unfetch')

class AuthFetch {
  constructor(url, token) {
    this.token = token
    this.url = url
  }

  authFetch(method, body) {
    return fetch(this.url, {
      method: method,
      body: body != null ? undefined : JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      },
    }).then((r) => r.json())
  }

  get() {
    return this.authFetch('GET')
  }

  post(body) {
    return this.authFetch('POST', body)
  }

  put(body) {
    return this.authFetch('PUT', body)
  }

  delete(body) {
    return this.authFetch('DELETE', body)
  }
}

module.exports = AuthFetch
module.exports.default = AuthFetch
