import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './tables.css'

const TableComp = ({ tableRowData, tableColData }) => {
  return (
    <div className="tableMainContainer">
      <Table>
        <TableHead>
          <TableRow className="tableTopCellCont">
            {
              tableColData && tableColData.map((cell) =>
                <TableCell className="tableTopCell">{cell}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowData && tableRowData.map((row, i) => (
            <TableRow
            >
              {
                tableColData && tableColData.map((cell) =>
                  <TableCell className="tableBodyCell">
                    {row[cell]}
                  </TableCell>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TableComp
