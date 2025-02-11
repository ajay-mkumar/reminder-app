import {  Button, TextField, Typography } from "@mui/material";

const FormContainer = ({ handleChange, handleSubmit, loading, signUpForm }) => {

  return (

    <form onSubmit={handleSubmit}>
      <Typography variant="h5" color="white" mb={2}>
        {signUpForm ? 'Sign Up' : 'Login'}
      </Typography>
      {signUpForm &&
        <>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="firstName"
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
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
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
        </>
      }
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
      {signUpForm &&
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="confirmPassword"
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
      }
      <Button variant="contained" type="submit" disabled={loading} color="primary" fullWidth sx={{ mt: 2 }}>
        {loading ? "loading.." : signUpForm ? 'Sign Up' : "login"}
      </Button>
    </form>


  );
}

export default FormContainer;