# DK

dk is a simple shell script to run docker commands (**D**oc**K**er).

commands are run in the context of the docker container, so you don't have to worry about installing anything on your machine or configuring network.

## Usage

```bash
./dk <command>
```

## Commands

- `npm` - run npm commands
- `yarn` - run yarn commands
- `node` - run node commands
- `typeorm` - run typeorm commands
- `bash` - run bash commands in server container
- `test` - for runing e2e tests

if the command is not listed here it will be executed in docker compose context, so you can run any docker command you want.

- `up` - run docker compose up
- `down` - run docker compose down
- `build` - run docker compose build
- `logs` - run docker compose logs
- `exec` - run docker compose exec
- `ps` - run docker compose ps
