(function(module) {
  const projController = {};


  projController.index = function() {
    // portfolioView.initPage();
    $('.tab-content').hide();
    $('#about').show();
    $('#projects').show();

  }

  projController.portfolio = function() {
    portfolioView.initPage();
    $('.tab-content').hide();
    $('#projects').show();

  }
  projController.repo = function() {
    $('.tab-content').hide();
    $('#repo-section').show();

  }

  projController.about = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.projController = projController;
})(window);
