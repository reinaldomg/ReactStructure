import value from './dvs.json';

const data = [
    {
      name: 'device1',
      port_name: '/dev/ttyUSB0',
      timeout_seconds: 10,
      cache_timeout: 450,
    },
    {
      name: 'device2',
      port_name: '/dev/ttyUSB0',
      timeout_seconds: 10,
      cache_timeout: 455,
    },
    {
      name: 'device3',
      port_name: '/dev/ttyUSB1',
      timeout_seconds: 10,
      cache_timeout: 450,
    },
    {
      name: 'device4',
      port_name: '/dev/ttyUSB2',
      timeout_seconds: 40,
      cache_timeout: 660,
    },
  ];

//const data2 = JSON.parse(value);

export default data;