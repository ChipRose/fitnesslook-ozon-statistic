import { getRandomNumber, getRandomUniQArray } from "../util/util";

const NAV = {
  NAV1: 'беговая дорожка',
  NAV2: 'беговая дорожка электрическая для дома',
  NAV3: 'беговая дорожка электрическая',
  NAV4: 'беговая дорожка для дома',
  NAV5: 'беговая дорожка складная для дома'
}

const treadmillsList = [
  { id: 0, name: 'owl', balance: 8 },
  { id: 1, name: 'snipe', balance: 117 },
  { id: 2, name: 'corvus', balance: 71 },
  { id: 3, name: 'harrier', balance: 20 },
  { id: 4, name: 'sirena', balance: 151 },
  { id: 5, name: 'ultima', balance: 34 },
  { id: 6, name: 'stellar', balance: 8 },
  { id: 7, name: 'ultima tft', balance: 9 },
  { id: 8, name: 'merlin a', balance: -2 },
  { id: 9, name: 'shrike', balance: 72 }
];

const getCalendar = (year, size = 10) => {
  const calendar = [];
  getRandomUniQArray(1, 30, size).map((num) => (
    calendar.push({
      date: new Date(year, getRandomNumber(1, 12), num),
      goal: getRandomNumber(8, 300),
      dif: getRandomNumber(-200, 1000)
    })
  ))
  return calendar
}

const getProductsList = (list, quantity) => {
  const indexes = getRandomUniQArray(0, list.length - 1, quantity);

  return indexes.map((index) => ({
    id: treadmillsList[index].id,
    main: {
      w: getRandomNumber(10, 2000),
      up: getRandomNumber() ? 'TR' : '',
      b: getRandomNumber(10, 500),
    },
    workZone: {
      kpi: [200, getRandomNumber(190, 200)],
    },
    calendar: getCalendar(2024)
  }))
}

const getNavs = () => {
  return Object.values(NAV).map((val) => (
    {
      nav: val,
      imps: getRandomNumber(10000, 20000),
      products: getProductsList(treadmillsList, getRandomNumber(1, treadmillsList.length - 1))
    }
  ))
}

export const navs = getNavs();

export const getNavsHeadCells = (days)=>([
  {
    id: 'nav',
    numeric: false,
    disablePadding: true,
    label: 'nav1',
  },
  {
    id: 'imps',
    numeric: true,
    disablePadding: false,
    label: 'IMPs',
  },
  {
    id: 'products',
    numeric: false,
    disablePadding: true,
    label: 'Products',
  },
  {
    id: 'id',
    numeric: true,
    disablePadding: true,
    label: 'FlID',
  },
  {
    id: 'w',
    numeric: true,
    disablePadding: true,
    label: 'W',
  },
  {
    id: 'up',
    numeric: false,
    disablePadding: true,
    label: 'UP',
  },
  {
    id: 'b',
    numeric: true,
    disablePadding: true,
    label: 'B',
  },
  {
    id: 'workZone',
    numeric: false,
    disablePadding: true,
    label: 'WORK ZONE',
    nested: [{
      id: 'kpi',
      label: 'KPi',
    }]
  },
  ...Array.from({length:days },()=>({
    id: 'calendar',
    numeric: false,
    disablePadding: true,
    label: '',
    nested: [
      {
        id: 'goal',
        numeric: true,
        label: 'Goal',
      },
      {
        id: 'dif',
        numeric: true,
        label: 'DIF',
      },
    ]
  }))
]);

console.log(getNavsHeadCells(5))
