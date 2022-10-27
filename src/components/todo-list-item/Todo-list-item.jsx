import React from 'react';
import "./todo-list-item.css"


class TodoListItem extends React.Component {
    state = {
        done: false,
        important: false
    }

    onToggleDone = () => {
        this.setState((state) => {
            return {
                done: !state.done

            }
        })
    }
    marker = () => {
        this.setState((state) => {
            return {important: !state.important}
        })
    }


    render() {
        const {done, important} = this.state

        let style = 'item'

        if(done) {
            style += ' done'
        }
        if(important) {
            style += ' important'
        }
        return (<span>
        <span className={style} onClick={this.onToggleDone}>
            {this.props.item}
        </span>
        <button onClick={this.props.onRemove}>
            Delete
        </button>
    <button onClick={this.marker}>
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