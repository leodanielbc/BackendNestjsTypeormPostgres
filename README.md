## Description

Proyecto de registro de usuarios.

## Tecnologias
- [Nest](https://github.com/nestjs/nest) framework TypeScript.
- Postgresql
- TypeOrm
- Docker

## Docker
```bash
# Configuracion del contenedor
$ docker-compose up -d <nombre servicio "database">

# Verificar la ejecución
$ docker-compose ps

# Entrar al contenedor
$ docker-compose exec database bash
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).
