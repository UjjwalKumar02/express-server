# Manual installation

- install node
- `git clone <repo>`
- `npm install`

- Get yourself a database from neon.tech
- or run local postgres using docker
```
docker run 
  -p 5432:5432 
  -d 
  -e POSTGRES_PASSWORD=mysecretpass
  postrges
```

- `DATABASE_URL="postgresql://postgres:mysecretpass@localhost:5432/postgres"`

- `npx prisma migrate dev`
- `npx prisma generate`

- `npm run build`
- `npm run start`


# Docker installation

- install docker

- create network
```
docker network create <nname>
```

- create volume
```
docker volume create <vname>
```

- run local postgres database
```
docker run
  -p 5432:5432
  -d
  --network <nname>
  --name <dbname>
  -v <vname>
  -e POSTGRES_PASSWORD=mypass
  postgres
```

- build backend-app
```
docker build
  -t backend-app:lts .
```

- Run backend-app container
```
docker run
  -p 3000:3000
  -d
  --network <nname>
  -e DATABASE_URL=postgresql://postgres:mypass@<mydbname>/postgres
  backend-app:lts
```


# Docker Compose

- install docker

- `docker-compose -f docker-compose.yml up -d`