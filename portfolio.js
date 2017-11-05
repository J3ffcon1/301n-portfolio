
//constructor function, that needs data to pass through in order to fill it in. referring to a single project.
function Portfolioproject (project) {
  this.title = project.title;
  this.course = project.course;
  this.description = project.description;
};

Portfolioproject.prototype.toHtml = function () {
  var $articleTemplate = $('.template').clone().removeClass('template');
  $articleTemplate.find('h1').text(this.title);
  $articleTemplate.find('.course p').text(this.course);
  $articleTemplate.find('.description p').text(this.description);

  return $articleTemplate;
};

data.forEach(function (data){
     var newArticle = new Portfolioproject(data);
    $('#projects').append(newArticle.toHtml());
  });
