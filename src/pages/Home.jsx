import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  Modal,
  Typography,
  Box,
  TextField,
  Backdrop,
  Chip,
} from "@mui/material";
import * as React from "react";
import NavbarContent from "../components/navbar";

function Home() {
  return (
    <div>
      <NavbarContent>
        <Typography variant="h1">Home</Typography>
      </NavbarContent>
    </div>
  );
}

export default Home;
