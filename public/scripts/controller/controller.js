(function(module) {
const projController = {};


projController.index = function() {
  // portfolioView.initPage();

  $('.tab-content').show();


}

projController.portfolio = function() {
  portfolioView.initPage();
  $('.tab-content').hide();
  $('#projects').show();

}

projController.about = function() {
  $('.tab-content').hide();
  $('#about').show();
}

 module.projController = projController;
})(window);
