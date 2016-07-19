import React from 'react';
import keys from '../constants/keys';
// import {gameTickSize} from '../constants/game'
import _ from 'lodash';
import Paddle from './paddle';

// import Grid from './Grid.jsx';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            paddle: {
                position: 1
            }
        }
    }
    componentDidMount() {
        this.handleKeyDown();
    }
    handleKeyDown(e){
        window.addEventListener('keydown', (e)=>{
            var paddle = _.clone(this.state.paddle);
            var color = this.state.color;
            switch (e.keyCode){
                case keys.LEFT:
                    paddle.position += 0.1;
                    break;
                case keys.RIGHT:
                    paddle.position -= 0.1;
                    break;
            }
            this.setState({ paddle });
        });
    }
    render(){
        return (
            <div>
                <svg width={500} height={500} style={{ 'border': '1px solid black' }}>
                    <Paddle paddlePosition={this.state.paddle.position} />
                </svg>
            </div>
        )
    }

}
