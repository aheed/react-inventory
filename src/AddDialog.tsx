import React from 'react';
import {ItemModel} from './Item';
import './AddDialog.scss'


export type AddDialogProps = {
  onAddClick: (itemToAdd: ItemModel) => void;
};

/*type AddDialogState = {
  model: ItemModel;
};*/

class AddDialog extends React.Component<AddDialogProps, ItemModel> {

  state: ItemModel = {itemType : 'Share', name : '', quantity : 147, valuePerUnit : 74, currency : 'USD'};

  handleChangeName = (event : React.FormEvent<HTMLInputElement>) : void => {
    this.setState({
      name: event.currentTarget.value,
    });
  }

  submitForm = () => {
    this.setState({name: this.state.name.trim()}, 
        () => {this.props.onAddClick(this.state);
               this.setState({name: ''})} );
  }

  render() {
    return (
        <form>
        <label htmlFor="name">Name</label>
        <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChangeName}
            placeholder='Type share name'
            autoFocus
            />
        <label htmlFor="job">Job</label>
        <input
            type="text"
            name="job"
            id="job"
            />
        <input className="add-button" type="button" value="Add" onClick={this.submitForm} />
        </form>
    );
  }
}

export default AddDialog;
