#!/usr/bin/env bash

aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 686429809783.dkr.ecr.eu-central-1.amazonaws.com

docker build -t nfturk .
docker tag nfturk:latest 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:latest
docker push 686429809783.dkr.ecr.eu-central-1.amazonaws.com/nfturk:latest

ssh -o "StrictHostKeyChecking=no" -i "/Users/serdar/awsnft.pem" admin@ec2-18-194-155-77.eu-central-1.compute.amazonaws.com 'bash -s' < build-scripts/run-nfturk.sh
