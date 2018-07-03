import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: markdown
    };
  }
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
            <textarea id="editor" className="w-100 p-3" value={markdown} />
          </div>
          <div className="col-md-6">
            <h4>Previewer</h4>
            <div id="preview" className="w-100 p-3">
              preview
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const markdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
