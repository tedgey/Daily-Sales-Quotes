import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";

const EmailWrap = styled.div`
  font-size: 18px;
  width: 98%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  color: black;
  font-weight: 500;
  margin-top: 2rem;
  padding-bottom: 2rem;
  @media (max-width: 380px) {
    margin-top: 5rem;
  }
`;

const EmailBox = styled.div`
  display: flex;
  width: 60%;
  font-weight: 600;
  margin-bottom: 10px;
  flex-direction: column;
`;

const EmailInput = styled.input`
  width: 10rem;
  height: 20px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-color: grey;
  margin: 0px 8px 0px 8px;
`;

const EmailButton = styled.button`
  color: #1b31ea;
  width: 5rem;
  height: 25px;
  font-weight: 600;
  font-size: 24px;
  padding: 0px;
  margin: 0px;
  background: white;
  border-style: none;
  cursor: pointer;
`;

const EmailWrapper = () => {
  const { register, handleSubmit } = useForm();
  const url = "http://localhost:3001/v1/add_email_post";
  const onSubmit = data => {
    axios.post(url, data);
    alert("Thanks for signing up! You should receive our quotes soon!");
  };

  return (
    <>
      <EmailWrap>
        <EmailBox>
          Keep your team motivated and receive all of our +400 Sales Quotes
          today!
          <form onSubmit={handleSubmit(onSubmit)}>
            <EmailInput
              type="email"
              name="email"
              ref={register}
              placeholder="Email"
            />
            <EmailButton type="submit"> Submit! </EmailButton>
          </form>
        </EmailBox>
      </EmailWrap>
    </>
  );
};

export default EmailWrapper;
