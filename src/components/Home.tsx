import * as React from 'react';
import styled from '@mui/material/styles/styled';
import Stacks from './Stacks';
import Outputs from './Outputs';

export default function Home() {
    return (
        <div>
            <h1>Masaki Sanada</h1>
            Portal to my projects
            <Stacks />
            <Outputs />
        </div>
    );
}
