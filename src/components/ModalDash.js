import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import axios from "axios";
import { useForm } from "react-hook-form";

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

const ModalDash = () => {
  const { register, handleSubmit, errors } = useForm();
  const url = "http://localhost:3001/v1/add_post";
  const onSubmit = data => {
    console.log(data);
    axios.post(url, data);
  };

  const classes = useStyles();
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <QuoteInput
              name="quote"
              ref={register}
              placeholder="The greatest quote ever..."
            />
            <p id="simple-modal-description">
              <SubmitInput
                name="social_handle"
                ref={register({ required: true })}
                placeholder="Linkedin URL or @Twitter"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </p>
            <SendQuote type="submit">Motivate!</SendQuote>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDash;
