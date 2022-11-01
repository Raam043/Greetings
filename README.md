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
```
Open New tab with `Server_Public_IP:`

With Above commands Jenkins CICD can be made

Output :- 

![image](https://user-images.githubusercontent.com/111989928/199234000-331f016b-7898-461f-8b39-dcd226c64061.png)



![image](https://user-images.githubusercontent.com/111989928/199224941-41b5ce65-4f97-40bc-a42b-9a67e3d2be35.png)


![image](https://user-images.githubusercontent.com/111989928/199234054-bbe86e45-7a5c-46bb-becd-5aed510cbbf8.png)


