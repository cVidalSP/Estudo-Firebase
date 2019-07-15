import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@material-ui/core";
export const DataTable = ({data}) => {
    return <React.Fragment>
        {/* <Typography variant="headline" component="h2">Add New</Typography> */}
        <Table selectable={false}>
            <TableHead>
                <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>Endereço</TableCell>
                    <TableCell>Ocupação</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item, index) =>
                        <TableRow key={index}>
                            <TableCell>{item.key}</TableCell>
                            <TableCell>
                                {item.nome}
                            </TableCell>
                            <TableCell>{item.idade}</TableCell>
                            <TableCell>{item.endereco}</TableCell>
                            <TableCell>{item.ocupacao}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </React.Fragment>
};