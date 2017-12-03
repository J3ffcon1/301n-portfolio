(function(module){
var portfolioView = {};

portfolioView.initPage = function() {
  Portfolioproject.all.forEach(function(project){
    $('#projects').append(project.toHtml())
  });
};
})(window);
