import React, { Component } from 'react';
import ArticleList from './ArticleList'
import articles from './../assets/data';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    reverted: false
  }

  UNSAFE_componentWillUnmount() {
    console.log('will mounting');
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
      isOpen: nextProps.defaultOpen
    })
  }

  UNSAFE_componentWillUpdate() {
    console.log('will update')
  }

  render() {
    return (
      <div className='container'>
        <div className='jumbotron mx-auto'>
          <h1 className='display-3'>
            Blog template
            <button className='btn' onClick={this.revert}>Revert</button>
          </h1>
        </div>
        <ArticleList articles = {this.state.reverted ? articles.reverse() : articles} />
      </div>
    )
  }

  revert = () => this.setState({
      reverted: !this.state.reverted
    })
}

export default App;
