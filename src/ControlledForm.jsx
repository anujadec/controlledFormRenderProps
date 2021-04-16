import React from 'react'
import PropTypes from 'prop-types'

export default class ControlledForm extends React.Component {
  state = {
    fields: {},
    isComplete: false
  }
  static PropTypes = {
    fields: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
  }
  handleBlur = (e) => {}

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(({ fields }) => ({
      fields: {
        ...fields,
        [name]: { name, value }
      }
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.fields)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.render({
          ...this.state,
          handlers: {
            onBlur: this.handleBlur,
            onChange: this.handleChange
          }
        })}
      </form>
    )
  }
}
