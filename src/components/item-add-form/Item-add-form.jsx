import React, {Component} from "react";

class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const {label} = this.state
        this.props.onItemAdd(label)
        this.setState({
            label: ''
        })
    }


    render() {
        return <form
            className={'d-flex md-3'}
            onSubmit={this.onSubmit}
        >
            <input
                className={'form-control-sm'}
                type="text"
                value={this.state.label}
                onChange={this.onLabelChange}
            />
            <button className={'btn btn-secondary my-2 my-sm-0'}>Добавить задание</button>

        </form>
    }


}

export default ItemAddForm
