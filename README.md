# This is my Portfolio website
![work-in-progress](https://img.shields.io/badge/Work%20In%20Progress-90ee90.svg)
> Check out the site at [https://arkapravoghosh1.tildevarsh.in](https://arkapravoghosh1.tildevarsh.in)

# Build the project

## Prerequisites
- [Node.js LTS Hydrogen](https://nodejs.org/en/) (v18.16.0)

## Steps
- Clone the repository
```bash
git clone https://github.com/Arkapravo-Ghosh/Ark-Portfolio.git
```
- Install dependencies
```bash
npm i
```
- Run the project in developer mode
```bash
npm run dev
```
> The project will be running at [http://localhost:3000](http://localhost:3000)
- Build an optimized production build for deployment of the project
```bash
npm run build
```
- Run the production build
#### Install `serve`
```bash=
npm i -g serve
```
#### Run the production build using `serve`
```bash
serve -s dist
```
> You can deploy the project into nginx, apache or any other web server of your choice. Just copy all contents from the `dist` folder to the root of your web server (Usually located at `/var/www/html`).
