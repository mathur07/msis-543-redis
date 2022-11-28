const express = require('express')
const axios = require('axios')
// const cors = require('cors')

const app = express()
// app.use(cors)

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/photos" , async(req,res)=>{
    const albumId = req.query.albumId
    const {data} = await axios.get(
        "https://jsonplaceholder.typicode.com/photos",
        {params:{albumId}}
    )
    res.json(data)
})

// app.get("/photos/:id" , async(req,res)=>{
//     const {data} = await axios.get(
//         `https://jsonplaceholder.typicode.com/photos/${req.query.id},`,
//     )
//     res.json(data)
// })


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })