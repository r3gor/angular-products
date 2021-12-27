@echo off
cd %gdp%/dev/contenedor4g
docker-compose up -d
cd %gdp%/dev/*games*
go run .