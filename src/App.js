import React, { Component } from 'react';
import marked from 'marked';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdown
    };
  }

  previewMarkdown = () => {
    let { markdown } = this.state;
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      return `<a href="${href}" target="_blank" >${text}</a>`;
    };
    if (markdown === '') return { __html: '' };
    let markdownOptions = {
      renderer,
      breaks: true
    };
    return { __html: marked(markdown, markdownOptions) };
  };

  handleChange = ({ target: { value } }) => {
    this.setState({
      markdown: value
    });
  };
  render() {
    let { markdown } = this.state;
    return (
      <div className="container-fluid h-100 text-center">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <div className="row pt-2 containers">
          <div className="col-md-6">
            <h4>Editor</h4>
            <textarea
              id="editor"
              type="text"
              value={markdown}
              className="w-100 p-3"
              onChange={this.handleChange}
            />
          </div>
          <div className="col-md-6">
            <h4>Previewer</h4>
            <div
              id="preview"
              className="w-100 p-3"
              dangerouslySetInnerHTML={this.previewMarkdown()}
            />
          </div>
        </div>
      </div>
    );
  }
}

const markdown = `# How to be a great web developer!

## You want to be a great web developer?
### Follow these steps:

1. Choose a **Language & Framework**.
2. Learn _Programming Fundamentals_.
3. Data Structure & Algorithm [Basics].
4. Learn basics of _the Framework_.
5. Work on Small **_Assignments/Projects_**.
  - Some project ideas:
    - Simple To-do list
    - Simple Blog
    - Photo Gallery Web App
    - Resume Builder
    - Basic Project Management app
6. ~~Wasting too much time doing none sense~~.
  
Dabble with some code, \`<div>This is awesome</div>\`.

\`\`\`
// Write some amazing codes:

function devMastery(yourTime) {
  yourTime.forEach(hour => {
    return hardWork(hour)
  })
}
\`\`\`

Talk to [me](https://alewiahmed.github.io/) if you want, I'll be glad to go on this journey with you.
> "What one programmer can do in one month, two programmers can do in two months." - Fred Brooks!

![React Logo w/ Text](https://alewiahmed.github.io/static/media/react.8c509e7e.svg)
`;

export default App;
