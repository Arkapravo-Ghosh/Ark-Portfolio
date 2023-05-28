![work-in-progress](https://img.shields.io/badge/Work%20In%20Progress-90ee90.svg)
# Arkapravo Ghosh's Portfolio Website
![GitHub license](https://img.shields.io/github/license/Arkapravo-Ghosh/Ark-Portfolio)
![loc](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/Arkapravo-Ghosh/9a1184af0894a8b86cc3fdf0c8f82195/raw/loc.json)
![GitHub repo size](https://img.shields.io/github/repo-size/Arkapravo-Ghosh/Ark-Portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/Arkapravo-Ghosh/Ark-Portfolio)\
[![Deployment](https://github.com/Arkapravo-Ghosh/Ark-Portfolio/actions/workflows/deployment.yml/badge.svg)](https://github.com/Arkapravo-Ghosh/Ark-Portfolio/actions/workflows/deployment.yml)
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
- Build an optimized production build for deployment of the project
```bash
npm run build
```
- Run the production build
#### Install `serve`
```bash
npm i -g serve
```
#### Run the production build using `serve`
```bash
serve .
```
> The project will be running at [http://localhost:3000/Ark-Portfolio](http://localhost:3000/Ark-Portfolio)
>
> You can deploy the project into nginx, apache or any other web server of your choice. Just create a copy of the `Ark-Portfolio` directory inside  of your web server (Usually located at `/var/www/html/`).
