import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className="antialiased font-open-sans scrollbar scrollbar-thumb-gray-800 scrollbar-thumb-rounded scrollbar-thin">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
