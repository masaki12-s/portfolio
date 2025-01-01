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

function createEducationData(
    startdate: string,
    enddate: string,
    affiliation: string,
    content: string
) {
    return { startdate, enddate, affiliation, content };
}

const rows = [
    createEducationData('2015年 4月', '2020年 3月', '奈良工業高等専門学校', '情報工学科'),
    createEducationData('2020年 4月', '2022年 3月', '奈良工業高等専門学校 専攻科', '情報システムコース'),
    createEducationData('2022年 4月', '2024年 3月', '奈良先端科学技術大学院大学', '情報科学研究科 修士課程'),
];

export function EducationTableData() {
    return (
        <TableContainer sx={{ margin: 5, marginRight: 5 }} component={Paper}>
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

function createInternshipData(
    startdate: string,
    enddate: string,
    affiliation: string,
    content: string,
    job: string
) {
    return { startdate, enddate, affiliation, content, job };
}

const internshiprows = [
    createInternshipData('2022年 11月', '2022年 12月', '株式会社リクルート', 'SRE', 'KubeCostの検証'),
    createInternshipData('2023年 3月', '2023年 3月', '株式会社ヤプリ', 'SRE', 'Sentryのコンテナ化'),
];

export function InternshipTableData() {
    return (
        <TableContainer sx={{ maxWidth: 1, margin: 2 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>開始</StyledTableCell>
                        <StyledTableCell>終了</StyledTableCell>
                        <StyledTableCell>会社名</StyledTableCell>
                        <StyledTableCell>職種</StyledTableCell>
                        <StyledTableCell>業務内容</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {internshiprows.map((row) => (
                        <StyledTableRow key={row.startdate}>
                            <StyledTableCell component="th" scope="row">
                                {row.startdate}
                            </StyledTableCell>
                            <StyledTableCell>{row.enddate}</StyledTableCell>
                            <StyledTableCell>{row.affiliation}</StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                            <StyledTableCell>{row.job}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function createWorkExperienceData(
    startdate: string,
    enddate: string,
    affiliation: string,
    content: string,
    job: string
) {
    return { startdate, enddate, affiliation, content, job };
}

const workrows = [
    createWorkExperienceData('2024年 4月', '現在', '株式会社ヤプリ', 'SRE', ''),
];

export function WorkExperienceTableData() {
    return (
        <TableContainer sx={{ maxWidth: 1, margin: 2 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>開始</StyledTableCell>
                        <StyledTableCell>終了</StyledTableCell>
                        <StyledTableCell>会社名</StyledTableCell>
                        <StyledTableCell>職種</StyledTableCell>
                        <StyledTableCell>業務内容</StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {workrows.map((row) => (
                        <StyledTableRow key={row.startdate}>
                            <StyledTableCell component="th" scope="row">
                                {row.startdate}
                            </StyledTableCell>
                            <StyledTableCell>{row.enddate}</StyledTableCell>
                            <StyledTableCell>{row.affiliation}</StyledTableCell>
                            <StyledTableCell>{row.content}</StyledTableCell>
                            <StyledTableCell>{row.job}</StyledTableCell>
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
            これまで
            <h2>Education</h2>
            <EducationTableData />
            <h2>Internship</h2>
            <InternshipTableData />
            <h2>Work Experience</h2>
            <WorkExperienceTableData />
        </div>
    );
}