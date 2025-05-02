# Introduction

This is not about TypeORM, but how to use TypeORM using the [dk](../dk).

For more information about TypeORM, please refer to the [TypeORM documentation](https://typeorm.io/).
For more information about Docker, please refer to the [Docker documentation](https://docs.docker.com/).
For more information about NestJS, please refer to the [NestJS documentation](https://docs.nestjs.com/).

## Entities

You need to put all your entities classes in the [entities](../src/typeorm/entities.ts) file.

Like this:

in src/user/user.entity.ts put

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // more columns here ...
}
```

Then in the [entities](../src/typeorm/entities.ts) file, you can import your entities like this:

```typescript
import { UserEntity } from '../user/user.entity';

export default [UserEntity];
```

all entities will be automatically loaded by TypeORM in [data-source-config](../src/typeorm/data-source-config.ts).

## Migrations

To run migrations using the dk, you can use the following command:

```bash
./dk npm migration:run
```

This will run all pending migrations in the `src/migrations` directory.

You can also create a new migration using the following command:

```bash
./dk npm migration:create --name=<migration-name>
```

This will create a new migration file in the `src/migrations` directory with the specified name.

You can also generate a migration based on the current state of the database using the following command:

```bash
./dk npm migration:generate --name=<migration-name>
```
