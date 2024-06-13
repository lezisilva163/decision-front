import { Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const listUsers = async () => {
            try {
                const response = await api.get('/users/list');
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        listUsers();
    }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <Typography component={"h2"} variant='h6' color={'primary'}>Usuários</Typography>
                <Button variant="contained" color="primary" href="/usuario/criar">Cadastrar</Button>
            </div>
            <div style={{ padding: '10px' }}>
                <Table size="small">
                    <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Data de Nascimento</TableCell>
                        <TableCell sx={{ fontWeight: 'bold' }}>Nome da mãe</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.birth_date}</TableCell>
                        <TableCell>{user.mother_name}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </div>
        </>
  );
}