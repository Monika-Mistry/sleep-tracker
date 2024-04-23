import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import { UserSleepRecord } from "../types/SleepRecord";
import { ChangeEvent, useMemo, useState } from "react";

type SleepRecordTableProps = {
  sleepRecords: UserSleepRecord[];
  onRowSelect: (record: UserSleepRecord) => void;
};

const SleepRecordTable = ({
  sleepRecords,
  onRowSelect,
}: SleepRecordTableProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - sleepRecords.length) : 0;

  const visibleRows = useMemo(
    () =>
      sleepRecords.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, sleepRecords]
  );

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table aria-label="sleep-record-table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Number of Sleep Records</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((record) => (
              <TableRow
                key={record.id}
                onClick={() => onRowSelect(record)}
                style={{ cursor: "pointer" }}
              >
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.gender}</TableCell>
                <TableCell>{record.sleepRecords}</TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sleepRecords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SleepRecordTable;
