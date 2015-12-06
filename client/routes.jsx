const pathHome = '/mmodbus';
const {Router, Route} = ReactRouter; // eslint-disable-line

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

Meteor.startup(function() {
  React.render((
    <Router history={history}>
      <Route path={pathHome} component={MmApp}>
      </Route>
    </Router>
  ), document.body);
});
