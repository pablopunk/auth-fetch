# auth-fetch

<p align="center">
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/auth-fetch"><img src="https://img.shields.io/npm/dt/auth-fetch.svg" /></a>
</p>

<p align="center">
  <i>Fetch JSON with a Bearer token</i>
</p>


## Install

```sh
npm install auth-fetch
```

## Usage

When you create an instance, you can use every http method and it will automatically fill
the API url and the Bearer token. Also, it will request the data as `application/json`,
and it will unwrap the json result for you (equivalent to `fetch(url).then(r => r.json())`)

```js
import AuthFetch from 'auth-fetch'

const fetch = new AuthFetch('/api/users', 'secret-token')

await fetch.get().then(users => console.log(users))
await fetch.put({id: 2, name: 'pablo'})
await fetch.put({id: 2, name: 'pablo varela'})
await fetch.delete({id: 2})
```


## License

MIT


## Author

| ![me](https://gravatar.com/avatar/522e6a2f38c7cb6842edc552800034d6?size=100)           |
| --------------------------------- |
| [Pablo Varela](https://pablopunk.com)   |

