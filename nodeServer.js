const express = require('express')
const cors = require('cors')
const Redis = require('redis')

const app = express()
app.use(cors())

const port = 3000

const redisClient = Redis.createClient()
const REDIS_EXP = 3600


app.get('/', async (req, res) => {
    try {
        await redisClient.connect()
    } catch (error) {
        console.log("redisClient is connected " + error);
    }
    res.send('Hello World!')
})

app.get("/photos", async (req, res) => {
    try {
        await redisClient.connect()
    } catch (error) {
        console.log("redisClient is connected " + error);
    }
    redisClient.get("photos")
        .then(val => {
            if (val != null) {
                res.json(JSON.parse(val))
            } else {
                fetch("https://jsonplaceholder.typicode.com/photos")
                    .then((response) => response.json())
                    .then((data) => {
                        redisClient.set('photos', JSON.stringify(data))
                        res.json(data)
                    })
                    .catch(function (err) {
                        console.log("Unable to fetch -", err);
                    });
            }
        })
        .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})