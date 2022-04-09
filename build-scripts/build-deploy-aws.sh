#!/usr/bin/env bash

aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 686429809783.dkr.ecr.eu-central-1.amazonaws.com

docker buildx build --platform linux/amd64 -t 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:latest --push .
#docker tag nfturk:latest 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:m1-lates
#docker push 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:m1-latest
if [ $? -eq 0 ]; then
  ssh -o "StrictHostKeyChecking=no" -i "./awsnft.pem" admin@ec2-18-194-155-77.eu-central-1.compute.amazonaws.com 'bash -s' < build-scripts/run-nfturk.sh
fi
