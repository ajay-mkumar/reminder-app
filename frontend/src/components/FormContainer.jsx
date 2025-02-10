import { Box, Container } from "@mui/material";

const FormContainer = ({ children }) => {

    return (
        <Container maxWidth="xs" 
        sx={{
            height:"100vh",
            display: "justify",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#808080"
        }}>
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
                    {children}
                    </Box>
        </Container>

    );
}

export default FormContainer;