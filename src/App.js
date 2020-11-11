import { useState } from "react";
import marked from "marked";
import "./App.css";
import initialText from "./mardown-text";

function App() {
  const [text, setText] = useState(initialText);

  const markdownHTML = marked(text, { breaks: true });
  return (
    <>
      <h1 className="header">Markdown Previewer</h1>
      <div className="container">
        <div className="editor-pane">
          <h3>Enter your markdown here</h3>
          <textarea
            name="editor"
            id="editor"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div className="preview-pane">
          <h3>Here is your preview</h3>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdownHTML }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
