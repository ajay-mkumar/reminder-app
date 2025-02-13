import { Box, Container, Grid, TextField, Typography } from "@mui/material"
import { useSelector } from "react-redux";

const UserScreen = () => {
    const { user } = useSelector((state) => state.auth);
 

    return (
        <Container sx={{ m: 3, p: 3 }}>
            <Box sx={{
                m: 2, p: 2, backgroundColor: "wheat", // Black background
                padding: 4,
                borderRadius: 2,
                boxShadow: 4,
                textAlign: "center",
            }}>
            <Typography variant="h3" sx={{ mb: 2, fontFamily: 'monospace' }}>User Details</Typography>
            <Grid>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                margin="normal"
                                />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="lasttName"
                                label="Last Name"
                                variant="outlined"
                                margin="normal"
                               />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                name="email"
                                label="email"
                                variant="outlined"
                                margin="normal" />
                        </Grid>
                    </Grid>
                </form>
            </Grid>
            </Box>
        </Container>
    )
}

export default UserScreen;