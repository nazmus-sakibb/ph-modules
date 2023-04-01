const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World from Node!');
})


app.listen(port, () => {
    console.log(`Server runnig on port: ${port}`);
});