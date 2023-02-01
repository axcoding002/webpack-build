import _ from 'lodash';
import printMe from './print.js';
import Icon from './favicon.ico';
// import './style.css';
// import "./style.less";
// import "./style.scss";
import "./style.sass";
import blockHTML from "./block.html";

alert(blockHTML);

/*
import Data from './data.xml';
alert(Data);
import Notes from './data.csv';
alert(Notes);

// No warning
import data from './data.json';
// Warning shown, this is not allowed by the spec.
import { foo } from './data.json';

import toml from './data.toml';
alert(toml.title); // output `TOML Example`
alert(toml.owner.name); // output `Tom Preston-Werner`

import yaml from './data.yaml';
alert(yaml.title); // output `YAML Example`
alert(yaml.owner.name); // output `Tom Preston-Werner`

import json from './data.json5';
alert(json.title); // output `JSON5 Example`
alert(json.owner.name); // output `Tom Preston-Werner`
*/

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  
  myIcon.onclick = printMe;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());