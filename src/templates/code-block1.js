import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CodeBlock({ language, value }) {
  if (!language) language = 'javascript';
  return (
    <SyntaxHighlighter language={language} style={atomOneLight}>
      {value}
    </SyntaxHighlighter>
  );
}

//Reference : https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093