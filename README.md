
## Setup

`$ npm install`

## Running server (Development mode)

Run the "app" with babel tranpilation at require runtime!
You can change the JS files then nodemon will watch and automatically update the app.

`$ npm run start`

```sh
$ curl http://localhost:3000
{"msg":"Ta tranquilo, ta favoravel!"}
```

## Running server (Production mode)

This will transpile the "app" into a ES5 on a dist folder

`$ npm run build`
`$ npm run server`

```sh
$ curl http://localhost:3000
{"msg":"Ta tranquilo, ta favoravel!"}
```

- Changing the default PORT

`$ PORT=6666 npm run start`
