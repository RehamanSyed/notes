import { Fetcher } from "@/client";
import AuthLayout from "@/layout/AuthLayout";
import { Box, Button, Container, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";

const Login = () => {
  const [inpEmail, setInpEmail] = useState();
  const [inpPassword, setInpPassword] = useState();

  const { mutate, data } = useMutation(
    "userLogin",
    async ({ email, password }) => {
      console.log("password", email, password);
      const response = await axios.post("http://localhost:5000/api/login", {
        email: email,
        password: password,
      });

      return response;
    }
  );

  console.log("mutation", data?.data);
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({
      email: inpEmail,
      password: inpPassword,
    });
    // console.log(data);
  };

  // useEffect(() => {}, [inpEmail, inpPassword]);

  return (
    <Box>
      <Container maxWidth="30%">
        <form onSubmit={submitHandler}>
          <Stack spacing={6}>
            <Input
              type="text"
              placeholder="Email Address"
              onChange={(e) => setInpEmail(e.target.value)}
              size="lg"
            />
            <Input
              type="text"
              placeholder="Password"
              onChange={(e) => setInpPassword(e.target.value)}
              size="lg"
            />
            <Button
              type="submit"
              colorScheme="messenger"
              variant="solid"
              size="lg"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
