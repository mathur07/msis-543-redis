const express = require('express')
const cors = require('cors')
const Redis = require('redis')
const { json, response } = require('express')


const app = express()
app.use(cors())

const port = 3000

const redisClient = Redis.createClient()
const REDIS_EXP = 3600


app.get('/', async (req, res) => {
    try {
        await redisClient.connect()
    } catch (error) {
        console.log("already redisClient is connected");
    }
    await redisClient.set("hello", "World")
    res.send('Hello World!')
})


app.get("/photos", async (req, res) => {
    try {
        await redisClient.connect()
    } catch (error) {
        console.log("already redisClient is connected");
    }

    redisClient.get('photos', async (err, photos)=>{
        if(err){
            console.log(err);
        }
        if (photos) {
            
        }
    })
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => {
            redisClient.set('photos', JSON.stringify(data))
            res.json(data)
        })
        .catch(function (err) {
            console.log("Unable to fetch -", err);
        });
    // const albumId = req.query.albumId
    // await axios.get(
    //     "https://jsonplaceholder.typicode.com/photos",
    //     {params: {albumId}}
    // )
    // .then((response)=>{
    //     console.log(response.data);
    //     console.log(response.status);
    //     console.log(response.statusText);
    //     console.log(response.headers);
    //     console.log(response.config);
    // })
    // // redisClient.set("photos",REDIS_EXP, JSON.stringify(data))
    // res.json(data)
})


// app.get("/photos" , async(req,res)=>{
//     redisClient.get('photos',async (err,photos)=>{
//         if (err) console.error(err)
//         if (photos != null) {
//             return res.json(JSON.parse(photos))
//         } else {
//             const albumId = req.query.albumId
//             const {data} = await axios.get(
//             "https://jsonplaceholder.typicode.com/photos",
//             {params:{albumId}}
//     )
//             redisClient.setEx('photos',REDIS_EXP,JSON.stringify(data))
//         }
//         res.json(data)
//     })
// })

app.get("/photos/:id", async (req, res) => {
    const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/photos/${req.params.id}`
    )
    console.log(data);
    res.send(data)
    // .json(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})