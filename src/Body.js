import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 200,

    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 200,

    },
    {
        field: 'age',
        headerName: 'Age',
        width: 150,

    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 300,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 180,
        renderCell: (params) => {
            const onClick = (e) => {
                const currentRow = params.row;
                return alert(JSON.stringify(currentRow, null, 4));
            };

            const onDelete = (e) => {
                const currentRow = params.row;
                return alert(`Delete ID => ${currentRow.id}`);
            };

            return (
                <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={onClick}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={onDelete}>Delete</Button>
                </Stack>
            );
        }
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 24 },
    { id: 6, lastName: 'Melisandre', firstName: "Chacha", age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Body() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                checkboxSelection
                pageSizeOptions={[5, 10, 25]}
                disableRowSelectionOnClick
            />
        </Box>
    );
}
