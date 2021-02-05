const express = require('express');
const app = express();

app.get('/test',function(request,response){

    response.send("Hello World");
});
app.listen(8000);
