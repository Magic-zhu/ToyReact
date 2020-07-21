import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component{
    render() {
        return (<div>
            <span>hello</span>
            <span>word</span>
            <span>!!!</span>
        <div>{this.children}</div>
        </div>)
    }
}
let b = <MyComponent id='toy'>
    我是slot
</MyComponent>
ToyReact.render(b, document.body)