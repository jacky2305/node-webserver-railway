const http = require('http');



http.createServer((req, res)=>{
//request: es lo que estan solicitando, informacon del URL, headers, argumentos, etc. (la solicitud a mi webservice)
//reponse: es lo que mi servidor le responde al cliente 
   /*res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
   res.writeHead(200, {'Content-Type': 'application/csv'});*/

   /* res.write('id, nombre\n');
    res.write('1, Jaqueline\n');
    res.write('2, Jose\n');
    res.write('3, Maria\n');*/
    res.write('Hola Mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto', 8080);