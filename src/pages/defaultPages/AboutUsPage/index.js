import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";

import { TabTitle } from "../../../utils/generalFunction";

const AboutUsPage = () => {
  TabTitle("Về chúng tôi - Hệ thống giới thiệu việc làm MyJob");

  return (
    <>
      <Box sx={{ my: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "#441da0" }}>
          Về chúng tôi
        </Typography>
        <Stack spacing={3}>
          <Box>
            <Typography>
              TopJob - Kênh thông tin tuyển dụng và việc làm dành cho ngành công
              nghệ thông tin.Chúng tôi tin tưởng sẽ đem lại “HY VỌNG” cho Doanh
              nghiệp tìm kiếm nhân tài và cho Ứng viên tìm kiếm cơ hội nghề
              nghiệp.Với hệ thống: Website dành cho Nhà Tuyển Dụng dành cho
              Người Tìm Việc, TopJob sẽ mang lại những trải nghiệm mới mẻ, thú
              vị; kết nối ước mơ chinh phục công việc của mọi nhân tài và giúp
              doanh nghiệp xây dựng đội ngũ nhân sự IT vững mạnh.
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ my: 3 }}>
        <Box sx={{ mt: 5 }}>
          <Card sx={{ p: 5 }}>
            <Stack
              direction={{
                xs: "column-reverse",
                sm: "column-reverse",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              spacing={2}
            >
              <Box>
                <Stack spacing={2}>
                  <Typography
                    variant="h4"
                    style={{ color: "#fca34d", fontSize: 30 }}
                  >
                    Tạo CV & Profile
                  </Typography>
                  <Typography textAlign="justify" color="#6D7681">
                    CV online và có thể tải lên cv đính kèm. Thuận tiện, nhanh
                    chóng, chuyên nghiệp và khác biệt. Tăng 80% tỉ lệ ứng tuyển
                    thành công.
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsPage;
