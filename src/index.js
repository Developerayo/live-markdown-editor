import React from 'react'
import ReactDOM from "react-dom"
import "./index.css"
import Remarkable from "remarkable"
class LiveMarkdown extends React.Component
{

  constructor (props)
  {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: "",
    }
  }

  handleChange (e)
  {
    this.setState({
      value: e.target.value,
    })
  }

  getRawMarkup ()
  {
    const md = new Remarkable()
    return { __html: md.render(this.state.value) }
  }

  render ()
  {
    return (
        <div className="container">
          <div className="input">
            <h3>Your Markdown here</h3>
            <textarea
              className="input-text"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            />
          </div>
          <div className="output">
            <h3>Output</h3>
            <div
              style={{ color: `black` }}
              dangerouslySetInnerHTML={this.getRawMarkup()}
              className="output-text"
            />
          </div>
        </div>
    );
  };
};

// ========================================

ReactDOM.render(<LiveMarkdown />, document.getElementById("root"))