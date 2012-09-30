# FB.js

Facebook api for node.js done right, built on top of facebook-js.

## Usage:

```javascript
var fb     = require("fb-js"),
    client = new fb("my fb oauth token");

// regular call without params
client.api("GET", "/me", function(error, result) {
    console.log(error);
    console.log(result);
});

// open graph api call with param
client.api("POST", "/me/hackmobile:pew", { website: "http://bobrik.name" }, function() {
    console.log(arguments);
});
```

## API:

1. Create your client with oauth token:

    ```javascript
    var fb     = require("fb-js"),
        client = new fb("my fb token");
    ```

2. Make api calls:

    ```javascript
    client.api(method, path, [params object], [callback])
    ```

## Authors

* Ian Babrou <ibobrik@gmail.com>

## License

MIT
