import React from 'react';
import styled from 'styled-components';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

import Nav from './Nav';
import Title from './style/Title';
import Container from './style/Container';

const SectionHeaderWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 10px;
    box-shadow: ${props => props.theme.largeShadow};
    background: ${props => props.theme.secondaryColor};
    border-top: 2px solid ${props => props.theme.primaryColor};
`;

const SelectMenu = withStyles({
    root: {
        color: '#ffffff'
    },
    icon: {
        fill: '#ffffff',
    },
})(Select)


const Label = withStyles({
    root: {
        color: '#ffffff',
    }
})(InputLabel)


const SectionHeader = props => (
    <SectionHeaderWrapper>
        <Container>
            <Grid container>
                <Grid item sm={8}>
                    <Title style={{ marginBottom: '20px' }} color="#ffffff" highWeight>
                        {props.title}
                    </Title>
                    <Nav position="center" navItems={props.navItems} />
                </Grid>
                <Grid item sm={4}>
                    <FormControl>
                        <Label htmlFor="age-helper">Sort</Label>

                        <SelectMenu
                            value={props.sortValue}
                            onChange={props.handleSortChange}
                            input={<Input name="age" id="age-helper" />}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="vote_average.desc">Rating</MenuItem>
                            <MenuItem value="revenue.desc">Grossing</MenuItem>
                        </SelectMenu>
                        <FormHelperText style={{ color: '#ffffff' }}>Sort Movies</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>

        </Container>
    </SectionHeaderWrapper>
);

export default SectionHeader;
