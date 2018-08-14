import React, { Component } from 'react';
import Fullscreen from "react-full-screen";
import Transition from 'react-transition-group/Transition';
import './App.css';

const words = [
  {word: 'airplane', image: 'images/airplane.jpg'},
  {word: 'apple', image: 'images/apple.jpg'},
  {word: 'apple sauce', image: 'images/apple_sauce.png'},
  {word: 'arm', image: 'images/arm.jpg'},
  {word: 'baby', image: 'images/baby.jpg'},
  {word: 'banana', image: 'images/banana.jpg'},
  {word: 'bath', image: 'images/bath.jpg'},
  {word: 'bed', image: 'images/bed.jpg'},
  {word: 'belly button', image: 'images/belly_button.jpg'},
  //{word: 'black', image: 'images/black.jpg'},
  {word: 'blanket', image: 'images/blanket.jpg'},
  //{word: 'blue', image: 'images/blue.jpg'},
  {word: 'boat', image: 'images/boat.jpg'},
  {word: 'book', image: 'images/book.webp'},
  {word: 'bus', image: 'images/bus.jpg'},
  {word: 'car', image: 'images/car.jpg'},
  {word: 'chair', image: 'images/chair.jpg'},
  {word: 'cheek', image: 'images/cheek.jpg'},
  {word: 'chin', image: 'images/chin.jpg'},
  {word: 'circle', image: 'images/circle.jpg'},
  {word: 'clock', image: 'images/clock.jpg'},
  //{word: 'couch', image: 'images/couch.jpg'},
  //{word: 'cow', image: 'images/cow.jpg'},
  //{word: 'cup', image: 'images/cup.jpg'},
  //{word: 'door', image: 'images/door.jpg'},
  //{word: 'dryer', image: 'images/dryer.jpg'},
  //{word: 'duck', image: 'images/duck.jpg'},
  //{word: 'ear', image: 'images/ear.jpg'},
  //{word: 'eye', image: 'images/eye.jpg'},
  //{word: 'eyebrow', image: 'images/eyebrow.jpg'},
  //{word: 'finger', image: 'images/finger.jpg'},
  //{word: 'flower', image: 'images/flower.jpg'},
  //{word: 'foot', image: 'images/foot.jpg'},
  //{word: 'fork', image: 'images/fork.jpg'},
  //{word: 'fridge', image: 'images/fridge.jpg'},
  //{word: 'go', image: 'images/go.jpg'},
  //{word: 'goodbye', image: 'images/goodbye.jpg'},
  //{word: 'grass', image: 'images/grass.jpg'},
  //{word: 'green', image: 'images/green.jpg'},
  //{word: 'hair', image: 'images/hair.jpg'},
  //{word: 'hand', image: 'images/hand.jpg'},
  //{word: 'happy', image: 'images/happy.jpg'},
  //{word: 'head', image: 'images/head.jpg'},
  //{word: 'hello', image: 'images/hello.jpg'},
  //{word: 'house', image: 'images/house.jpg'},
  //{word: 'knife', image: 'images/knife.jpg'},
  //{word: 'leg', image: 'images/leg.jpg'},
  //{word: 'light', image: 'images/light.jpg'},
  //{word: 'microwave', image: 'images/microwave.jpg'},
  //{word: 'milk', image: 'images/milk.jpg'},
  //{word: 'mirror', image: 'images/mirror.jpg'},
  //{word: 'moon', image: 'images/moon.jpg'},
  //{word: 'mouse', image: 'images/mouse.jpg'},
  //{word: 'mouth', image: 'images/mouth.jpg'},
  //{word: 'nose', image: 'images/nose.jpg'},
  //{word: 'orange', image: 'images/orange.jpg'},
  //{word: 'pacifier', image: 'images/pacifier.jpg'},
  //{word: 'pants', image: 'images/pants.jpg'},
  //{word: 'pear', image: 'images/pear.jpg'},
  //{word: 'penguin', image: 'images/penguin.jpg'},
  //{word: 'pepper', image: 'images/pepper.jpg'},
  //{word: 'pillow', image: 'images/pillow.jpg'},
  //{word: 'plate', image: 'images/plate.jpg'},
  //{word: 'potty', image: 'images/potty.jpg'},
  //{word: 'purple', image: 'images/purple.jpg'},
  //{word: 'quail', image: 'images/quail.jpg'},
  //{word: 'red', image: 'images/red.jpg'},
  //{word: 'sad', image: 'images/sad.jpg'},
  //{word: 'sheep', image: 'images/sheep.jpg'},
  //{word: 'shirt', image: 'images/shirt.jpg'},
  //{word: 'shoulder', image: 'images/shoulder.jpg'},
  //{word: 'shower', image: 'images/shower.jpg'},
  //{word: 'sink', image: 'images/sink.jpg'},
  //{word: 'sit down', image: 'images/sit_down.jpg'},
  //{word: 'sky', image: 'images/sky.jpg'},
  //{word: 'smoke detector', image: 'images/smoke_detector.jpg'},
  //{word: 'spoon', image: 'images/spoon.jpg'},
  //{word: 'square', image: 'images/square.jpg'},
  //{word: 'stand up', image: 'images/stand_up.jpg'},
  //{word: 'stop', image: 'images/stop.jpg'},
  //{word: 'sun', image: 'images/sun.jpg'},
  //{word: 'table', image: 'images/table.jpg'},
  //{word: 'toe', image: 'images/toe.jpg'},
  //{word: 'tomato', image: 'images/tomato.jpg'},
  //{word: 'train', image: 'images/train.jpg'},
  //{word: 'tree', image: 'images/tree.jpg'},
  //{word: 'triangle', image: 'images/triangle.jpg'},
  //{word: 'truck', image: 'images/truck.jpg'},
  //{word: 'washer', image: 'images/washer.jpg'},
  //{word: 'water', image: 'images/water.jpg'},
  //{word: 'wave', image: 'images/wave.jpg'},
  //{word: 'white', image: 'images/white.jpg'},
  //{word: 'yellow', image: 'images/yellow.jpg'},
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {showTitle: false, showWord: false, nextWord: null, nextImage: null, currentWord: null};
  }

  preloadNextWord() {
    const nextWord = words[Math.floor(Math.random() * words.length)];
    const nextImage = new Image();
    nextImage.src = nextWord.image;
    this.setState({
      nextWord: nextWord,
      nextImage: nextImage
    });
  }

  componentDidMount() {
    this.setState({showTitle: true})
    setTimeout(() => {
      this.setState({showTitle: false});
      setTimeout(() => this.setState({currentWord: this.state.nextWord, showWord: true}), 1000);
      this.preloadNextWord();
    }, 3000);
    this.preloadNextWord();
  }

  showNextImage() {
    if (this.state.currentWord) {
      this.setState({showWord: false});
      setTimeout(() => {
        this.setState({currentWord: this.state.nextWord, showWord: true});
        this.preloadNextWord();
      }, 1000);
    }
  }

  render() {

    const transitionStyles = {
      entering: {opacity: 0},
      entered: {opacity: 1},
      exiting: {opacity: 1},
      exited: {opacity: 0},
    };

    if (this.state.currentWord)
      console.log(this.state.currentWord.image);

    const wordStyle = {};
    if (this.state.currentWord)
    wordStyle.backgroundImage = 'url("' + this.state.currentWord.image + '")';

    return <Fullscreen enabled={true}>
      <main onClick={this.showNextImage.bind(this)}>
        <div className="container">
          <Transition in={this.state.showTitle} timeout={0}>
            {state => <div className="title" style={transitionStyles[state]}>FLASHPICS</div>}
          </Transition>
        </div>
        <div className="container">
          <Transition in={this.state.showWord} timeout={0}>
            {state => <div className="word" style={{...wordStyle, ...transitionStyles[state]}} />}
          </Transition>
        </div>
      </main>
    </Fullscreen>;

  }

}