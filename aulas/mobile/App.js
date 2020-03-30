import React from 'react';
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Routes from './src/routes'

export default function App() {
  if (!__DEV__) {
    global.ErrorUtils.setGlobalHandler((error: Error, isFatal: boolean) => {
      // report the error that occurred and raise a modal if it was fatal
      reportError(error);
      if (isFatal) showErrorAlert(error);
    });
  }
  return (
    <Routes/>
  );
}