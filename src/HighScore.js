import React, {Component} from 'react';

class HightScore extends Component {
    render (){
        if (this.props.overTen) {
            return (<h2>Beat hight score of 10!
                        <button onClick={this.props.onReset}>reset</button>
                    </h2>
            )
        } else {
            return null;
        }
    }
}

export default HightScore;