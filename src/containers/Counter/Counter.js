import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from '../../store/actions/index';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddValueToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubValueToCounter}  />
                <hr />
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result => <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddValueToCounter: () => dispatch(actionCreators.add(5)),
        onSubValueToCounter: () => dispatch(actionCreators.sub(5)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);