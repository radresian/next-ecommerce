#!/usr/bin/env bash

ssh -o "StrictHostKeyChecking=no" -i "./awsnft.pem" admin@ec2-18-194-155-77.eu-central-1.compute.amazonaws.com 'bash -s' < build-scripts/run-nfturk.sh
