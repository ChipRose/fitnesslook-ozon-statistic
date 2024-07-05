import * as React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
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
    <TableHead>
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
    </TableHead>
  )
}

const ContentRow = ({ columns, data }) => {
  const subtitles = Object.entries(data[0]);
  console.log(subtitles);

  return (
    <TableRow>
      <TableCell variant='body' children={subtitles[1][0]} />
      {columns?.map((column, index) =>{ 
        return <TableCell variant='body' key={index} />
      })}
    </TableRow>
  )
}

const TableSale = ({
  data = [],
  headerData = []
}) => {
  console.log(data);
  return (
    <Table>
      <HeaderRow headerData={headerData} />
      <TableBody>
        <ContentRow columns={headerData} data={data} />
      </TableBody>
    </Table>
  )
};

export default TableSale;