import Document, { Html, Head, Main, NextScript } from "next/document";

class MyComponent extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head/>
        <body>
        <div/>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyComponent;
