# Using GNU `make` command for scripts/commands aliases.

# If you type make in your cli, it will list all the available commands.
help:
	@ echo "Usage: make <target>\n"
	@ echo "Available targets:\n"
	@ cat Makefile | grep -oE "^[^: ]+:" | grep -oE "[^:]+" | grep -Ev "help|default|.PHONY"

# DOCKER
run:
	docker-compose up -d

stop:
	docker-compose down

# FRONTEND
npm-container:
	 docker-compose exec node bash

npm-install:
	docker-compose exec node npm install

npm-run-dev:
	docker-compose exec node npm run dev
