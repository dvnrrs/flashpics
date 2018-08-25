import React, { Component } from 'react';

import './CardPresenter.css';

export default class Typing extends Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 0, word: null, entered: ''};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({opacity: 1});
        }, 0);
    }

    toUpperCase(str) {
        if (str == null) return null;
        return str.toUpperCase();
    }

    onTextChange(e) {
        const word = this.props.pool.find(w => this.toUpperCase(w.word) === this.toUpperCase(e.target.value.trim()));
        this.setState({word: word, entered: e.target.value});
    }

    render() {

        const styles = {
            opacity: this.state.opacity,
            transition: 'opacity ' + (this.props.fade || 1000) + 'ms ease-in-out',
        };

        const imageStyles = {};
        if (this.state.word) {
            if (this.state.word.image) {
                imageStyles.backgroundImage = 'url("' + this.state.word.image + '")';
            }
            styles.backgroundColor = this.state.word.bg || '#000000';
        }

        return (
            <div className="full-page card" style={styles}>
                <div className="card-image" style={imageStyles}></div>
                <div className="card-label" style={{backgroundColor: (this.state.word && this.state.word.bg) || '#000000'}}>
                    <input type="text" value={this.state.entered}
                            onChange={this.onTextChange.bind(this)} />
                </div>
            </div>
        );

    }

}