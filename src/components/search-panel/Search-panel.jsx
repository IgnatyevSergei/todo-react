import React from "react";

class SearchPanel extends React.Component {

    state = {
        search: ''
    }

    onChangeSearch = (e) => {
        this.setState({
            search: e.target.value
        })
        this.props.setSearchText(e.target.value)

    }

    render() {
        return (
            <input type="text"
                   value={this.state.search}
                   onChange={this.onChangeSearch}/>
        );
    }


}

export default SearchPanel
