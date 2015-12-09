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

Npm.depends({
  'upper-case': '1.1.2',
  'fixed-data-table': '0.6.0'  // module exports a function
});


Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jeremybyu:mmodbus');
  api.use('ecmascript@0.1.5');
  api.use(['react-runtime', 'jsx', 'react-meteor-data']);
  api.use('templating@1.1.4');
  api.use(['cosmos:browserify@0.9.2'], 'client');
  api.use(['kadira:flow-router@2.10.0', 'kadira:react-layout@1.5.2']);
  // api.use('reactrouter:react-router');
  api.addFiles(['package.browserify.js', 'package.browserify.options.json', 'client/css/pure.css', 'client/css/grids-responsive.css'], 'client');  // browserify options file)
  api.addFiles('mmodbus-reactview.js');
  api.addFiles(['client/mmapp/mmapp.html', 'client/mmapp/mmapp.jsx', 'client/mmtaglist/mmtaglist.jsx', 'client/mmtag/mmtag.jsx'], 'client');
  api.addFiles(['client/routes.jsx'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript@0.1.5');
  api.use('sanjo:jasmine@0.20.2');
  api.use('jeremybyu:mmodbus-reactview');

  api.addFiles('tests/mmodbus-reactview-tests.js');
});
