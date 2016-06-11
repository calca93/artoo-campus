# ArToo Campus
MEAN exercises, examples and project for ArToo Campus.

## Start
Fork this repo.

## Setup git in your development environment
```
git init
git config --global pull.rebase true
git clone git@github.com:yourUsername/artoo-campus.git .
```

## Install packages
```
npm install
```

## Install gulp
```
(sudo) npm install -g gulp
```

## Project
Transport Manager

### Entities
* Transport
   * Service
   * Controller
   * Filter
   * Directives - <list> and <manager> (?)
   * Prop
      * id
      * customer
      * placeLoad
      * placeUnload
      * dateLoad
      * dateUnload
      * weigth
      * length (optional)
* Truck
   * Service
   * Controller
   * Filter
   * Prop
      * plate number
      * axes number
      * max weigth load
      * total length
      * heigth
* Admin (optional)
* User (optional)

### Features
* As admin, create form to collect new transports
* As admin, show list of transports with details
* As admin, modify a transport
* As admin, archive a transport
* As admin, calculate distance from start to destination, show little map, using Google Maps API
* As admin, login needed to insert records
* As admin, create modify or delete a truck
* As admin, assign a transport to a truck
* As user, insert a code and see some information about a transport
* A transport has a id used as a code to see details
* A transport can be geolocated (optional)
* A truck has information about the vehicle

<!-- ## Exercises mockups

### Home
![Home 1](https://assets.moqups.com/grdjfDzUzO/Page_1.png)

### Market
![Market 2](https://assets.moqups.com/Jgy3rpaJPz/Page_1.png)

### Armory
![Armory 3](https://assets.moqups.com/wVwd427LO5/Page_1.png)

### Quests
![Quests 4](https://assets.moqups.com/57dqoZC60v/Page_1.png)
-->
