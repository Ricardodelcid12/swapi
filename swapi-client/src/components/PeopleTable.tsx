import { useEffect, useState } from "react";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import {
  PeopleTableProps,
  createPeopleTableRows,
  peopleTableColumns,
} from "../utils/PeopleTableGenerator";

const PeopleTable = ({ people }: PeopleTableProps) => {
  const [peopleTableRows, setPeopleTableRows] = useState<GridRowsProp>();

  useEffect(() => {
    const rows = createPeopleTableRows({ people });
    setPeopleTableRows(rows);
  }, [people]);

  return (
    <div className="lg:mt-24 sm:mt-34 sm:md-34">
      {peopleTableRows && (
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid
            autoHeight
            rows={peopleTableRows}
            getRowId={(row) => row.name}
            columns={peopleTableColumns}
            disableRowSelectionOnClick
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "secondary.dark",
              "& .MuiDataGrid-cell:hover": {
                color: "secondary.main",
              },
              color: "white"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PeopleTable;
