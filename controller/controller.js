(function(module) {
const portController = {};
const aboutController = {};
const homeController = {};

homeController.index = function() {
  $('.tab-content').show();


}

portController.index = function() {
  portfolioView.initPage();
  $('.tab-content').hide();
  $('#projects').show();

}

aboutController.index = function() {
  $('.tab-content').hide();
  $('#about').show();
}
module.homeController = homeController;  
 module.portController = portController;
 module.aboutController = aboutController;
})(window);
