HBCU NPM Module
============

Node.JS / NPM Module that gives you all of the Historically Black Colleges & Universities in the US.

# Installing

`npm install hbcus`

# Using

```javascript
var hbcus = require('hbcus');

hbcus.all; // An Array of all HBCUs 

hbcus.get(); // Returns a random school name

hbcus.random(3); // Returns an array of random school names
```

# License

MIT License