import { Box, Typography } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";

function PaginaPrincipal() {
    return (
        <Box>
            <AppBarComponent/>
            <Typography variant="h1" gutterBottom>
                <br/>Welcome!
            </Typography>
            <Typography variant="h4" gutterBottom>
                This website uses 3 endpoints from the public API "https://pokeapi.co/":<br/>
                - pokemon-species<br/>
                - moves<br/>
                - berries<br/>
            </Typography>
        </Box>
    );
}
export default PaginaPrincipal