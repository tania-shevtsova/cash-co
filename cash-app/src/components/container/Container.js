import React from "react";
import Container from "@material-ui/core/Container";

const ContainerComponent = (props) => {
  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: "red" }}
      disableGutters={true}
    >
      {props.children}
    </Container>
  );
};

export default ContainerComponent;
