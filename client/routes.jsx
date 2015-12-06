//  Create Routes for Mmodbus tags

let appSection = FlowRouter.group({
  prefix: "/mmodbus"
});

appSection.route('/', {
  action: function() {
    ReactLayout.render(MmApp, {content: 'Test'});
  }
});
