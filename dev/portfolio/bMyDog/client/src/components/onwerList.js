
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';

// Table Components
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


const Owners = (props) => (
    <StyledTableRow className="w-full">
        <StyledTableCell>{props.record.name}</StyledTableCell>
        <StyledTableCell>{props.record.email}</StyledTableCell>
    </StyledTableRow >
);

export default function OwnersList() {
    const [owners, setOwners] = useState([]);

    // This method fetches the owners from the database.
    useEffect(() => {
        async function getOwners() {
            const response = await fetch(`http://localhost:5000/api/owners/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const owners = await response.json();
            setOwners(owners);
        }

        getOwners();

        return;
    }, [owners.length]);

    // This method will delete a record
    async function deleteRecord(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });

        const newRecords = owners.filter((el) => el._id !== id);
        setOwners(newRecords);
    }

    // This method will map out the owners on the table
    function ownersList() {
        return owners.map((record) => {
            return (
                <Owners
                    record={record}
                    deleteRecord={() => deleteRecord(record._id)}
                    key={record._id}
                />
            );
        });
    }

    // This following section will display the table with the owners of individuals.
    return (
        <div>

            <TableContainer component={Paper}>
                <TableBody>
                    {ownersList()}
                </TableBody>
            </TableContainer>

        </div>
    );
}