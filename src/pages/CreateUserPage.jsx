import { Button, Container, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateUserPage() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [nameUser, setNameUser] = useState("");

    let navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:4000/api/newuser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: (Math.random() * 1000).toString(), name, surname, email, nameUser })
        });
        navigate("/")
    }

    return (
        <Container style={{ padding: "50px" }}>
            <FormGroup>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            <FormGroup style={{ marginTop: "10px" }}>
                <TextField id="outlined-basic" label="Surname" variant="outlined" onChange={(e) => setSurname(e.target.value)} />
            </FormGroup>
            <FormGroup style={{ marginTop: "10px" }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup style={{ marginTop: "10px" }}>
                <TextField id="outlined-basic" label="Name User" variant="outlined" onChange={(e) => setNameUser(e.target.value)} />
            </FormGroup>
            <FormGroup style={{ marginTop: "10px" }}>
                <Button variant="contained" onClick={handleClick}>Create User</Button>
            </FormGroup>
        </Container>
    );
}
