import { ToyReact, Component } from './ToyReact'

class Square extends Component{
    render(){
        return(
            <button className="square" onClick={()=>{
                alert('click')
            }}>
            {this.props.value}
          </button>
        )
    }
}
class Board extends Component {
    renderSquare(i) {
      return (
        <Square
          value={i}
          onClick={() => this.props.onClick(i)}
        ></Square>
      );
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

let b = <Board></Board>

ToyReact.render(b, document.body)