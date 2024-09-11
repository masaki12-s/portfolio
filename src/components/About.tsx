import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
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

function createData(
    startdate: string,
    enddate: string,
    affiliation: string,
    content: string
) {
    return { startdate, enddate, affiliation, content };
}

const rows = [
    createData('2015年 4月', '2020年 3月', '奈良工業高等専門学校', '情報工学科'),
    createData('2020年 4月', '2022年 3月', '奈良工業高等専門学校 専攻科', '情報システムコース'),
    createData('2022年 4月', '2024年 3月', '奈良先端科学技術大学院大学', '情報科学研究科 修士課程'),
];

export function TableData() {
    return (
        <TableContainer sx={{ maxWidth: 4/5 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>開始</StyledTableCell>
                        <StyledTableCell>終了</StyledTableCell>
                        <StyledTableCell>学校名</StyledTableCell>
                        <StyledTableCell>学科</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.startdate}>
                            <StyledTableCell component="th" scope="row">
                                {row.startdate}
                            </StyledTableCell>
                            <StyledTableCell>{row.enddate}</StyledTableCell>
                            <StyledTableCell>{row.affiliation}</StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default function About() {
    return (
        <div>
            <h1>Masaki Sanada</h1>
            Portal to my projects
            <TableData />
        </div>
    );
}