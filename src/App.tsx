// App.tsx
import * as React from "react";
import Frame, { FrameContextConsumer } from "react-frame-component";

const App = () => {
  return (
    <Frame>
      <FrameContextConsumer>
        {({ document, window }) => {
          return <div>Hello World!</div>;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default App;
