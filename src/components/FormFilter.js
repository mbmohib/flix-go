import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const SelectFilterMenu = styled(Select)`
    /* FIXME: props not passing */
    svg {
        color: ${props => props.white ? '#ffffff' : 'rgba(0, 0, 0, 0.54)'};
    }

    &:before {
        border-color: ${props => props.white ? '#ffffff' : 'rgba(0, 0, 0, 0.42)'};
    }
`;

const FilterFormControl = styled(FormControl)`
    width: 120px;
    margin-right: 30px !important;
`;

const FormFilter = props => (
    <FilterFormControl>
        <InputLabel
            htmlFor={props.title}
            style={props.white && { color: 'white' }}
        >
            {props.title}
        </InputLabel>
        <SelectFilterMenu
            style={props.white && { color: 'white' }}
            value={props.item}
            onChange={props.handleFilterChange}
            input={<Input id={props.title} />}
        >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {props.items &&
                props.items.map(genre => (
                    <MenuItem key={genre.id} value={genre.id}>
                        {genre.name}
                    </MenuItem>
                ))}
        </SelectFilterMenu>
    </FilterFormControl>
);

export default FormFilter;
