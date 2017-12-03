(function(module) {
  const repoView = {};

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {

    $('#repo-section').append(
      repos.all.map(render)

    );

  };

  module.repoView = repoView;
})(window);
