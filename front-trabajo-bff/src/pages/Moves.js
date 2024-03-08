import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "../components/Title";
import { Box } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";

function Moves() {
    const [data, setData] = useState({ results: [] });

    useEffect(() => {
        (async () => {
            const response = await fetch("https://pokeapi.co/api/v2/move/?limit=100");
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
                <Title>Moves</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>URL</TableCell>
                            <TableCell>Accuracy</TableCell>
                            <TableCell>Effect Chance</TableCell>
                            <TableCell>Power Points</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Power</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.results.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.url}</TableCell>
                            <TableCell>{item.accuracy}</TableCell>
                            <TableCell>{item.effect_chance}</TableCell>
                            <TableCell>{item.pp}</TableCell>
                            <TableCell>{item.priority}</TableCell>
                            <TableCell>{item.power}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </React.Fragment>
        </Box>
    );
}
export default Moves