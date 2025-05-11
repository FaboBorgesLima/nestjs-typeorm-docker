# Important

this is a template for a new project using typeorm, docker and nestjs, by default it uses mysql, but you can change it to any other database supported by typeorm (with the correct driver and docker image).

it's recommended to run everything in a docker container, so you don't have to install anything on your machine. For that you can use the ./dk script located in the root of the project.

# Quick Start

## Prerequisites

- Docker
- Docker Compose

## Steps

1. Clone the repository

```bash
git clone https://github.com/FaboBorgesLima/nestjs-typeorm-docker.git
```

2. Navigate into the project directory

```bash
cd nestjs-typeorm-docker
```

3. Copy the example environment file

```bash
cp .env.example .env
```

4. Install dependencies

```bash
./dk npm install
```

5. Run the Docker containers

```bash
./dk up
```

## Access the application

By default, the application will be running on `http://localhost:3000`. You can access it using your web browser or any API client like Postman or Insomnia or curl.
You can also connect to the database using the credentials specified in the `.env` file.
The default database is MySQL, but you can change it to any other database supported by TypeORM (with the correct driver and Docker image).
