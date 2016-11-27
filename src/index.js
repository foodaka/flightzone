import React, {Component} from 'react';
import Welcome  from './containers/Welcome';
import { Provider } from 'react-redux';
import { store } from './store';
import Search from './containers/Search/index'
import Main from './containers/Main';


export class Root extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn:true
    }
  }

  userLogIn = () => {
    this.setState({
      loggedIn:true
    })
  }

  renderRoot(ComponentToRender){
    return(
      <Provider store={store}>
        <ComponentToRender style={{flex:1}} />
      </Provider>
    )
  }

  render(){
    const { loggedIn } = this.state;
    return loggedIn ? this.renderRoot(Main) : this.renderRoot(Welcome)
  }
}
