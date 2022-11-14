/*const dotenv = require("dotenv");

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
*/
const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req)
});

const PORT = 5000;
server.listen(PORT,()=>console.log(`server is running on port ${PORT}`));

