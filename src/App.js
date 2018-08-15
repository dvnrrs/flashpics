import React, { Component } from 'react';
import Fullscreen from "react-full-screen";

import CardPresenter from './CardPresenter';
import Library from './Library';
import MenuScreen from './MenuScreen';
import SplashScreen from './SplashScreen';

import FullScreenIcon from './images/fullscreen.png';
import './App.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {state: 'splash', categories: null, full: false};
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
            </Fullscreen>
        );
    }

}