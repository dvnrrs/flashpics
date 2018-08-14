import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import Transition from 'react-transition-group/Transition';
import './App.css';

import fullScreenIcon from './fullscreen.png';

const WORDS = [
  {word: 'airplane', image: 'images/airplane.jpg', bg: '#7ea4e5'},
  {word: 'apple', image: 'images/apple.jpg', bg: '#ffffff'},
  {word: 'apple sauce', image: 'images/apple_sauce.png', bg: '#ffffff'},
  {word: 'arm', image: 'images/arm.jpg', bg: '#ffffff'},
  {word: 'baby', image: 'images/baby.jpg', bg: '#ffffff'},
  {word: 'banana', image: 'images/banana.jpg', bg: '#9cc2c5'},
  {word: 'bath', image: 'images/bath.jpg', bg: '#c1aa8b'},
  {word: 'bed', image: 'images/bed.jpg', bg: '#ffffff'},
  {word: 'belly button', image: 'images/belly_button.jpg', bg: '#ffffff'},
  //{word: 'black', image: 'images/black.jpg', bg: '#000000'},
  {word: 'blanket', image: 'images/blanket.jpg', bg: '#e2e2e4'},
  //{word: 'blue', image: 'images/blue.jpg', bg: '#000000'},
  {word: 'boat', image: 'images/boat.jpg', bg: '#afacb2'},
  {word: 'book', image: 'images/book.webp', bg: '#606060'},
  {word: 'bowl', image: 'images/bowl.jpg', bg: '#ffffff'},
  {word: 'bubble', image: 'images/bubble.jpg', bg: '#000000'},
  {word: 'bus', image: 'images/bus.jpg', bg: '#ffffff'},
  {word: 'car', image: 'images/car.jpg', bg: '#ffffff'},
  {word: 'chair', image: 'images/chair.jpg', bg: '#ffffff'},
  {word: 'cheek', image: 'images/cheek.jpg', bg: '#ffffff'},
  {word: 'chin', image: 'images/chin.jpg', bg: '#ffffff'},
  {word: 'circle', image: 'images/circle.jpg', bg: '#000000'},
  {word: 'clock', image: 'images/clock.jpg', bg: '#ffffff'},
  {word: 'couch', image: 'images/couch.jpg', bg: '#ffffff'},
  {word: 'cow', image: 'images/cow.jpg', bg: '#7babff'},
  {word: 'cup', image: 'images/cup.jpg', bg: '#ffffff'},
  {word: 'dog', image: 'images/dog.jpg', bg: '#ffffff'},
  {word: 'door', image: 'images/door.jpg', bg: '#ffffff'},
  //{word: 'dryer', image: 'images/dryer.jpg', bg: '#000000'},
  {word: 'duck', image: 'images/duck.jpg', bg: '#ffffff'},
  {word: 'ear', image: 'images/ear.webp', bg: '#000000'},
  {word: 'eye', image: 'images/eye.jpg', bg: '#f9b593'},
  {word: 'eyebrow', image: 'images/eyebrow.jpg', bg: '#edbb96'},
  {word: 'finger', image: 'images/finger.jpeg', bg: '#ffffff'},
  {word: 'fish', image: 'images/fish.png', bg: '#ffffff'},
  {word: 'flower', image: 'images/flower.jpg', bg: '#405423'},
  {word: 'foot', image: 'images/foot.jpg', bg: '#ffffff'},
  {word: 'fork', image: 'images/fork.jpg', bg: '#ffffff'},
  {word: 'fridge', image: 'images/fridge.jpg', bg: '#000000'},
  {word: 'go', image: 'images/go.png', bg: '#000000'},
  //{word: 'goodbye', image: 'images/goodbye.jpg', bg: '#000000'},
  {word: 'grass', image: 'images/grass.jpg', bg: '#305312'},
  //{word: 'green', image: 'images/green.jpg', bg: '#000000'},
  {word: 'hair', image: 'images/hair.jpg', bg: '#8d9da0'},
  {word: 'hand', image: 'images/hand.jpg', bg: '#ffffff'},
  //{word: 'happy', image: 'images/happy.jpg', bg: '#000000'},
  //{word: 'head', image: 'images/head.jpg', bg: '#000000'},
  //{word: 'hello', image: 'images/hello.jpg', bg: '#000000'},
  {word: 'house', image: 'images/house.webp', bg: '#c1b9d9'},
  {word: 'knife', image: 'images/knife.jpg', bg: '#ffffff'},
  {word: 'leg', image: 'images/leg.jpg', bg: '#ffffff'},
  {word: 'light', image: 'images/light.jpg', bg: '#a7a7a9'},
  {word: 'microwave', image: 'images/microwave.jpeg', bg: '#ffffff'},
  {word: 'milk', image: 'images/milk.jpg', bg: '#bebebe'},
  {word: 'mirror', image: 'images/mirror.jpg', bg: '#808080'},
  {word: 'moon', image: 'images/moon.jpg', bg: '#303c5c'},
  {word: 'mouse', image: 'images/mouse.jpg', bg: '#ffffff'},
  {word: 'mouth', image: 'images/mouth.jpg', bg: '#f6d1be'},
  {word: 'nose', image: 'images/nose.webp', bg: '#fedfd0'},
  //{word: 'orange', image: 'images/orange.jpg', bg: '#000000'},
  {word: 'pacifier', image: 'images/pacifier.jpg', bg: '#ffffff'},
  {word: 'pants', image: 'images/pants.jpg', bg: '#ffffff'},
  {word: 'pear', image: 'images/pear.jpg', bg: '#ffffff'},
  {word: 'penguin', image: 'images/penguin.jpg', bg: '#dae7f2'},
  {word: 'pepper', image: 'images/pepper.jpg', bg: '#ffffff'},
  {word: 'pillow', image: 'images/pillow.jpg', bg: '#ffffff'},
  {word: 'plate', image: 'images/plate.jpg', bg: '#ffffff'},
  {word: 'potty', image: 'images/potty.jpg', bg: '#ffffff'},
  //{word: 'purple', image: 'images/purple.jpg', bg: '#000000'},
  {word: 'quail', image: 'images/quail.jpg', bg: '#9b8a78'},
  //{word: 'red', image: 'images/red.jpg', bg: '#000000'},
  //{word: 'sad', image: 'images/sad.jpg', bg: '#000000'},
  {word: 'sheep', image: 'images/sheep.jpg', bg: '#204020'},
  {word: 'shirt', image: 'images/shirt.jpg', bg: '#000000'},
  {word: 'shoe', image: 'images/shoe.jpg', bg: '#ffffff'},
  {word: 'shoulder', image: 'images/shoulder.jpg', bg: '#ffffff'},
  {word: 'shower', image: 'images/shower.jpg', bg: '#919fb2'},
  {word: 'sink', image: 'images/sink.jpg', bg: '#666c7a'},
  {word: 'sit', image: 'images/sit.jpeg', bg: '#ffffff'},
  {word: 'sky', image: 'images/sky.jpg', bg: '#01599d'},
  {word: 'smoke detector', image: 'images/smoke_detector.jpg', bg: '#d5d7cc'},
  {word: 'spoon', image: 'images/spoon.jpg', bg: '#ffffff'},
  {word: 'square', image: 'images/square.png', bg: '#ffffff'},
  //{word: 'stand up', image: 'images/stand_up.jpg', bg: '#000000'},
  {word: 'stop', image: 'images/stop.jpg', bg: '#ffffff'},
  {word: 'sun', image: 'images/sun.jpeg', bg: '#d28002'},
  {word: 'table', image: 'images/table.jpg', bg: '#ffffff'},
  {word: 'toe', image: 'images/toe.jpg', bg: '#354f6d'},
  {word: 'tomato', image: 'images/tomato.jpg', bg: '#ffffff'},
  {word: 'train', image: 'images/train.jpg', bg: '#d0e1f1'},
  {word: 'tree', image: 'images/tree.jpg', bg: '#f7f7f7'},
  {word: 'triangle', image: 'images/triangle.png', bg: '#000000'},
  {word: 'truck', image: 'images/truck.jpeg', bg: '#606060'},
  //{word: 'washer', image: 'images/washer.jpg', bg: '#000000'},
  {word: 'water', image: 'images/water.jpg', bg: '#1463a1'},
  {word: 'wave', image: 'images/wave.jpg', bg: '#d0d0d8'},
  //{word: 'white', image: 'images/white.jpg', bg: '#000000'},
  //{word: 'yellow', image: 'images/yellow.jpg', bg: '#000000'},
];

function getParameterByName(name) {
  const url = window.location.href;
  name = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showTitle: false,
      showWord: false,
      nextWord: null,
      nextImage: null, 
      currentWord: null,
      words: WORDS.slice(),
      isFullScreen: false,
    };
    const initialWord = getParameterByName('word');
    const initialObj = WORDS.find(w => initialWord && w.word === initialWord);
    if (initialObj) {
      this.state.showWord = true;
      this.state.currentWord = initialObj;
      const i = Math.floor(Math.random() * this.state.words.length);
      this.state.nextWord = this.state.words[i];
      this.state.words = this.state.words.slice();
      this.state.words.splice(i, 1);
      if (this.state.words.length === 0) this.state.words = WORDS.slice();
    }
  }

  componentDidMount() {
    if (!this.state.showWord) {
      this.setState({showTitle: true})
      setTimeout(() => {
        this.setState({showTitle: false});
        setTimeout(() => {
          this.setState({currentWord: this.state.nextWord, showWord: true});
          this.preloadNextWord();
        }, 2000);
      }, 5000);
      this.preloadNextWord();
    }
  }

  preloadNextWord(direct) {
    const i = Math.floor(Math.random() * this.state.words.length);
    const nextWord = this.state.words[i];
    const nextImage = new Image();
    nextImage.src = nextWord.image;
    let words = this.state.words.slice();
    words.splice(i, 1);
    if (words.length === 0) words = WORDS.slice();
    this.setState({
      nextWord: nextWord,
      nextImage: nextImage,
      words: words,
    });
  }

  showNextImage() {
    if (this.state.showWord) {
      this.setState({showWord: false});
      setTimeout(() => {
        this.setState({currentWord: this.state.nextWord, showWord: true});
        this.preloadNextWord();
      }, 2000);
    }
  }

  goFullScreen(e) {
    this.setState({isFullScreen: true});
    e.stopPropagation();
  }

  render() {

    const transitionStyles = {
      entering: {opacity: 0},
      entered: {opacity: 1},
      exiting: {opacity: 1},
      exited: {opacity: 0},
    };

    const wordStyle = {};

    if (this.state.currentWord) {
      wordStyle.backgroundColor = this.state.currentWord.bg;
      wordStyle.backgroundImage = 'url("' + this.state.currentWord.image + '")';
    }
    else {
      wordStyle.backgroundColor = '#000000';
    }

    return <Fullscreen enabled={this.state.isFullScreen}
                       onChange={isFullScreen => this.setState({isFullScreen: isFullScreen})}>
      <main onClick={this.showNextImage.bind(this)}>
        <div className="container">
          <Transition in={this.state.showWord} timeout={0}>
            {state => <div className="word" style={{...wordStyle, ...transitionStyles[state]}}>
              <div className="text">{this.state.currentWord && this.state.currentWord.word}</div>
            </div>}
          </Transition>
        </div>
        <div className="container">
          <Transition in={this.state.showTitle} timeout={0}>
            {state => <div className="title" style={transitionStyles[state]}>FLASH<b>PICS</b><br/><small>VOCABULARY FOR ALEXANDER</small></div>}
          </Transition>
        </div>
        {!this.state.isFullScreen && <div className="full-screen-icon"
                                          style={{backgroundImage: 'url("' + fullScreenIcon + '")'}}
                                          onClick={this.goFullScreen.bind(this)} />}
      </main>
    </Fullscreen>;

  }

}