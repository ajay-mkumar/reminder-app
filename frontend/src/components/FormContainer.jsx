import {  Button, TextField, Typography } from "@mui/material";

const FormContainer = ({ handleChange, handleSubmit, loading }) => {

  return (

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
        {loading ? "loading.."  : "login"}
      </Button>
    </form>


  );
}

export default FormContainer;