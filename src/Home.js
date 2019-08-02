import React from 'react';
import Detail from './Detail'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: "Laboratorio" }
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({ title: "Aplicaciones de Vanguardia" })
  }

  render() {
    return (
      <div>
        <h1>{ this.state.title }<br></br></h1>
        <button onClick = { this.update }>Revert.</button>
        <Detail detailTitle = {this.title} detailValue = {2}/>
      </div>
    )
  }
}

export default Home
