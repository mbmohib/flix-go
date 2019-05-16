import React, { Component } from 'react';
import { throttle } from 'lodash';

const withInfiniteLoading = WrappedComponent => {
    return class extends Component {
        state = {
            currentPage: 1
        };

        componentDidMount() {
            window.addEventListener(
                'scroll',
                throttle(this.listenToScroll, 1000, {
                    trailing: true,
                    leading: false
                })
            );
        }

        componentWillUnmount() {
            window.removeEventListener('scroll', this.listenToScroll);
        }

        /**
         * Change pagination if user scroll to
         * near end of the page
         *
         * @memberof withInfiniteLoading
         */
        listenToScroll = () => {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            // Get current scrolled position
            const scrolled = winScroll / height;

            // Check if user reach to near to end of the page
            if (scrolled > 0.8) {
                this.setState(prevState => {
                    return {
                        currentPage: prevState.currentPage + 1
                    };
                });
            }
        };

        render() {
            return <WrappedComponent {...this.props} {...this.state} />;
        }
    };
};

export default withInfiniteLoading;
