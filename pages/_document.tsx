import { Head, Html, Main, NextScript } from 'next/document';
import { Provider } from 'react-redux';
import { store } from '../store';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Provider store={store}>
          <Main />
          <NextScript />
        </Provider>
      </body>
    </Html>
  );
}
