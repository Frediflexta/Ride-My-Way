# Ride-My-Way
[![Build Status](https://travis-ci.org/Frediflexta/Ride-My-Way.svg?branch=develop)](https://travis-ci.org/Frediflexta/Ride-My-Way)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f9ea0b0238a17f2ed566/test_coverage)](https://codeclimate.com/github/Frediflexta/Ride-My-Way/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/f9ea0b0238a17f2ed566/maintainability)](https://codeclimate.com/github/Frediflexta/Ride-My-Way/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/Frediflexta/Ride-My-Way/badge.svg)](https://coveralls.io/github/Frediflexta/Ride-My-Way)

Ride-My-Way App is a carpooling application that provides drivers with the ability to create ride offers and passengers to join available ride offers.
https://www.pivotaltracker.com/n/projects/2177978

#### Hosted
https://freddie-ridemyway.herokuapp.com/

### About
Ride-My-Way makes it easier to move around town, without having to worry about uncomfortable rides and expensive fuel cost. This app allow you view rides offered on your designated route, request to join the ride and Boom!! Done...

Drivers are considered as our patners, and we recognise that not all car owner finds passion from driving all day. Drive whenever you want, at your own time. Set ride specifics, like location, pick-up and drop-off location and most importantly, get that extra cash to coveer fuel expenses at the very least. You don't have to drive to work alone, or make that boring trip all by yourself.

### Feature
#### As a rider
- SIgnUp: https://freddie-ridemyway.herokuapp.com/api/v1/auth/signup
- Login: https://freddie-ridemyway.herokuapp.com//api/v1/auth/login
- View all rides on display: https://freddie-ridemyway.herokuapp.com/api/v1/rides
- Request a specific ride you're interested in: https://freddie-ridemyway.herokuapp.com/api/v1/rides/:rideId/requests
- View a specific ride: https://freddie-ridemyway.herokuapp.com/api/v1/rides/:rideId
- Offer rides: https://freddie-ridemyway.herokuapp.com/api/v1/rides
- View requests coming in: https://freddie-ridemyway.herokuapp.com/api/v1/users/rides/:rideId/requests
