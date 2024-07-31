import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Typography,
  Button,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import SearchIcon from "@mui/icons-material/Search";
import InsightsIcon from "@mui/icons-material/Insights";
import { TabTitle } from "../../../utils/generalFunction";
import { ROLES_NAME } from "../../../configs/constants";
import FeedbackCarousel from "../../../components/FeedbackCarousel";
import FilterJobPostCard from "../../components/defaults/FilterJobPostCard";
import FutureJobPredictions from "../../components/defaults/FutureJobPredictions";

export default function HomePage() {
  TabTitle("Tìm việc nhanh, tuyển dụng hiệu quả tại MyJob");
  const { isAuthenticated, currentUser } = useSelector((state) => state.user);
  const nav = useNavigate();

  return (
    <>
      <Box sx={{ mt: 10 }}>
        {/* Bắt đầu: Dự đoán việc làm tương lai */}
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                <InsightsIcon color="secondary" />
              </Avatar>
            }
            title={
              <Typography variant="h5" sx={{ color: "white" }}>
                Dự đoán nhu cầu việc làm
              </Typography>
            }
            sx={{
              backgroundColor: "#441da0",
              p: { xs: 0.75, sm: 1, md: 1.5, lg: 1.5, xl: 1.5 },
            }}
          />
          <CardContent>
            <FutureJobPredictions />
          </CardContent>
        </Card>
        {/* Kết thúc: Dự đoán việc làm tương lai */}
      </Box>

      {isAuthenticated && currentUser?.roleName === ROLES_NAME.JOB_SEEKER && (
        <Box sx={{ mt: 10 }}>
          {/* Start: Viec lam goi y */}
          <Card variant="outlined">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                  <TipsAndUpdatesIcon color="secondary" />
                </Avatar>
              }
              title={
                <Typography variant="h5" sx={{ color: "#441da0" }}>
                  Việc làm gợi ý
                </Typography>
              }
              sx={{
                backgroundImage: `url('${require("../../../assets/images/banner-explore.png")}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                p: { xs: 0.75, sm: 1, md: 1.5, lg: 1.5, xl: 1.5 },
              }}
            />
            <CardContent sx={{ backgroundColor: "#e0f0ff" }}>
              <Box sx={{ p: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 } }}>
                {/* Start: SuggestedJobPostCard */}
                {/* <SuggestedJobPostCard /> */}
                {/* End: SuggestedJobPostCard */}
                <FilterJobPostCard
                  params={{
                    isUrgent: true,
                  }}
                />
              </Box>
            </CardContent>
          </Card>
          {/* End: Viec lam goi y */}
        </Box>
      )}
      <Box sx={{ mt: 10 }}>
        {/*Start: Viec lam tuyen gap */}
        <Card variant="outlined">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "white" }} aria-label="recipe">
                <AccessTimeIcon color="secondary" />
              </Avatar>
            }
            title={
              <Typography variant="h5" sx={{ color: "white" }}>
                Việc làm tuyển gấp
              </Typography>
            }
            sx={{
              backgroundColor: "#441da0",
              p: { xs: 0.75, sm: 1, md: 1.5, lg: 1.5, xl: 1.5 },
            }}
          />
          <CardContent>
            <Box sx={{ p: { xs: 0, sm: 0, md: 0, lg: 2, xl: 2 } }}>
              <FilterJobPostCard
                params={{
                  isUrgent: true,
                }}
              />
            </Box>
          </CardContent>
        </Card>
        {/*End: Viec lam tuyen gap */}
      </Box>

      <Box
        sx={{
          borderRadius: 1,
          p: 4,
          mt: 6,
          backgroundImage: `url('${require("../../../assets/images/banner-explore-pc.png")}')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
            lg: "row",
            xl: "row",
          }}
          justifyContent="space-between"
          spacing={2}
        >
          <Box>
            <Typography fontSize={32} fontWeight="bold" color="white">
              Cần tìm việc làm phù hợp cho bạn?
            </Typography>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              onClick={() => nav("/viec-lam")}
            >
              Bắt đầu khám phá
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ mt: 10 }}>
        {/* Start: Feedback */}
        <Typography variant="h5" sx={{ mb: 3 }} gutterBottom>
          Người dùng đánh giá
        </Typography>
        <FeedbackCarousel />
        {/* End: Feedback */}
      </Box>
    </>
  );
}
