import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows } from "./data";
import { columns } from "./data";
export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
    <DataGrid
    checkboxSelection
      slots={{
        toolbar: GridToolbar,
      }}
      rows={rows}
      columns={columns}
    />
  </Box>
  )
}
