import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import styled from "styled-components";

const StartModal = styled.button`
  color: #1b31ea;
  font-weight: 650;
  border: none;
  background: white;
  font-size: 18px;
  cursor: pointer;
`;

const QuoteInput = styled.input`
  width: 100%;
  height: 50%;
  font-size: 16px;
`;

const SubmitInput = styled.input`
  width: 60%;
  height: 60%;
  margin-left: 1rem;
  border-left: none;
  border-right: none;
  border-top: none;
`;

const SendQuote = styled.button`
  color: #1b31ea;
  font-weight: 650;
  border: none;
  background: white;
  font-size: 18px;
  cursor: pointer;
  width: 25%;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 450,
    height: 210,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function ModalDash() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      Have a quote you live by?
      <StartModal type="button" onClick={handleOpen}>
        Submit here to be featured
      </StartModal>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <QuoteInput placeholder="The greatest quote ever..." />
          <p id="simple-modal-description">
            From:
            <SubmitInput placeholder="Linkedin URL or @Twitter" />
          </p>
          <SendQuote>Motivate!</SendQuote>
        </div>
      </Modal>
    </div>
  );
}
