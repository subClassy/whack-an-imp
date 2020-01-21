/**
 * @fileoverview
 * This is our main A-Frame application.
 * It defines the main A-Frame Scene which gets mounted root div.
 */

import { h, Component } from "preact";
import { Entity, Scene } from "aframe-react";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return <Scene></Scene>;
  }
}

export default Main;
