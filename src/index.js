import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marked: "",
      display: "full_screen",
      editor_view: "editor",
      minimizeText: "-"
    };
  }
  handleChange = e => {
    this.setState({
      marked: e.target.value
    });
  };
  minimize = () => {
    if (this.state.display === "full_screen") {
      this.setState({
        display: "minimised",
        editor_view: "hide_editor",
        minimizeText: "+"
      });
    } else {
      this.setState({
        display: "full_screen",
        editor_view: "editor",
        minimizeText: "-"
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="md">
          <p className={this.state.editor_view}>
            Editor
            <button onClick={this.minimize} className="button">
              {this.state.minimizeText}
            </button>
          </p>
          <textarea
            name="md"
            className={this.state.display}
            onKeyUp={e => this.handleChange(e)}
          />
        </div>
        <ReactMarkdown source={this.state.marked} className="content" />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
