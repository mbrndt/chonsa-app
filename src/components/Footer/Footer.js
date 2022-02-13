import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterElements";

const Footer = () => {
  return (
    <div className="empty-space">
      <Box>
        <Container>
          <Row id="first-row-footer">
            <Column></Column>
          </Row>
          <Row>
            <Column>icon icon icon icon</Column>
            <Column>2022 all rights reserved, chonsa</Column>
          </Row>
        </Container>
      </Box>
    </div>
  );
};
export default Footer;
