import { getRandomNumber, getRandomUniQArray, formatDatesPeriod } from "../util/util";

const PRODUCT = {
  NAV1: '8',
  NAV2: '10',
  NAV3: '12',
  NAV4: '14',
  NAV5: '16'
};

const MONTH = {
  '1': 'JAN',
  '2': 'FEB',
  '3': 'MAR',
  '4': 'APR',
  '5': 'MAY',
  '6': 'JUN',
  '7': 'JUL',
  '8': 'AUG',
  '9': 'SEP',
  '10': 'OCT',
  '11': 'NOV',
  '12': 'DEC',
}

const productsList = [
  { id: 0, name: '8' },
  { id: 1, name: '10' },
  { id: 2, name: '12' },
  { id: 3, name: '14' },
  { id: 4, name: '16' }
];

const getPeriods = ({ year, month, day, count = 8 }) => {
  return Array.from({ length: count }, (_, i) => (
    [new Date(year, month, day + 7 * i), new Date(year, month, day + 6 + i * 7)]
  ));
};

const periods = getPeriods({ year: 2024, month: 7, day: 1 });


export const products = [{
  productId: 0,
  metric: {
      avPos: Array.from(periods, (v, i) => ({ id: `period-${i}`, value: getRandomNumber(0, 100) })),
    }
  // imps: Array.from(periods, (v, i) => ({ period: `period-${i}`, value: getRandomNumber(0, 100) })),
  // clicks: Array.from(periods, (v, i) => ({ period: `period-${i}`, value: getRandomNumber(0, 100) })),
}
]

export const getHeaderCells = () => {
  return ([
    {
      id: 'productId',
      dispay: false,
      label: '',
      rowSpan:2
    },
    {
      id: 'metric',
      dispay: false,
      nested: true,
      label: ''
    },
    {
      id: 'worst',
      label: 'WORST'
    },
    {
      id: 'best',
      label: 'BEST'
    },
    {
      id: 'average',
      label: 'AV'
    },
    ...Array.from([periods[0][0], periods[periods.length - 2][1]], (v, i) => ({
      id: MONTH[v.getMonth()],
      label: MONTH[v.getMonth()]
    })),
    ...Array.from(periods, (v, i) => ({
      id: `period-${i}`,
      label: formatDatesPeriod(v)
    }))
  ])
}

export const getNestedValues=({nestedRow, id})=>{
  return([
    nestedRow
  ])
}
// export const getNavsHeadCells = (days) => ([
//   {
//     id: 'nav',
//     numeric: false,
//     disablePadding: true,
//     label: 'nav1',
//   },
//   {
//     id: 'imps',
//     numeric: true,
//     disablePadding: false,
//     label: 'IMPs',
//   },
//   {
//     id: 'products',
//     numeric: false,
//     disablePadding: true,
//     label: 'Products',
//   },
//   {
//     id: 'id',
//     numeric: true,
//     disablePadding: true,
//     label: 'FlID',
//   },
//   {
//     id: 'w',
//     numeric: true,
//     disablePadding: true,
//     label: 'W',
//   },
//   {
//     id: 'up',
//     numeric: false,
//     disablePadding: true,
//     label: 'UP',
//   },
//   {
//     id: 'b',
//     numeric: true,
//     disablePadding: true,
//     label: 'B',
//   },
//   {
//     id: 'workZone',
//     numeric: false,
//     disablePadding: true,
//     label: 'WORK ZONE',
//     nested: [{
//       id: 'kpi',
//       label: 'KPi',
//     }]
//   },
//   ...Array.from({ length: days }, () => ({
//     id: 'calendar',
//     numeric: false,
//     disablePadding: true,
//     label: '',
//     nested: [
//       {
//         id: 'goal',
//         numeric: true,
//         label: 'Goal',
//       },
//       {
//         id: 'dif',
//         numeric: true,
//         label: 'DIF',
//       },
//     ]
//   }))
// ]);
