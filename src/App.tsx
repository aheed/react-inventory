import React from 'react';
import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import Item from './Item';
import {ItemModel} from './Item';
import {ItemProps} from './Item';



//////////////////////////
function getCurrentShareValue(shareName : string) : number
{
  return 42;
}
//////////////////////////



type MyProps = {
  message: string;
};

type MyState = {
  count: number;
  q: number;
  displayCurrency : string;
  items : ItemModel[];
};

class Hello extends React.Component<MyProps, MyState> {

  state: MyState = {
    count: 0,
    q : 34,
    displayCurrency : 'SEK',
    items : 
    [
      {itemType : 'Share', name : 'Disney', quantity : 147, valuePerUnit : 74, currency : 'USD'},
      {itemType : 'Share', name : 'Netflix', quantity : 565, valuePerUnit : 44, currency : 'USD'}
    ]
  };

  private buildItemProps = (index : number) : ItemProps => {return {model: this.state.items[index], onRemoveClick: this.handleRemoveClick};}

  private renderAllItemsAlt = () : JSX.Element[] => {
    return this.state.items.map((value, index) => <Item key={value.name} {...this.buildItemProps(index)}/> );
  };

  private handleRemoveClick = (name : string) : void => {
    let newItemsState = this.state.items.filter(item => item.name != name);
    this.setState({items : newItemsState});
  }


  render() {
    return (
      <div className="Inv-Main-Area">
        {this.props.message} {this.state.count}
        <Overview message='Some overview' msg2="hm"/>
        <Overview message='Second overview' msg2="hmmm"/>
        {this.renderAllItemsAlt()}
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello message="yoooz!"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
