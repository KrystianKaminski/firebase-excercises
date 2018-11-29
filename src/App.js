import React, { Component } from 'react';

import Auth from './Auth'
import Chat from './Chat/Chat'


class App extends Component {


  render() {
    return (
     <div>
       <Auth>
         <Chat/>
        </Auth>
     </div>
    );
  }
}

export default App;
