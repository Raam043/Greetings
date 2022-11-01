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
rm -rf /opt/Greetings/*
mkdir /opt/Greetings
cd /opt/Greetings
git clone https://github.com/Raam043/Greetings.git
cp /opt/Greetings/Greetings/* /opt/Greetings

```

Build Docker images and Run container 
```sh
docker stop Greetings
docker rm -f Greetings
docker image rm -f Greetings
docker build -t Greetings .
docker run --name Greetings -d -p 80:80 Greetings
cp /opt/Greetings/* /usr/share/nginx/html
```
Open New tab with `Server_Public_IP:`



