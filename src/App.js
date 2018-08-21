import React, { Component } from 'react';
import Fullscreen from "react-full-screen";

import CardPresenter from './CardPresenter';
import Library from './Library';
import MenuScreen from './MenuScreen';
import SplashScreen from './SplashScreen';

import BackIcon from './images/left_arrow.png';
import FullScreenIcon from './images/fullscreen.png';
import './App.css';

function getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {state: 'splash', full: false};
        const initialWord = getParameterByName('word');
        const initialWordObj = initialWord && Library.find(word => word.word === initialWord);
        if (initialWordObj) {
            this.state.state = 'cards';
            this.state.pool = [initialWordObj];
        }
    }

    onCategoriesSelected(categories) {
        const pool = [];
        Library.forEach(word => {
            let include = false;
            for (let i = 0; i < categories.length && !include; ++i) {
                if (categories[i] === '*') {
                    let j = 0;
                    for (j = 0; j < word.tags.length; ++j) {
                        if (word.tags[j] === 'letters' || word.tags[j] === 'numbers') {
                            break;
                        }
                    }
                    if (j === word.tags.length) {
                        include = true;
                    }
                }
                for (let j = 0; j < word.tags.length && !include; ++j) {
                    if (word.tags[j] === categories[i]) {
                        include = true;
                    }
                }
            }
            if (include) {
                pool.push(word);
            }
        });
        this.setState({state: 'cards', pool: pool})
    }

    onSplashScreenFinished() {
        this.setState({state: 'menu'});
    }

    goFull(e) {
        this.setState({full: true});
        e.stopPropagation();
    }

    goBack(e) {
        this.setState({state: 'menu', pool: null});
    }

    render() {
        return (
            <Fullscreen enabled={this.state.full}
                        onChange={full => this.setState({full: full})}>
                {this.state.state === 'splash' &&
                    <SplashScreen onFinished={this.onSplashScreenFinished.bind(this)} />}
                {this.state.state === 'menu' &&
                    <MenuScreen onCategoriesSelected={this.onCategoriesSelected.bind(this)} />}
                {this.state.state === 'cards' &&
                    <CardPresenter pool={this.state.pool} />}
                {!this.state.full &&
                    <div className="full-screen-icon"
                         style={{backgroundImage: 'url("' + FullScreenIcon + '")'}}
                         onClick={this.goFull.bind(this)} />}
                {this.state.state === 'cards' &&
                    <div className="back-icon"
                         style={{backgroundImage: 'url("' + BackIcon + '")'}}
                         onClick={this.goBack.bind(this)} />}
            </Fullscreen>
        );
    }

}