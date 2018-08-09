
## Create dev environment

First, get encrypted environment files from Ken.  These live in the directory and don't get into source control.

```
$ ./devenv
```

1. Updates postgres client and python.

2. Creates virtual environment and installs all dependencies.

3. Builds docker images for cc-api, cc-auth, and cc-web

4. Turns on docker compose

5. Installs a test schema with a little data.

## Develop locally

Generally, you're working on a combination of cc-api and cc-web.  In order to get those to fast-turnaround/auto-restart, follow the following procedure.

1. In the cc-api directory, start up docker-compose with pertinent containers that you're not actively working on.

```
$ bin/local-infra
```

At this point, everything that's not actually nuvuli is running in docker-compose.

2. Open up a terminal in the `cc-api` directory.  Start the local server.

```
$ bin/local
```

Now you can insert debugger statements and save stuff and the server auto restarts.

3. Open a terminal in the `cc-web` directory.  Start the local server.

```
$ bin/local
```

At this point, yarn is serving the static website on localhost:3000.  You can make changes and get auto restart.

5. Open up the app and create an account.

```
$ open http://localhost:3000/signup
```


## Run test suite

*Warning* - This has problems.  Skip it for now.

```
$ FIXTURE=cc_api_test bin/test
```

## Run test suite with coverage

*Warning* - This has problems.  Skip it for now.

```
$ FIXTURE=cc_api_test bin/coverage
$ open .coverage_html/index.html
```

## Log into local dev database

```
$ bin/psql-local
```

## Log into local test database

```
$ psql -U cc -h localhost cc_api_test
```

## Create new text fixture


```
$ bin/test-fixture cc_api cc_api_test
```

