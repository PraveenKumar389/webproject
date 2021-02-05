const http = rquire('http');

const server = http.creatServer(function(request,response){

    response.end("Hello World");
});
server.listen(7000);