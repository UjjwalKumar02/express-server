# Docker

### Volume
- Persits data

```
docker volume create vol_name

docker run
  -p 27017:27017 
  -d 
  -v vol_name:/data/db 
  mongo

docker volume ls
```

## Network
- Connects different containers

```
docker network create net_name

docker run 
  -p 27017:27017
  -d
  -v vol_name:/data/db
  --network net_name
  --name mono_db
  mongo

docker run
  -p 3000:3000
  -d
  --network net_name
  -e DB_URL=mongodb://mono_db:27017/something
  image_name


docker network ls
```

### Layers
- Optimize by using cached layers

```
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .
```