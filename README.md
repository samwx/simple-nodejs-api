
## Setup

`$ npm install`

## Running server

`$ npm start`

```sh
$ curl -i http://localhost:3000
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 37
ETag: W/"25-Am7DbFI/GdU0e/53WCLWrA"
Date: Wed, 13 Apr 2016 06:45:09 GMT
Connection: keep-alive
```
```javascript
{"msg":"Ta tranquilo, ta favoravel!"}
```

- Changing the default PORT

`$ PORT=6666 npm start`
