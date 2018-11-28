import React, { Component } from 'react';

import Counter from './Counter'


class App extends Component {
  render() {
    return (
     <div>
       <Counter
          initialValue={3}
        />
     </div>
    );
  }
}

export default App;
