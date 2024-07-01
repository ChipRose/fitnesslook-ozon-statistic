import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso, TableComponents } from 'react-virtuoso';


export default function ReactVirtualizedTable() {
  const users = React.useMemo(() => {
    return Array.from({ length: 1000 }, (_, index) => ({
      name: `User ${index}`,
      description: `Description for user ${index}`
    }))
  }, [])

  return (
    <div style={{ height: 400, overflow: 'hidden', resize: 'both', padding: '1em', border: '1px solid #ccc' }}>
      <TableVirtuoso
        style={{ height: '100%' }}
        data={users}
        fixedHeaderContent={() => (
          <tr>
            <th style={{ width: 150, background: 'white' }}>Name</th>
            <th style={{ background: 'white' }}>Description</th>
          </tr>
        )}
        itemContent={(index, user) => (
          <>
            <td style={{ width: 150 }}>{user.name}</td>
            <td>{user.description}</td>
          </>
        )}
      />
    </div>
  )
}
