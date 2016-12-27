import  React from 'react';
import { connect } from 'react-redux'





// Action Creator
const increaseAction = { type: 'increase' }

class CaptchaDiv extends React.Component
{
    constructor(...args) {
        super(...args);
        // this.state = {i:0,};
        // this.handleClick = this.handleClick.bind(this);

    }
    
    // componentDidMount()
    // {
    //     store.subscribe(()=>{this.setState(store.getState())});
    // }

    // store.subscribe(()=>{this.setState(store.getState())});

    // handleClick=(e) => {
    //     console.log(this.state.i);
    //     this.setState({i:this.state.i+1});
    // }

    render()
    {
        const {value,onAddClick,onSubClick} = this.props;
        return(
           <div>
               <p>当前的值:{value}</p>
                <button type="button" onClick={onAddClick}>add</button>
                <button type="button" onClick={onSubClick}>sub</button>
           </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        value: state.i
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddClick: () => dispatch({ type: 'add' }),
        onSubClick: () => dispatch({ type: 'sub' }),
    }
}

const CaptchaApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(CaptchaDiv)

export default CaptchaApp;
