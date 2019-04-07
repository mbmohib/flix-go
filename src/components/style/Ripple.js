import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase';

const RippleStyle = withStyles({
    root: {
        width: '100%',
        height: '100%'
    }
})(ButtonBase);

const Ripple = props => (
    <RippleStyle component={props.component ? props.component : 'div'}>
        {props.children}
    </RippleStyle>
)

export default Ripple ;