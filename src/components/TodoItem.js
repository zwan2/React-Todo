import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const {color, text, checked, id, onToggle, onRemove } = this.props;
        console.log(id);
        
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    // onToggle 실행 방지
                    e.stopPropagation();
                    onRemove(id)}    
                } >&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div style={{ color: color }}>{text}</div>
                </div>
                {
                    checked && ( < div className = "check-mark" > ✓ </div>)
                }
            </div>
        )
    }
}

export default TodoItem;