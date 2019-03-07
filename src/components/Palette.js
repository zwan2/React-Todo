import React, { Component } from 'react';
import './Palette.css';


class Palette extends Component {
    render() {
        const {colors, onToggle} = this.props;
        console.log(colors);

        const colorsList = colors.map(
            (color, index) => (
                <div className="color" style={{ background: color }} 
                    key={index}
                    onClick={() => onToggle(index)}>
                    
                </div>
            )
        )
        return (
            <div className="palette">
                {colorsList}
            </div>
        )
    }
}


export default Palette;