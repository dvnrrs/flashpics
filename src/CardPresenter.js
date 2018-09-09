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

            let color = undefined;
            if (this.state.nextWord &&
                    !this.state.nextWord.image &&
                    !this.state.nextWord.bg) {
                const h = Math.floor(Math.random() * 360);
                const s = 50 + Math.floor(Math.random() * 50);
                const l = 30 + Math.floor(Math.random() * 40);
                color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
            }

            this.setState({
                word: this.state.nextWord,
                nextWord: word,
                nextImage: image,
                pool: pool,
                color: color,
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
            <div className="full-page card" style={styles} onClick={this.onClick.bind(this)}>
                <div className="card-image" style={imageStyles}></div>
                {this.state.word && (this.state.word.image || this.state.word.bg) &&
                    <div className="card-label" style={{backgroundColor: this.state.word.bg}}>
                        {this.state.word.word}
                    </div>}
                {this.state.word && !this.state.word.image && !this.state.word.bg &&
                    <div className="card-text" style={{color: this.state.color}}>
                        {this.state.word.word}
                        {this.state.word.word.match(/^[A-Za-z]$/) &&
                            <small>{this.state.word.word.toLowerCase()}</small>}
                    </div>}
            </div>
        );

    }

}