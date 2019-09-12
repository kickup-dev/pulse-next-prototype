import React from 'react';
import { asyncComponent } from 'react-async-component';

import ErrorComponent from '../../../../ErrorComponent';

const component = asyncComponent({
  resolve: () => new Promise(resolve =>
    require.ensure(
      [],
      (require) => {
        resolve(require('./Quill.js'));
      },
      'quillAsync',
    ),
  ),
  ErrorComponent: e => (<ErrorComponent error={e} />),
});

export default component;
