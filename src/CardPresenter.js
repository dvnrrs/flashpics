import React, { Component } from 'react';

import './CardPresenter.css';

export default class CardPresenter extends Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 0, pool: [], word: null, nextWord: null, nextImage: null};
    }

    nextWord() {

        let pool = this.state.pool;
        if (pool.length === 0) pool = this.props.pool.slice();

        if (pool.length > 0) {

            const i = Math.floor(Math.random() * pool.length);
            const word = pool[i];

            const image = new Image();
            image.src = word.image;

            pool = pool.slice();
            pool.splice(i, 1);

            this.setState({
                word: this.state.nextWord,
                nextWord: word,
                nextImage: image,
                pool: pool,
            });

        }

    }

    onClick() {
        if (this.state.opacity === 1) {
            this.setState({opacity: 0});
            setTimeout(() => {
                this.nextWord();
                this.setState({opacity: 1});
            }, this.props.fade || 1000);
        }
    }

    componentDidMount() {
        this.nextWord();
        setTimeout(() => {
            this.nextWord();
            this.setState({opacity: 1});
        }, 0);
    }

    onCategoriesSelected(categories) {
        if (this.state.opacity === 1) {
            this.setState({opacity: 0});
            setTimeout(() => {
                if (this.props.onCategoriesSelected) {
                    this.props.onCategoriesSelected(categories);
                }
            }, this.props.fade || 1000);
        }
    }

    render() {

        console.log(this.state);

        const styles = {
            opacity: this.state.opacity,
            transition: 'opacity ' + (this.props.fade || 1000) + 'ms ease-in-out',
        };

        if (this.state.word) {
            styles.backgroundColor = this.state.word.bg;
            styles.backgroundImage = 'url("' + this.state.word.image + '")';
        }

        return (
            <div className="full-page card" style={styles} onClick={this.onClick.bind(this)}>
                <div className="card-text">{this.state.word && this.state.word.word}</div>
            </div>
        );

    }

}