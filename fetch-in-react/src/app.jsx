import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: false
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) this.setState({ error: true });
        else return res.json();
      })
      .then(data => {
        if (data) this.setState({ users: data, isLoading: false });
      });
  }

  render() {
    if (this.state.error) {
      return <p>Something went wrong.</p>;
    }

    return this.state.isLoading ? (
      <p>Loading...</p>
    ) : (
      <UserList users={this.state.users} />
    );
  }
}

export default App;
