import React, { Component } from 'react';

class TestPage extends Component {
    state = {
        parcels: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/api/parcel/1000');
            const parcels = await res.json();
            this.setState({
                parcels
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.parcels.map(item => (
                    <div key={item.id}>
                        <h1>{item.worker_id}</h1>
                        <span>{item.num}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default TestPage;