import {ToyReact} from './ToyReact'
let b = <span>hello</span>
let a = ToyReact.createElement('div',{id:'react'},b)
document.body.appendChild(a)