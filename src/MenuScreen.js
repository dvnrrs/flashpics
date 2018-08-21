import React, { Component } from 'react';

import './MenuScreen.css';

import Activities from './images/activities.png';
import Animals from './images/animals.png';
import BodyAndClothes from './images/body_and_clothes.png';
import ColorsAndShapes from './images/colors_and_shapes.png';
import Everything from './images/everything.png';
import Food from './images/food.png';
import Household from './images/household.png';
import LettersAndNumbers from './images/letters_and_numbers.png';

export default class MenuScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {opacity: 0};
    }

    componentDidMount() {
        setTimeout(() => this.setState({opacity: 1}), 0);
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

        const style = {
            opacity: this.state.opacity,
            transition: 'opacity ' + (this.props.fade || 1000) + 'ms ease-in-out',
        };

        return (
            <div className="full-page menu-screen" style={style}>
                <div className="menu-screen-tile menu-screen-tile-r1 menu-screen-tile-c1">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + Activities + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['activities', 'vehicles'])}/>
                    <div className="menu-screen-tile-label">Activities</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r1 menu-screen-tile-c2">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + Animals + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['animals'])}/>
                    <div className="menu-screen-tile-label">Animals</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r1 menu-screen-tile-c3">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + BodyAndClothes + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['body', 'clothes'])}/>
                    <div className="menu-screen-tile-label">Body &amp; Clothes</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r2 menu-screen-tile-c1">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + ColorsAndShapes + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['colors', 'shapes'])}/>
                    <div className="menu-screen-tile-label">Colors &amp; Shapes</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r2 menu-screen-tile-c2">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + Food + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['eating', 'food'])}/>
                    <div className="menu-screen-tile-label">Food &amp; Eating</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r2 menu-screen-tile-c3">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + Household + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['household'])}/>
                    <div className="menu-screen-tile-label">Household</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r3 menu-screen-tile-c1">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + LettersAndNumbers + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['letters', 'numbers'])}/>
                    <div className="menu-screen-tile-label">Letters &amp; Numbers</div>
                </div>
                <div className="menu-screen-tile menu-screen-tile-r3 menu-screen-tile-c2">
                    <div className="menu-screen-tile-image"
                         style={{backgroundImage: 'url("' + Everything + '")'}}
                         onClick={this.onCategoriesSelected.bind(this, ['*'])}/>
                    <div className="menu-screen-tile-label">Everything</div>
                </div>
            </div>
        );

    }

}