Package.describe({
  name: 'jeremybyu:mmodbus-reactview',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Creates a React view layer for Mmodus.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JeremyBYU/mmodbus-reactview.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jeremybyu:mmodbus');
  api.use('ecmascript@0.1.5');
  api.use('react');
  api.use('templating@1.1.4');
  api.use('reactrouter:react-router');
  api.addFiles('mmodbus-reactview.js');
  api.addFiles(['client/mmapp/mmapp.html', 'client/mmapp/mmapp.jsx']);
  api.addFiles(['client/routes.jsx']);
});

Package.onTest(function(api) {
  api.use('ecmascript@0.1.5');
  api.use('sanjo:jasmine@0.20.2');
  api.use('jeremybyu:mmodbus-reactview');

  api.addFiles('tests/mmodbus-reactview-tests.js');
});
