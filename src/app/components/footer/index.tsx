import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterElement from "./footer";

const Footers = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
   <>
   <FooterElement/>
   </>
  );
}
