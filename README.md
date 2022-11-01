# `Greetings Web Application` Installation with docker and Jenkins.

Release linux server and install Jenkins and Docker

```sh
yum update -y
yum install docker -y
systemctl enable docker
systemctl start docker
yum install pip -y
pip install docker-py
wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
yum upgrade
amazon-linux-extras install java-openjdk11 -y
yum install jenkins -y
systemctl enable jenkins
systemctl start jenkins
yum install git -y
```
Make app directory and add Application files using git clone
```sh
rm -rf /opt/greetings/*
mkdir /opt/greetings
cd /opt/greetings
git clone https://github.com/Raam043/Greetings.git
cp /opt/greetings/Greetings/* /opt/greetings

```

Build Docker images and Run container 
```sh
docker stop greetings
docker rm -f greetings
docker image rm -f greetings
docker build -t greetings .
docker run --name greetings -d -p 80:80 greetings
docker cp /opt/greetings/* greetings:/usr/share/nginx/html
```
Open New tab with `Server_Public_IP:`



