import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import axios from '../axios';

/**
 * Global Error Handler
 *
 * @param {*} WrappedComponent
 * @returns
 */
const withErrorHandler = WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            };

            // Set Error null on Request
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });

            // Set Error on Response if any
            this.resInterceptors = axios.interceptors.response.use(
                res => res,
                error => {
                    this.setState({ error });
                }
            );
        }

        // Reject axios request on component unmount
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        // Remove error & Windos reload
        errorConfirmedHandler = () => {
            this.setState({ error: null });
            window.location.reload();
        };

        render() {
            return (
                <React.Fragment>
                    <Dialog
                        open={!!this.state.error}
                        onClose={this.handleClose}
                    >
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.state.error && this.state.error.message}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                onClick={this.errorConfirmedHandler}
                                color="primary"
                                autoFocus
                            >
                                Reload
                            </Button>
                        </DialogActions>
                    </Dialog>

                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    };
};

export default withErrorHandler;
