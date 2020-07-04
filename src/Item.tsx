import React from 'react';
import './Item.css';

export type ItemModel = {
    itemType: string;
    name: string;
    quantity: number;
    valuePerUnit: number;
    currency: string;
  };

export type ItemProps = {
  model: ItemModel;
  onRemoveClick: (id: string) => void;
};

type ItemState = {
  dontcare: number;
};

class Item extends React.Component<ItemProps, ItemState> {

  state: ItemState = {
    dontcare: 0
  };

  private calcValue = () : number => this.props.model.quantity * this.props.model.valuePerUnit;

  render() {
    return (
      <div className="item">
        {this.props.model.name}
        <div className="item-type">{this.props.model.itemType}</div>
        <div className="quantity">{this.props.model.quantity}</div>
        <div className="price">{this.props.model.valuePerUnit}</div>
        <div className="value">{this.calcValue()}</div>
        <div className="currency">{this.props.model.currency}</div>
        <button className="remove-button" onClick={() => this.props.onRemoveClick(this.props.model.name)} >Remove</button>
      </div>
    );
  }
}

export default Item;
