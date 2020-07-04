import React from 'react';
import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import Item from './Item';
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
  items : ItemProps[];
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

  /*private buildItemProps = () : ItemProps => {return {itemType : 'Share', name : 'Disney', quantity : 147, valuePerUnit : 74, currency : 'USD'};}*/
  private buildItemProps = (index : number) : ItemProps => this.state.items[index];

  /*private renderAllItems = () : JSX.Element => {
    let ret : JSX.Element;
    {this.state.items.forEach(element => {
      <Item {...this.buildItemProps(1)} />  
    });}
  };*/

  private renderAllItems = () : JSX.Element => {
    let allItems = this.state.items.map((value, index) => <Item {...this.buildItemProps(index)}/> );
    return (
       <>
          {allItems}
       </>
    );
  };

  private renderAllItemsAlt = () : JSX.Element[] => {
    return this.state.items.map((value, index) => <Item {...this.buildItemProps(index)}/> );
  };

  private renderAllItemsAlt2 = () : JSX.Element[] => {
    let ret : JSX.Element[] = [];

    this.state.items.forEach( (item, index) => 
      {
        ret.push(<Item {...this.buildItemProps(index)}/>);
      }
    );

    return ret;
  };

  private renderItemsList = () : JSX.Element => {
    let listItemList : JSX.Element[] = this.state.items.map((value, index) => <li key={value.name} ><Item {...this.buildItemProps(index)}/></li> );
    return ( <ul>{listItemList}</ul> );
  };

  private renderAllItemsAlt3 = () : JSX.Element[] => {
    return this.state.items.map((value, index) => <Item key={value.name} {...this.buildItemProps(index)}/> );
  };

  render() {
    return (
      <div className="Inv-Main-Area">
        {this.props.message} {this.state.count}
        <Overview message='Some overview' msg2="hm"/>
        <Overview message='Second overview' msg2="hmmm"/>
{/*        Single item:
        <Item {...this.buildItemProps(0)} />
        Multiple items:
        {this.renderAllItems()}
        {this.renderAllItemsAlt()}
        {this.renderAllItemsAlt2()}
    {this.renderItemsList()} */}
        {this.renderAllItemsAlt3()}
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
