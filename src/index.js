import React from 'react'
import { render } from 'react-dom'
import ControlledForm from './ControlledForm'
import './style.css'

const fields = {
  first: { value: '', reqired: true },
  last: { value: '', reqired: true },
  email: { value: '', reqired: true },
  favcolor: { value: '', reqired: false }
}
const App = () => (
  <ControlledForm
    fields={fields}
    onSubmit={(fields) => alert(JSON.stringify(fields, null, 2))}
    render={({ fields, handlers, isComplete }) => (
      <React.Fragment>
        <div>
          <label>First Name *</label>
          <input type="text" name="first" {...handlers} {...fields.first} />
        </div>
      </React.Fragment>
    )}
  />
)

render(<App />, document.getElementById('root'))
