(function(module){
  var portfolioView = {};

  portfolioView.initPage = function() {
    PortfolioProject.all.forEach(function(project){
      $('#projects').append(project.toHtml())
    });
  };
  module.portfolioView = portfolioView;
})(window);
