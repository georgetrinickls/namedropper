import {Restaurant} from '../types/Restaurant';

export const offMenuRestaurants: Restaurant[] = [
  {
    id: '62',
    name: 'The Ivy',
    latitude: 51.51287,
    longitude: -0.128125,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by multiple Off Menu guests including Munya Chawawa, Joe Wicks.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Munya Chawawa, Joe Wicks, Kathy Burke, Lily Allen, Judi Love',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '72',
    name: 'Enish',
    latitude: 51.5163951,
    longitude: -0.1360091,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by multiple Off Menu guests including Julia Adenuga, Toheeb Jimoh.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Julia Adenuga, Toheeb Jimoh, Izuka Hoyle, Nabil Abdulrashid',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '395',
    name: 'Dishoom',
    latitude: 51.5125268,
    longitude: -0.1268281,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by multiple Off Menu guests including Diane Morgan, Meera Syal.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Diane Morgan, Meera Syal, Joe Locke, Antoni Porowski',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '404',
    name: 'Pizza Express',
    latitude: 51.5151287,
    longitude: -0.1333148,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Italian',
    description: 'Classic Italian dishes, recommended by multiple Off Menu guests including Huge Davies, Harriet Kemsley.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Huge Davies, Harriet Kemsley, Ed Gamble, Mo Giliigan (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Italian"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '1',
    name: 'Shack Fuyu',
    latitude: 51.5138782,
    longitude: -0.1301879,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Japanese',
    description: 'Traditional Japanese dining, recommended by Off Menu guests Ed and James, Kumail Nanjiani and Celya AB.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James, Kumail Nanjiani, Celya AB',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Japanese"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '16',
    name: 'St. John\'s Restaurant',
    latitude: 51.5205444,
    longitude: -0.10149,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Josie Long and Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Josie Long, Ed Gamble, Rhys Nicholson (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '34',
    name: 'Flesh and Buns',
    latitude: 51.5140027,
    longitude: -0.1256881,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Catherine Bohart and Sarah Keyworth.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Catherine Bohart, Sarah Keyworth, Lily Allen (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '35',
    name: 'Mildred\'s',
    latitude: 51.5130279,
    longitude: -0.1364161,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Catherine Bohart and Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Catherine Bohart, Ed Gamble, James Acaster (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '374',
    name: 'McDonald\'s',
    latitude: 51.5176042,
    longitude: -0.0823406,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Lolly Adefope, Lily Allen and Jessica Knappett (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Lolly Adefope, Lily Allen, Jessica Knappett (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '376',
    name: 'Five Guys',
    latitude: 51.505335,
    longitude: -0.080392,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Richard Osman, Matt Lucas and Michelle de Swarte (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Richard Osman, Matt Lucas, Michelle de Swarte (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '385',
    name: 'Sticks n\' Sushi',
    latitude: 51.5109888,
    longitude: -0.1235656,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Japanese',
    description: 'Traditional Japanese dining, recommended by Off Menu guests James Acaster, Joe Wicks and Sikisa (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster, Joe Wicks, Sikisa (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Off Menu Hosts", "Japanese"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '457',
    name: 'Forza Win',
    latitude: 51.4740885,
    longitude: -0.0901165,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests James Acaster, Jimi Famurewa and Paapa Essiedu.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster, Jimi Famurewa, Paapa Essiedu',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '477',
    name: 'Dean Street Townhouse',
    latitude: 51.5135286,
    longitude: -0.1326077,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests AJ Odudu, Katy Wix and Sebastian Stan.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'AJ Odudu, Katy Wix, Sebastian Stan',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '10',
    name: 'Hakkasan',
    latitude: 51.5103298,
    longitude: -0.145003,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Lolly Adefope.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Lolly Adefope, Dane Baptiste (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '21',
    name: 'Diner by Heston',
    latitude: 51.5022278,
    longitude: -0.1599573,
    address: 'Address TBD', // Address lookup required
    cuisine: 'American',
    description: 'American comfort food, recommended by Off Menu guests Jamie Demetriou and Dynamo.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jamie Demetriou, Dynamo',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["American"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '22',
    name: 'Silk Road',
    latitude: 51.4739743,
    longitude: -0.089268,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Jamie Demetriou and James Acaster.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jamie Demetriou, James Acaster',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '26',
    name: 'Hoppers',
    latitude: 51.5136165,
    longitude: -0.1316757,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Sian Clifford.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Sian Clifford, Aparna Nancherla (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '38',
    name: 'Dumpling\'s Legend',
    latitude: 51.5117831,
    longitude: -0.1314544,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine, recommended by Off Menu guests Ed Gamble and Rose Matafeo.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Rose Matafeo',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chinese", "Off Menu Hosts"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '42',
    name: 'Kudu',
    latitude: 51.473883,
    longitude: -0.0593214,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Joe Lycett and Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joe Lycett, Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '57',
    name: 'Kappacasein',
    latitude: 51.5049097,
    longitude: -0.0907641,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests David Cross and Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'David Cross, Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '58',
    name: 'Da Terra',
    latitude: 51.5304403,
    longitude: -0.0559752,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Gamble and Olga Koch.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Olga Koch',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '59',
    name: 'Babur',
    latitude: 51.4474331,
    longitude: -0.0419896,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Jessica Fostekew and Jimi Famurewa.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jessica Fostekew, Jimi Famurewa',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '66',
    name: 'Yard Sale Pizza',
    latitude: 51.5305764,
    longitude: -0.0724898,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Italian',
    description: 'Classic Italian dishes, recommended by Off Menu guest Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Self Esteem (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Italian"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '75',
    name: 'The Wolseley',
    latitude: 51.5074494,
    longitude: -0.1409403,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Martin Freeman and Stephen Graham.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Martin Freeman, Stephen Graham',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '87',
    name: 'The River Cafe',
    latitude: 51.4840122,
    longitude: -0.224212,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Cafe',
    description: 'Cafe and light meals, recommended by Off Menu guests Edgar Wright and Meera Sodha.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Edgar Wright, Meera Sodha',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Cafe"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '89',
    name: 'Panzer\'s',
    latitude: 51.533527,
    longitude: -0.1721997,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Miriam Margolyes and Matt Lucas.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Miriam Margolyes, Matt Lucas',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '100',
    name: 'The Quality Chop House',
    latitude: 51.5247785,
    longitude: -0.1100331,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Sheeran and Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Sheeran, Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '102',
    name: 'Bob Bob Ricard',
    latitude: 51.5123367,
    longitude: -0.1372579,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Alex Jones (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '110',
    name: 'BRAT',
    latitude: 51.5242109,
    longitude: -0.0766966,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Joseph Quinn and Paul Mescal.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joseph Quinn, Paul Mescal',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '116',
    name: 'The Ritz',
    latitude: 51.5070715,
    longitude: -0.1416344,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Sir Lenny Henry and Olga Koch.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Sir Lenny Henry, Olga Koch',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '123',
    name: 'Haidilao',
    latitude: 51.5103402,
    longitude: -0.1328537,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Gamble and Jamelia.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Jamelia',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '130',
    name: 'Rovi',
    latitude: 51.5176321,
    longitude: -0.138668,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed and James and Jason Mantzoukas.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James, Jason Mantzoukas',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '132',
    name: 'Cocotte',
    latitude: 51.5278323,
    longitude: -0.0818141,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed and James.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James, Paul Feig (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '134',
    name: 'Bubala',
    latitude: 51.5147825,
    longitude: -0.1369789,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Fern Brady.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Fern Brady, Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '135',
    name: 'The Dusty Knuckle',
    latitude: 51.5471766,
    longitude: -0.073813,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Yotam Ottolenghi and Derren brown.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Yotam Ottolenghi, Derren brown',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '387',
    name: 'Nobu',
    latitude: 51.5051624,
    longitude: -0.1501265,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Noah Schnapp and Joe Wicks (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Noah Schnapp, Joe Wicks (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '396',
    name: 'Wahaca',
    latitude: 51.510347,
    longitude: -0.124598,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed and James and Sikisa (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James, Sikisa (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '408',
    name: 'Zuma',
    latitude: 51.5009443,
    longitude: -0.1631579,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Joe Wicks and Dane Baptiste (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joe Wicks, Dane Baptiste (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '415',
    name: 'Pizza Hut',
    latitude: 51.5094275,
    longitude: -0.1234658,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Italian',
    description: 'Classic Italian dishes, recommended by Off Menu guests Ed Sheeran and Jamali Maddix (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Sheeran, Jamali Maddix (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Italian"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '417',
    name: 'TGI Friday\'s',
    latitude: 51.5101649,
    longitude: -0.1293742,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Sheeran and James Acaster (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Sheeran, James Acaster (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '419',
    name: 'Yo! Sushi',
    latitude: 51.5162229,
    longitude: -0.1764253,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Japanese',
    description: 'Traditional Japanese dining, recommended by Off Menu guests Nadiya Hussain and Ania Magliano (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Nadiya Hussain, Ania Magliano (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Japanese"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '420',
    name: 'burger King',
    latitude: 51.5109645,
    longitude: -0.1294447,
    address: 'Address TBD', // Address lookup required
    cuisine: 'American',
    description: 'American comfort food, recommended by Off Menu guests Kiri Pritchard-McLean and Rylan Clark (chain).',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Kiri Pritchard-McLean, Rylan Clark (chain)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["American"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '452',
    name: 'Bao',
    latitude: 51.5132615,
    longitude: -0.1365786,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Celya AB and Jimi Famurewa.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Celya AB, Jimi Famurewa',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '456',
    name: 'Speed Boat Bar',
    latitude: 51.5112228,
    longitude: -0.1326649,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Gamble and Nisha Katona.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Nisha Katona',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Bar", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '459',
    name: 'Mangel 2',
    latitude: 51.5508124,
    longitude: -0.0749504,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests Ed Gamble and Jimi Famurewa.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble, Jimi Famurewa',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '461',
    name: 'E5 Bakehouse',
    latitude: 51.5412122,
    longitude: -0.0577449,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests James Acaster and George Egg.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster, George Egg',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '486',
    name: 'Cafe Cecilia',
    latitude: 51.5345623,
    longitude: -0.0601168,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Cafe',
    description: 'Cafe and light meals, recommended by Off Menu guests James Acaster and Harris Dickinson.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster, Harris Dickinson',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Off Menu Hosts", "Cafe"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '2',
    name: 'Kerridge\'s Bar & Grill',
    latitude: 51.5067987,
    longitude: -0.1246762,
    address: 'Address TBD', // Address lookup required
    cuisine: 'American',
    description: 'American comfort food, recommended by Off Menu guest Ed and James.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["American", "Grill", "Bar"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '3',
    name: 'Oli Baba\'s, Kerb Camden',
    latitude: 51.5410793,
    longitude: -0.1463407,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Scroobius Pip.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Scroobius Pip',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '4',
    name: 'Trullo',
    latitude: 51.5463117,
    longitude: -0.1015664,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Grace Dent.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Grace Dent',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '5',
    name: 'Cora Pearl',
    latitude: 51.5112237,
    longitude: -0.1236394,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Richard Osman.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Richard Osman',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '6',
    name: 'Berner\'s Tavern',
    latitude: 51.5166878,
    longitude: -0.1361378,
    address: 'Address TBD', // Address lookup required
    cuisine: 'British',
    description: 'Traditional British fare, recommended by Off Menu guest Richard Osman.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Richard Osman',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["British"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '7',
    name: 'Burger and Lobster',
    latitude: 51.5135412,
    longitude: -0.1321964,
    address: 'Address TBD', // Address lookup required
    cuisine: 'American',
    description: 'American comfort food, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Aisling Bea (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["American", "Chain"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '8',
    name: 'Heen\'s Restaurant',
    latitude: 51.3592605,
    longitude: -0.1919498,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Lolly Adefope.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Lolly Adefope',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '9',
    name: 'Park Chinois',
    latitude: 51.5087627,
    longitude: -0.1435858,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine, recommended by Off Menu guest Lolly Adefope.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Lolly Adefope',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chinese"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '11',
    name: 'Yauatcha',
    latitude: 51.5136805,
    longitude: -0.1351463,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '12',
    name: 'Blues Kitchen',
    latitude: 51.5267054,
    longitude: -0.0801981,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Selasi Gbormittah (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '13',
    name: 'Ma Cuisine',
    latitude: 51.4777175,
    longitude: -0.2858788,
    address: 'Address TBD', // Address lookup required
    cuisine: 'French',
    description: 'French culinary excellence, recommended by Off Menu guest Krishnan Guru-Murthy.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Krishnan Guru-Murthy',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["French"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '14',
    name: 'My Neighbours the Dumplings',
    latitude: 51.538353,
    longitude: -0.0438771,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Josie Long (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chinese", "Chain"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '15',
    name: 'Ugly Dumpling',
    latitude: 51.5133569,
    longitude: -0.1383962,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chinese", "Chain"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '17',
    name: 'C&R Cafe',
    latitude: 51.5111943,
    longitude: -0.1323461,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Cafe',
    description: 'Cafe and light meals, recommended by Off Menu guest Phil Wang.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Phil Wang',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Cafe"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '18',
    name: 'Texas Joe\'s',
    latitude: 51.5022398,
    longitude: -0.0838003,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest James Acaster.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '19',
    name: 'LPM',
    latitude: 51.51262,
    longitude: -0.1462483,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Sindhu Vee (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '20',
    name: 'Pidgin',
    latitude: 51.5455628,
    longitude: -0.0611135,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Jamie Demetriou.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jamie Demetriou',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '23',
    name: 'Breddos Tacos',
    latitude: 51.5237961,
    longitude: -0.0986957,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Mexican',
    description: 'Mexican favorites, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Mexican", "Chain", "Off Menu Hosts"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '24',
    name: 'Sexy Fish',
    latitude: 51.5092865,
    longitude: -0.14435,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Seafood',
    description: 'Fresh seafood specialties, recommended by Off Menu guest Suzi Ruffell.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Suzi Ruffell',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Seafood"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '25',
    name: 'Padella',
    latitude: 51.5051588,
    longitude: -0.0899309,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Thai',
    description: 'Authentic Thai flavors, recommended by Off Menu guest Sian Clifford.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Sian Clifford',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Thai"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '27',
    name: 'Tao Tao Ju',
    latitude: 51.511523,
    longitude: -0.1306942,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest James Acaster.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '28',
    name: 'Man vs. Food',
    latitude: 51.48359,
    longitude: -0.3284299,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Jordan Banjo.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jordan Banjo',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '29',
    name: 'Paradise',
    latitude: 51.5554405,
    longitude: -0.1666165,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Serge Pizzorno.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Serge Pizzorno',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '30',
    name: 'Four Seasons Restaurant',
    latitude: 51.5119522,
    longitude: -0.1309637,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jay Rayner (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '31',
    name: 'Rules',
    latitude: 51.5108464,
    longitude: -0.1231738,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Jay Rayner.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jay Rayner',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '32',
    name: 'Maitre Choux',
    latitude: 51.5128079,
    longitude: -0.1320395,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Jay Rayner (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '33',
    name: 'Inko Nito',
    latitude: 51.5130649,
    longitude: -0.1372535,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '36',
    name: 'Art of Spices',
    latitude: 51.5464963,
    longitude: -0.0802722,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Indian',
    description: 'Flavorful Indian cuisine, recommended by Off Menu guest Sophie Duker.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Sophie Duker',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Indian"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '37',
    name: 'London Chinatown Restaurant',
    latitude: 51.5114198,
    longitude: -0.1316834,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Chinese',
    description: 'Authentic Chinese cuisine, recommended by Off Menu guest Daisy May Cooper.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Daisy May Cooper',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chinese"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '39',
    name: 'Din Tai Fung',
    latitude: 51.511249,
    longitude: -0.1231883,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '40',
    name: 'Chick n\' sours',
    latitude: 51.513662,
    longitude: -0.1281887,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Mike Skinner (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '41',
    name: 'Gauthier',
    latitude: 51.5127783,
    longitude: -0.1314826,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '43',
    name: 'Peckham Bazaar',
    latitude: 51.4677826,
    longitude: -0.0618733,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Joe Lycett.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joe Lycett',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '44',
    name: 'The Begging Bowl',
    latitude: 51.4673417,
    longitude: -0.0726331,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Joe Lycett.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joe Lycett',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '45',
    name: '40 Maltby St.',
    latitude: 51.4996368,
    longitude: -0.0760382,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Joe Lycett.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Joe Lycett',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '46',
    name: 'Berber and Q',
    latitude: 51.5369237,
    longitude: -0.0758077,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '47',
    name: 'KT Tandoori',
    latitude: 51.4880878,
    longitude: -0.1110652,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Indian',
    description: 'Flavorful Indian cuisine, recommended by Off Menu guest Greg Davies.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Greg Davies',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Indian"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '48',
    name: 'Beast',
    latitude: 51.5151226,
    longitude: -0.1471842,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed Gamble.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '49',
    name: 'Dinings SW3',
    latitude: 51.4960951,
    longitude: -0.1642749,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Emily V Gordon.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Emily V Gordon',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '50',
    name: 'Laylow',
    latitude: 51.5240015,
    longitude: -0.2062856,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Reggie Watts.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Reggie Watts',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '51',
    name: 'Crosstown Doughnuts',
    latitude: 51.5141055,
    longitude: -0.1346713,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Bakery',
    description: 'Fresh baked goods, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Romesh Ranganathan (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Chain", "Desserts", "Bakery"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '52',
    name: 'Doughnut Time',
    latitude: 51.5121944,
    longitude: -0.1311966,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Bakery',
    description: 'Fresh baked goods, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Chain", "Desserts", "Bakery"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '53',
    name: 'Kabab Kid',
    latitude: 51.4723845,
    longitude: -0.2028004,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed and James.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '54',
    name: 'Ciao Bella',
    latitude: 51.5230051,
    longitude: -0.1189551,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Diane Morgan.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Diane Morgan',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '55',
    name: 'The Union Club',
    latitude: 51.5038749,
    longitude: -0.0983765,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Diane Morgan.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Diane Morgan',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '56',
    name: 'Menier Chocolate Factory',
    latitude: 51.504658,
    longitude: -0.0943619,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Diane Morgan.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Diane Morgan',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '60',
    name: 'Kaffeine',
    latitude: 51.5184798,
    longitude: -0.1403922,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Todd Barry (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '61',
    name: 'Department of Coffee and Social Affairs',
    latitude: 51.5136355,
    longitude: -0.1389737,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Cafe',
    description: 'Cafe and light meals, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Off Menu Hosts", "Cafe", "Chain"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '63',
    name: 'Flavourtown Bakery',
    latitude: 51.4765217,
    longitude: -0.203853,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Bakery',
    description: 'Fresh baked goods, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed Gamble (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$' as const,
    tags: ["Off Menu Hosts", "Chain", "Desserts", "Bakery"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '64',
    name: 'Chin Chin Labs',
    latitude: 51.541454,
    longitude: -0.1463225,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest James Acaster.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '65',
    name: 'Bermondsey Larder',
    latitude: 51.4990147,
    longitude: -0.0795975,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest Ed and James.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'Ed and James',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '67',
    name: 'Alter',
    latitude: 51.514455,
    longitude: -0.0709038,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guest James Acaster.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Modern European"],
    rating: 4.5, // Placeholder rating
  },
  {
    id: '68',
    name: 'Kricket',
    latitude: 51.5108075,
    longitude: -0.1351528,
    address: 'Address TBD', // Address lookup required
    cuisine: 'Modern European',
    description: 'Contemporary European cuisine, recommended by Off Menu guests.',
    source: 'offmenu' as const,
    sourceDetails: {
      guestName: 'James Acaster (multiple locations)',
      episodeTitle: 'Off Menu episode',
    },
    priceRange: '$$' as const,
    tags: ["Off Menu Hosts", "Chain", "Modern European"],
    rating: 4.5, // Placeholder rating
  }
];

// For backwards compatibility
export const sampleRestaurants = offMenuRestaurants;
