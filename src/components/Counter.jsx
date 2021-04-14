import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }


    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })

        // this.setState( prevState => {
        //     return {
        //         count: prevState.count + 1
        //     }
        // })

        // console.log('a');

        // fetch('http://localhost:3001/api/v1/users')
        //     .then(resp => {
        //         console.log('b', resp);
        //         return resp.json();
        //     })
        //     .then(data => console.log('c', data))

        // for(let i = 0; i < 5000; i++) {
        //     console.log('d');
        // }

        // a, d, b, c
    }
    
    render() {
        return (
            <div>
                <button onClick={this.incrementCounter}>Click Me!</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Counter;