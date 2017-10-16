import React from 'react'
import ReactDOM from 'react-dom'

// Props Proxy demonstration

function PPHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      const props = Object.assign({}, this.props, {
        user: {
          name: 'Fran',
          email: 'franleplant@gmail.com'
        }
      })
      return <WrappedComponent {...props}/>
    }
  }
}


class Example extends React.Component {
  render() {
    return (
    
    )
  }
}

const EnhancedExample = PPHOC(Example)

ReactDOM.render(<EnhancedExample date={(new Date).toISOString()}/>, document.getElementById('root'))
