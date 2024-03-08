import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "../components/Title";
import { Box } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";

function Berries() {
    const [data, setData] = useState({ results: [] });

    useEffect(() => {
        (async () => {
            const response = await fetch("https://pokeapi.co/api/v2/berry/?limit=100");
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
                <Title>Berries</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Growth Time</TableCell>
                            <TableCell>Max Harvest</TableCell>
                            <TableCell>Natural Gift Power</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Smoothness</TableCell>
                            <TableCell>Soil Dryness</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.results.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.growth_time}</TableCell>
                            <TableCell>{item.max_harvest}</TableCell>
                            <TableCell>{item.natural_gift_power}</TableCell>
                            <TableCell>{item.size}</TableCell>
                            <TableCell>{item.smoothness}</TableCell>
                            <TableCell>{item.soil_dryness}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </Box>
    );
}
export default Berries