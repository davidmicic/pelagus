run-pg:
	docker run --name some-postgres -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -e POSTGRES_DB=pelagus -p 5432:5432 -v ./backend/postgres/conf:/docker-entrypoint-initdb.d/ -d postgres

backend-run:
	docker run --name backend --env-file .docker.env -p 3000:3000 -v ${PWD}/backend/build:/app/build -d pelagus_backend

backend-build:
	docker buildx build ./backend -t pelagus_backend

frontend-build:
	docker buildx build ./frontend -t pelagus_frontend

frontend-run:
	docker run --name frontend -p 4173:4173 -v ${PWD}/frontend/dist:/app/dist -d pelagus_frontend

compose-run:
	docker-compose build
	docker-compose up

compose-backend-run:
	cd backend && npx tsc
	docker-compose -f docker-compose-backend.yml build
	docker-compose -f docker-compose-backend.yml up


# run-backend:
# 	npm start

