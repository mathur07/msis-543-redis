const express = require('express')
const axios = require('axios')
const cors = require('cors')
const Redis = require('redis')
const { json } = require('express')


const app = express()
app.use(cors())

const port = 3000

const redisClient = Redis.createClient()
const REDIS_EXP = 3600


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/photos" , async(req,res)=>{
    redisClient.get('photos',async (err,photos)=>{
        if (err) console.error(err)
        if (photos != null) {
            return res.json(JSON.parse(photos))
        } else {
            const albumId = req.query.albumId
            const {data} = await axios.get(
            "https://jsonplaceholder.typicode.com/photos",
            {params:{albumId}}
    )
            redisClient.setEx('photos',REDIS_EXP,JSON.stringify(data))
        }
        res.json(data)
    })
})

app.get("/photos/:id" , async(req,res)=>{
    const {data} = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )
    res.json(data)
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })