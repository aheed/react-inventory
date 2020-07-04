import React from 'react';
import './Item.css';

export type ItemProps = {
  itemType: string;
  name: string;
  quantity: number;
  valuePerUnit: number;
  currency: string;
  /*onRemoveClick: (id: string) => void;*/
};

export type ItemPropsStruct = {
    allProps: ItemProps
};

type ItemState = {
  dontcare: number;
};

class Item extends React.Component<ItemProps, ItemState> {

  state: ItemState = {
    dontcare: 0
  };

  private calcValue = () : number => this.props.quantity * this.props.valuePerUnit;

  render() {
    return (
      <div className="item">
        {this.props.name}
        <div className="item-type">{this.props.itemType}</div>
        <div className="quantity">{this.props.quantity}</div>
        <div className="price">{this.props.valuePerUnit}</div>
        <div className="value">{this.calcValue()}</div>
        <div className="currency">{this.props.currency}</div>
        {/*<button className="remove-button" onClick={() => this.props.onRemoveClick(this.props.name)} >Remove</button>*/}
      </div>
    );
  }
}

//export ItemProps;
export default Item;
