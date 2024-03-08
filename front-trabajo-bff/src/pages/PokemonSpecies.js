import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "../components/Title";
import { Box } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";

function PokemonSpecies() {
    const [data, setData] = useState({ results: [] });

    useEffect(() => {
        (async () => {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/?limit=100");
            const parsed = await response.json();
            const results = parsed.results;
            const dataWithDetails = await Promise.all(results.map(async (item) => {
                const response = await fetch(item.url);
                const details = await response.json();
                return { ...item, ...details };
            }));
            setData({ results: dataWithDetails });
        })();
    }, []);

    return (
        <Box>
            <AppBarComponent/>
            <React.Fragment>
                <Title>Pokemon Species</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>URL</TableCell>
                            <TableCell>Gender Rate</TableCell>
                            <TableCell>Capture Rate</TableCell>
                            <TableCell>Is Baby</TableCell>
                            <TableCell>Is Legendary</TableCell>
                            <TableCell>Is Mythical</TableCell>
                            <TableCell>Has Gender Differences</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.results.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.url}</TableCell>
                            <TableCell>{item.gender_rate}</TableCell>
                            <TableCell>{item.capture_rate}</TableCell>
                            <TableCell>{item.is_baby ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{item.is_legendary ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{item.is_mythical ? 'Yes' : 'No'}</TableCell>
                            <TableCell>{item.has_gender_differences ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </Box>
    );
}
export default PokemonSpecies