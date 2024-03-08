import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from "../components/Title";
import { Box, TextField, Button } from "@mui/material";
import AppBarComponent from "../components/AppBarComponent";

function Moves() {
    const [data, setData] = useState({ results: [] });
    const [searchId, setSearchId] = useState("");
    const [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("https://localhost:8080/move");
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

    const handleSearch = async () => {
        if (searchId === "") {
            setSearchResult(null);
        } else {
            const item = data.results.find(item => item.id === parseInt(searchId));
            setSearchResult(item ? [item] : []);
        }
    };

    return (
        <Box>
            <AppBarComponent/>
            <React.Fragment>
                <Title>Moves</Title>
                <TextField label="ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
                <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
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
                    {(searchResult || data.results).map((item) => (
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