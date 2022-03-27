sudo su
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 686429809783.dkr.ecr.eu-central-1.amazonaws.com
docker rm -f nfturk
docker pull 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:latest
docker run -d --name nfturk --restart=unless-stopped -p 80:3000 -v /var/lib/docker/volumes/nfturk-uploads:/usr/src/app/public/uploads -v /var/lib/docker/volumes/nfturk-config:/usr/src/app/db/config -e MYSQL_HOST=$HOSTNAME 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:latest
