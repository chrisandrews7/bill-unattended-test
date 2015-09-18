import React from 'react';
import { Route, RouteHandler, DefaultRoute } from 'react-router';

import MainScreen from 'components/screens/main/MainScreen';
import BillScreen from 'components/screens/bill/BillScreen';

const routes = (
	<Route handler={RouteHandler}>
		<Route handler={MainScreen}>
			<DefaultRoute name="bill" handler={BillScreen} />
		</Route>
	</Route>
);

export default routes;
