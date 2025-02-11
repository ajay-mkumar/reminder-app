import { Box, Button, Container, CssBaseline, TextField, Typography } from "@mui/material"
import FormContainer from "../components/FormContainer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    dispatch(loginUser({ email, password }))
  }

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

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
            <form onSubmit={handleSubmit}>
              <Typography variant="h5" color="white" mb={2}>
                Login
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                name="email"
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'lightgray' },
                  },
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                name="password"
                onChange={handleChange}
                InputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'lightgray' },
                  },
                }}
              />
              <Button variant="contained" type="submit" disabled={loading} color="primary" fullWidth sx={{ mt: 2 }}>
                {loading ? "loading.." : "login"}
              </Button>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default LoginScreen;