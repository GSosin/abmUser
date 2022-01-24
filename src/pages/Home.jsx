import React from 'react';
import { Button, Container } from "@mui/material";
import Table from "../components/Table";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Container>
            <Link to={"/newUser"}>
                <Button variant="contained">new user</Button>
            </Link>
            <Table />
        </Container>
    );
}
