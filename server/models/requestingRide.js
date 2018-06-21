// This stores the requests made by riders of a specific ride
const request = [{
  requestedRide: {
    id: 1,
    riderId: Math.floor(Math.random() * 100),
    driver: {
      name: 'Jesse Kalu',
      car: 'toyota camery',
      plateNo: 'KTU5768IKJ',
    },
    description: {
      destination: {
        from: 'ikeja',
        to: 'Eko-Hotels, Victoria Island',
      },
      time: '7:30am',
    },
    price: 1500,
  },
}];

export default request;
