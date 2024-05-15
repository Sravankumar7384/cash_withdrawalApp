import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const intialName = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="container">
          <div className="name-container">
            <p className="profile-container first-letter">{intialName}</p>
            <h1 className="name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{balance}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum"> CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationDetails={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
