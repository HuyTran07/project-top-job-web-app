import React from "react";
import { Box, Grid } from "@mui/material";

import { TabTitle } from "../../../utils/generalFunction";
import JobPostSearch from "../../components/defaults/JobPostSearch";
import MainJobPostCard from "../../components/defaults/MainJobPostCard";

const JobPage = () => {
  TabTitle("Kết quả tìm kiếm tin tuyển dụng");

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Box>
          {/* Start: JobPostSearch */}
          <JobPostSearch />
          {/* End: JobPostSearch */}
        </Box>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
              {/* Start: MainJobPostCard */}
              <MainJobPostCard />
              {/* End: MainJobPostCard */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default JobPage;
