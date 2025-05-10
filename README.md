# klausase

Upload, filter and download exams from different years, lecturers and lectures.

## Install

The app is used to run in a docker container. Download [Docker](https://docs.docker.com/get-docker/) if you haven't already.

1. Open a new terminal.
2. Navigate into the root directory of the cloned project.
3. Type `docker-compose up` and hit enter to start the required services.

The app is available under `http://localhost`, running on port `80`.
Backend services are available on port `8080`.

## API

| Methods | Urls                              | Actions                                              |
| ------- | --------------------------------- | ---------------------------------------------------- |
| POST    | /api/klausuren                    | create new Klausur                                   |
| GET     | /api/klausuren                    | retrieve all Klausuren                               |
| GET     | /api/klausuren/:id                | retrieve a Klausur by `:id`                          |
| PUT     | /api/klausuren/:id                | update a Klausur by `:id`                            |
| DELETE  | /api/klausuren/:id                | delete a Klausur by `:id`                            |
| DELETE  | /api/klausuren                    | delete all Klausuren                                 |
| GET     | /api/klausuren?year=[keyword]     | find all Klausuren which year contains `keyword`     |
| GET     | /api/klausuren?lecturer=[keyword] | find all Klausuren which lecturer contains `keyword` |
| GET     | /api/klausuren?lecture=[keyword]  | find all Klausuren which lecture contains `keyword`  |

## Used tech-stacks

### Build-tools

- Gradle for the backend
- Vite for the frontend

### Backend

- Spring Boot

### Frontend

- TypeScript

### Database

- PostgreSQL