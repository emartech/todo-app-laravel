# TODO app spike w/ Laravel

## Development environment

After cloning the repo run
```
$ composer install
```
to install dependencies and then
```
$ docker-compose up
```
to start the docker containers.

Once done, copy the `.env.example` file to `.env` and run the
```
$ php artisan key:generate
```
command to generate an application key.
