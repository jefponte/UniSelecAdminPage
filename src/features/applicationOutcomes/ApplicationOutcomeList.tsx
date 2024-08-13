import { Box, Typography } from "@mui/material";
import {
  useGetApplicationOutcomesQuery,
} from "./applicationOutcomeSlice";

import { GridFilterModel } from "@mui/x-data-grid";
import { useState } from "react";
import { ApplicationOutcomeTable } from "./components/ApplicationOutcomeTable";
interface PaginationModel {
  pageSize: number;
  page: number;
}

export const ApplicationOutcomeList = () => {
  const [options, setOptions] = useState({
    page: 1,
    search: "",
    perPage: 10,
    rowsPerPage: [10, 20, 30],
  });
  const { data, isFetching, error } = useGetApplicationOutcomesQuery(options);

  function setPaginationModel(paginateModel:{ page: number, pageSize: number }){
    setOptions({ ...options, page: paginateModel.page + 1, perPage: paginateModel.pageSize});
  }
  function handleFilterChange(filterModel: GridFilterModel) {

    if (!filterModel.quickFilterValues?.length) {
      return setOptions({ ...options, search: "" });
    }
    const search = filterModel.quickFilterValues.join(" ");
    setOptions({ ...options, search });
  }

  if (error) {
    return <Typography>Error fetching applicationOutcomes</Typography>;
  }

  return (
    <Box sx={{ mt: 0, mb: 0 }}>
      <ApplicationOutcomeTable
        applicationOutcomes={data}
        isFetching={isFetching}
      />
    </Box>
  );
};