import React from "react";
import Layout from "../Layout/Layout";
import {
  Box,
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TableBody,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },
        }}
      >
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua . Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Box>
      <Box
        sx={{
          margin: 3,
          width: 600,
          ml: 10,
          "@media(max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  9871236540(tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MarkEmailReadIcon sx={{ color: "skyblue", pt: 1 }} />
                  help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <WifiCalling3Icon sx={{ color: "green", pt: 1 }} />
                  1800-006-1800
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
