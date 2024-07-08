import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';

// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';


const HeaderRow = ({ headerData }) => {
  return (
    <TableRow>
      {headerData?.map(({ label, id }) => (
        <TableCell
          variant='head'
          key={id}
          sx={{
            border: 1,
            borderColor: 'table.border'
          }}>
          <nobr>{label ? label : ''}</nobr>
        </TableCell>
      ))}
    </TableRow>
  )
}

const ContentRow = ({ columns, row }) => {
  // const metricsValue = Object.values(row.metrics);
  const metric = Object.keys(row.metric)[0];
  const periods = Object.values(row.metric)[0];

  const adapt = (id) => {
    const initValue = 0;
    const metricsArray = periods.map(({ value }) => Number(value));
    const sumMetrics = metricsArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initValue,
    );

    const rezult = {
      productId: row.productId,
      metric,
      worst: Math.max(...metricsArray),
      best: Math.min(...metricsArray),
      average: Math.ceil(sumMetrics / metricsArray?.length)
    }

    return rezult[id]
  }

  const getColumnData = ({ id, nestedArray }) => {
    const item = nestedArray?.find((item) => item?.id === id);
    return item ? `${item.value}` : `${adapt(id)}`;
  }
  console.log(Math.max(...periods.map(({ value }) => Number(value))));

  return (
    <>
      <TableRow>
        {columns.map((column) => {
          return (
            <TableCell key={column.id} variant='body' colSpan={column.colSpan} sx={{
              border: 1,
              borderColor: 'table.border'
            }}>
              {getColumnData({ id: column.id, nestedArray: periods })}
            </TableCell>
          )
        })}
      </TableRow>
      <TableRow>
        {columns.map((column) => {
          return (
            <TableCell key={column.id} variant='body' sx={{
              border: 1,
              rowSpan:column.colSpan,
              borderColor: 'table.border'
            }}>
            </TableCell>
          )
        })}
      </TableRow>

    </>
  )
}

const TableSale = ({
  data = [],
  headerData = []
}) => {
  return (
    <Table size='small'>
      <TableHead>
        <HeaderRow headerData={headerData} />
      </TableHead>
      <TableBody>
        <ContentRow columns={headerData} row={data[0]} />
      </TableBody>
    </Table>
  )
};

export default TableSale;