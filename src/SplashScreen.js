import React, { Component } from 'react';

import './SplashScreen.css';

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 0};
    }

    componentDidMount() {

        setTimeout(() => this.setState({opacity: 1}), 0);

        setTimeout(() => {
            this.setState({opacity: 0});
            setTimeout(() => {
                if (this.props.onFinished) {
                    this.props.onFinished();
                }
            }, this.props.fade || 500);
        }, (this.props.duration || 2500) - (this.props.fade || 500));

    }

    render() {

        const style = {
            opacity: this.state.opacity,
            transition: 'opacity ' + (this.props.fade || 500) + 'ms ease-in-out',
        };

        return (
            <div className="full-page splash-screen" style={style}>
                <div className="splash-screen-title">
                    FLASH<b>PICS</b>
                    <br/>
                    <small>VOCABULARY FOR ALEXANDER</small>
                </div>
            </div>
        );

    }

}