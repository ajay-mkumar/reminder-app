import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const UserScreen = () => {
    const { user, loading, error } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState(user);
    const dispacth = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispacth(updateUser(formData));

        if (!error) {
            navigate('/home');
        }
    }

    return (
        <Container sx={{ m: 3, p: 3 }}>
            {loading && <p>loading...</p>}
            <Box sx={{
                m: 2, p: 2, backgroundColor: "wheat", // Black background
                padding: 4,
                borderRadius: 2,
                boxShadow: 4,
                textAlign: "center",
            }}>
                {error && <p>error</p>}
                <Typography variant="h3" sx={{ mb: 2, fontFamily: 'monospace' }}>User Details</Typography>
                <Grid>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    name="firstName"
                                    label="First Name"
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="lastName"
                                    label="Last Name"
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="email"
                                    label="email"
                                    variant="outlined"
                                    margin="normal"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button type="submit" variant="contained">Update</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Box>
        </Container>
    )
}

export default UserScreen;