# Codify
<img src="http://steventran06.github.io/img/portfolio/Codify.png" width="700">

Codify is a web app that connects students with code tutors. Students and code tutors can type code with each other in a shared text editor and communicate over video chat.

## Table of Contents

1. [Team](#team)
1. [Requirements](#requirements)
1. [Technologies](#technologies) 
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [System Architecture](#system-architecture)
1. [Contributing](#contributing)

## Team
- <img src="https://avatars.githubusercontent.com/u/4149515?v=3" width="64"> [**Inje Yeo**] (https://github.com/byeo630)
- <img src="https://avatars0.githubusercontent.com/u/11085115?v=3" width="64"> [**Steven Tran**](https://github.com/steventran06)
- <img src="https://avatars1.githubusercontent.com/u/5761911?v=3" width="64"> [**Krista Moroder**](https://github.com/kmoroder)
- <img src="https://avatars2.githubusercontent.com/u/12990522?v=3" width="64"> [**Tor Sinclair**](https://github.com/torsinclair)

## Requirements
- Node 5.9.1
- MongoDB 3.2.4

## Technologies
### Front End
- AngularJS
- Socket.io
- CodeMirror
- IceComm.io
- Google Maps API

### Back End
- NodeJS
- ExpressJS
- MongoDB

### Deployment
- Digital Ocean


## Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
```

`npm install` will chain `bower install` and install bower client-side dependencies within the client/lib directory

To load example data on a running instance of mongodb...
`mongorestore -d <nameOfDatabase>  <pathToDump>`
See demoBackUp_readme.md for details

### Tasks
- `mongod`
- `gulp task`
- `gulp start`

## System Architecture
<img src="https://github.com/Jaded-Prophet/Codify/blob/master/README_IMGS/Codify.png?raw=true" width="300">

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
