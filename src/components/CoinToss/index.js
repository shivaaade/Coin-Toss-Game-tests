// Write your code here

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickCoin = () => {
    const randomNum = Math.floor(Math.random() * 2)
    const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    this.setState(prevVal => {
      if (randomNum === 0) {
        return {
          count: prevVal.count + 1,
          heads: prevVal.heads + 1,
          tails: prevVal.tails,
          imgUrl: head,
        }
      }
      return {
        count: prevVal.count + 1,
        heads: prevVal.heads,
        tails: prevVal.tails + 1,
        imgUrl: tail,
      }
    })
  }

  render() {
    const {count, heads, tails, imgUrl} = this.state
    return (
      <div>
        <div>
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={imgUrl} />
          <button onClick={this.onClickCoin} type="button">
            Toss Coin
          </button>
          <p>Total:{count}</p>
          <p>Heads:{heads}</p>
          <p>Tails:{tails}</p>
        </div>
      </div>
    )
  }
}

export default CoinToss
