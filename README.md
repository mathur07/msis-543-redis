# Redis implementation in Node APIs

## Install redis on Fedora
>sudo dnf install redis
## Install redis on Ubuntu
>sudo apt-get install redis
## Redis on macOS
>brew install redis
## Start your redis server
>redis-server

## Start accessing your redis sever using redis CLI
>redis-cli

## Commands to play around with redis (https://redis.io/commands/)

> ### quit (https://redis.io/commands/quit/)
> > ### Syntax : QUIT
> * is use to quit from the redis cli
> * Ask the server to close the connection. The connection is closed as soon as all pending replies have been written to the client.

> ### set (https://redis.io/commands/set/)
> > ### Syntax : 
> > SET key value [NX | XX] [GET] [EX seconds | PX milliseconds |
> > EXAT unix-time-seconds | PXAT unix-time-milliseconds | KEEPTTL]
> > ### Example
> > 127.0.0.1:6379> SET team 6
> * is use to set a key value pair in redis
> * everything is stored in string datatype
> * Set key to hold the string value. If key already holds a value, it is overwritten, regardless of its type. Any previous time to live associated with the key is discarded on successful SET operation.

> ### get (https://redis.io/commands/get/)
> > ### Syntax : 
> > GET key
> > ### Example
> > 127.0.0.1:6379> GET team
> * is use to get value of key store in redis
> * Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values.


> ### delete (https://redis.io/commands/del/)
> > ### Syntax : 
> > DEL key [key ...]
> > ### Example
> > 127.0.0.1:6379> DEL key1 key2
> * is use to get value of key store in redis
> * removes the specified keys. A key is ignored if it does not exist.

> ### exists (https://redis.io/commands/exists/)
> > ### Syntax : 
> > EXISTS key [key ...]
> > ### Example
> > 127.0.0.1:6379> EXISTS key1
> * is use to check is a key exists in redis
> * The user should be aware that if the same existing key is mentioned in the arguments multiple times, it will be counted multiple times. So if somekey exists, EXISTS somekey somekey will return 2.

> ### keys (https://redis.io/commands/keys/)
> > ### Syntax : 
> > KEYS pattern </br> 
> > * h?llo matches hello, hallo and hxllo
> > </br> 
> > *  h*llo matches hllo and heeeello
> > </br> 
> > *  h[ae]llo matches hello and hallo, but not hillo
> > </br> 
> > *  h[^e]llo matches hallo, hbllo, ... but not hello
> > </br> 
> > *  h[a-b]llo matches hallo and hbllo
> > ### Example
> > 127.0.0.1:6379> KEYS *
> * is use to view all keys matching the pattern


> ### flushall (https://redis.io/commands/flushall/)
> > ### Syntax : 
> > FLUSHALL [ASYNC | SYNC]
> > * ASYNC: flushes the databases asynchronously
> > * SYNC: flushes the databases synchronously
> > ### Example
> > 127.0.0.1:6379> FLUSHALL
> * delete all the keys of all the existing databases, not just the currently selected one. This command never fails.
> * if there is any problem in cashing then cleaning is a good way to solve it.


> ### ttl (https://redis.io/commands/ttl/)
> > ### Syntax : 
> > TTL key
> > ### Example
> > 127.0.0.1:6379> TTL key
> * Returns the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset.
> * The command returns -2 if the key does not exist.
> * The command returns -1 if the key exists but has no associated expire.

> ### setex (https://redis.io/commands/setex/)
> > ### Syntax : 
> > SETEX key seconds value
> > ### Example
> > 127.0.0.1:6379> SET key 10 value
> * Set key to hold the string value and set key to timeout after a given number of seconds.

## To run this project:
> * You need to have Node(>12v) installed in your system (https://nodejs.org/en/download/)
> * Download or clone this repo on your system
> * Open a terminal in your project directory
> * use commands: 
```
npm i (to install all dependencies of the project)
npm start (to start the project)
```

## Postman collection to hit the APIs:
```
{
	"info": {
		"_postman_id": "3dbb358a-0a48-481d-bb7c-07bfc00dee0c",
		"name": "MSIS 543 Redis",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "16007787"
	},
	"item": [
		{
			"name": "/photos-with-redis",
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {}
			},
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/photos-with-redis",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"photos-with-redis"
					]
				}
			},
			"response": []
		},
		{
			"name": "/photos-without-redis",
			"protocolProfileBehavior": {
				"disabledSystemHeaders": {
					"accept-encoding": true
				}
			},
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000/photos/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"photos",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "/ (liveliness)",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost:3000",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000"
				}
			},
			"response": []
		}
	]
}
```