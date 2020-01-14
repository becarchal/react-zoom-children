import React from 'react';
import '../../assets/code-block.less';

export default props => (
  <div className="highlight-text-html-basic">
    <pre className="prettyprint">
      { props.children }
    </pre>
  </div>
)
