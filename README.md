sudo docker-compose up -d
docker ps -a
docker logs backend
docker images
docker compose down
docker rmi $(docker images -q)
docker-compose up
