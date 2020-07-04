import React from 'react';
import './Overview.css';

type OverviewProps = {
  message: string;
  msg2: string;
};

type OverviewState = {
  bankroll: number;
};

class Overview extends React.Component<OverviewProps, OverviewState> {

  state: OverviewState = {
    bankroll: 0,
  };


  
  render() {
    return (
      <div className="inv-main-area">
        {this.props.message}
        <div className="bank-roll-text">
          Bank roll: <div className='bank-roll'>{this.state.bankroll}</div>
        </div>
      </div>
    );
  }
}

export default Overview;
