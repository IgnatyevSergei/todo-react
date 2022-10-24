import React, {Component} from 'react';

class TodoListItem extends React.Component {


    render() {
        console.log(this.props)
        return(<span>
        <span>
            Name task
        </span>
        <button onClick={this.props.onRemove}>
            Delete
        </button>
    <button >
        Marker
    </button>
        </span>

        )
    }
}

// const TodoListItem = () => {
//
//     return (<span>
//         <span>
//             Name task
//         </span>
//         <button onClick={() => }>
//             Delete
//         </button>
//     <button onClick={() => }>
//         Checked
//     </button>
//         </span>
//     )
// }

export default TodoListItem