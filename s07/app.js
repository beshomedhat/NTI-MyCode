// // const request = require('request');
// // const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=6ba9e9e2879449c39404d3dca27be026';
// // request({url},(err,res)=>{
// //     data= JSON.parse(res.body)
// //     console.log(data.status)
// // })

// const https = require('https');
// const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=6ba9e9e2879449c39404d3dca27be026';
// const req = https.request(url,(res)=>{
//     let data=``;
//     res.on('data',(chunk)=>{
//         data += chunk.toString();
//     })
//     res.on('end',()=>{
//         const body = JSON.parse(data);
//         console.log('data',body)
//     })
// })
// req.on('error',(err)=>{
//     console.log(err)
// })
// req.end()