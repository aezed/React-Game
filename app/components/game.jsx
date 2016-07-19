import React from 'react';
import keys from '../constants/keys';
// import {gameTickSize} from '../constants/game'
import _ from 'lodash';

// import Grid from './Grid.jsx';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            paddlePosition: 1
        }
    }
    componentDidMount() {
        this.handleKeyDown();
    }
    handleKeyDown(e){
        window.addEventListener('keydown', (e)=>{
            var paddlePosition = _.clone(this.state.paddlePosition);
            var color = this.state.color;
            switch (e.keyCode){
                case keys.LEFT:
                    paddlePosition -= 0.05;
                    break;
                case keys.RIGHT:
                    paddlePosition -= 0.05;
                    break;
            }
            this.setState({paddlePosition});
        });
    }
    render(){
        return (
            <div>
                { this.state.paddlePosition }
            </div>
        )
    }

}