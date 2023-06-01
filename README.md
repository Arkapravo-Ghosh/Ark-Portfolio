![work-in-progress](https://img.shields.io/badge/Work%20In%20Progress-90ee90.svg)
# Arkapravo Ghosh's Portfolio Website
![GitHub license](https://img.shields.io/github/license/Arkapravo-Ghosh/Ark-Portfolio)
![loc](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/Arkapravo-Ghosh/9a1184af0894a8b86cc3fdf0c8f82195/raw/loc.json)
![GitHub repo size](https://img.shields.io/github/repo-size/Arkapravo-Ghosh/Ark-Portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/Arkapravo-Ghosh/Ark-Portfolio)\
[![Deployment](https://github.com/Arkapravo-Ghosh/Ark-Portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/Arkapravo-Ghosh/Ark-Portfolio/actions/workflows/main.yml)
> Check out the site at [https://arkapravo-ghosh.github.io/Ark-Portfolio](https://arkapravo-ghosh.github.io/Ark-Portfolio)
# Build the project
## Prerequisites
- [Node.js LTS Hydrogen](https://nodejs.org/en/) (v18.16.0)
## Steps
- Clone the repository
```bash
git clone https://github.com/Arkapravo-Ghosh/Ark-Portfolio.git
```
- Change directory to the project directory
```bash
cd Ark-Portfolio
```
- Install dependencies
```bash
npm i
```
- Run the project in developer mode
```bash
npm run dev
```
> The project will be running at [http://localhost:3000/Ark-Portfolio/](http://localhost:3000/Ark-Portfolio/)
- Preview the production build
```bash
npm run preview
```
- Build an optimized production build for deployment of the project
```bash
npm run build
```
> The optimized production build will be available in the `Ark-Portfolio` directory, make sure to copy the `Ark-Portfolio` directory inside the root directory of your web server.
## Deploy the project
### Docker Compose
- Create a directory
```bash
mkdir Ark-Portfolio
```
- Go to the directory
```bash
cd Ark-Portfolio
```
- Download the `docker-compose.yml` file
```bash
wget https://raw.githubusercontent.com/Arkapravo-Ghosh/Ark-Portfolio/main/docker-compose.yml
```
- Run the project
```bash
docker compose up -d
```
> The project will be running at [http://localhost/Ark-Portfolio](http://localhost/Ark-Portfolio)
>
> To stop the project, run `docker compose down` in the same directory.
