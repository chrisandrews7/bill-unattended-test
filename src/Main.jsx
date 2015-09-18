import React from 'react';
import Router from 'react-router';

import routes from './Routes';

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});
