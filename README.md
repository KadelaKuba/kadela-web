# [kadela.cz](https://kadela.cz/)

Personal contact web page

### Tech stack
- Typescript + React + Vite
- Docker

### Local setup

1. Start containers by running:
```
make run
```
2. Build app
```
make npm-build-dev
```
3. Open Application in Browser: [http://localhost:8008](http://localhost:8008)

### Development

#### Standards (ECS, PHPStan,..)
Use script for checking all app standards
```
make check-all
```

#### Makefile
For effective work with host system. The config and more info in `Makefile` in project root directory.

### Deployment
Deployment is performed using the [Netlify](https://www.netlify.com/) platform.