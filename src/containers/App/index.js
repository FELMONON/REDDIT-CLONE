import React, { Component } from 'react';
import { database } from '/firebase-config';

class App extends Component {
    constructor() {
        super();
        // Initialize state
        this.state = {
            posts: [],
            loading: true
        };
    }

    componentDidMount() {
        let postsRef = database.ref('posts');
        postsRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            this.setState({
                posts: snapshot.val(),
                loading: false
            });
        });
    }

    render() {
        return (
            <div className="App">
                {this.props.children && React.cloneElement(
                    this.props.children, {
                        firebaseRef: database.ref('posts'),
                        posts: this.state.posts,
                        loading: this.state.loading
                    }
                )}
            </div>
        );
    }
}

export default App;
