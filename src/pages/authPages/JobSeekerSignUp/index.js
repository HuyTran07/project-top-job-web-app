import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  AlertTitle,
  Avatar,
  Box,
  Card,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { PLATFORM, ROLES_NAME } from "../../../configs/constants";

import { TabTitle } from "../../../utils/generalFunction";

import BackdropLoading from "../../../components/loading/BackdropLoading";
import errorHandling from "../../../utils/errorHandling";
import JobSeekerSignUpForm from "../../components/auths/JobSeekerSignUpForm";

import authService from "../../../services/authService";

import { updateVerifyEmail } from "../../../redux/authSlice";

const JobSeekerSignUp = () => {
  TabTitle("Đăng ký tài khoản Người tìm việc");

  const dispatch = useDispatch();
  const nav = useNavigate();
  const [errorMessage] = React.useState(null);
  const [isFullScreenLoading, setIsFullScreenLoading] = React.useState(false);
  const [serverErrors, setServerErrors] = React.useState({});

  const handleRegister = (data) => {
    const register = async (data, roleName) => {
      setIsFullScreenLoading(true);
      try {
        await authService.jobSeekerRegister(data);

        dispatch(
          updateVerifyEmail({
            isAllowVerifyEmail: true,
            email: data?.email,
            roleName: roleName,
          })
        );
        nav("/email-verification-required");
      } catch (error) {
        errorHandling(error, setServerErrors);
      } finally {
        setIsFullScreenLoading(false);
      }
    };

    register({ ...data, platform: PLATFORM }, ROLES_NAME.JOB_SEEKER);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: { xs: 2, sm: 4, md: 8, lg: 8, xl: 8 },
          p: 0,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card sx={{ p: { xs: 2, sm: 6, md: 6, lg: 6, xl: 6 }, pt: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Đăng ký tài khoản ứng viên
            </Typography>
          </Box>

          {errorMessage && (
            <Box>
              <Alert severity="error">
                <AlertTitle>Thất bại</AlertTitle>
                {errorMessage}
              </Alert>
            </Box>
          )}

          <Box sx={{ mt: { xs: 3, sm: 4, md: 4, lg: 4, xl: 4 } }}>
            {/* Start: login form */}
            <JobSeekerSignUpForm
              onRegister={handleRegister}
              serverErrors={serverErrors}
            />
            {/* End: login form */}
          </Box>
          <Grid container sx={{ mt: 3 }}>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                to="/dang-nhap-ung-vien"
                variant="body2"
                style={{ textDecoration: "none", color: "#441da0" }}
              >
                {"Đã có tài khoản? Đăng nhập"}
              </Link>
            </Grid>
          </Grid>
        </Card>
      </Container>

      {/* Start: full screen loading */}
      {isFullScreenLoading && <BackdropLoading />}
      {/* End: full screen loading */}
    </>
  );
};

export default JobSeekerSignUp;
