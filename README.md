# msis-543-redis
Basic Redis implementation

sudo dnf install redis (fedora)
or 
sudo apt-get install redis

redis-server # start you redis server

redis-cli # to start accessing redis

Commands:-

quit

set key value <-set key value pair 
every thing stored is a string

get

del <- delete 


exists


keys *


flushall

if there is an y problem in cashing then cleaning is a good way to solve it


ttl <- Time-to-live 
-1 means no expiration

expire <- name 10

least frequently used

setex name 10 shub


lpush
lrange num 0 -1
rpush
lpop 
rpop

npm init
npm i express
npm i redis
