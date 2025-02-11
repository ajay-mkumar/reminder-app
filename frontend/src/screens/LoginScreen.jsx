import { Box, Button, Container, CssBaseline } from "@mui/material"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser, signupUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import SignupScreen from "./SignupScreen";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [signUpForm, setSignUpForm] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state);
  
  // const { loading1, user1, error1 } = useSelector((state) => state.register);

  const toggleForm = () => {
    setSignUpForm(!signUpForm);
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUpForm) {
      const { firstName, lastName, email, password, confirmPassword } = formData;

      dispatch(signupUser({ firstName, lastName, email, password, confirmPassword }));
    }

    if (!signUpForm) {
      
      console.log('mee')
      const { email, password } = formData;
      dispatch(loginUser({ email, password }))
    }
  }
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user,navigate]);

  return (
    <>
      <CssBaseline />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#808080",
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              backgroundColor: "#000", // Black background
              padding: 4,
              borderRadius: 2, 
              boxShadow: 3,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Button onClick={toggleForm}
             variant={signUpForm ? "contained" : "outlined"}
             sx={{
              display: 'flex',
              justifyContent: 'flex-end'
             }
             }>{!signUpForm ? 'sign up' : 'login'}</Button>
             {signUpForm ?
             
            <SignupScreen handleChange={handleChange} handleSubmit={handleSubmit} loading={loading} />
            :
            <FormContainer handleChange={handleChange} handleSubmit={handleSubmit} loading={loading}  />
             }
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LoginScreen;