
//constructor function, that needs data to pass through in order to fill it in. referring to a single project.
function Portfolioproject (project) {
  this.title = project.title;
  this.course = project.course;
  this.description = project.description;
};
Portfolio.all = [];

Portfolioproject.prototype.toHtml = function () {
  var articleTemplate = $("#project-template").html();
  var theTemplate = Handlebars.compile(articleTemplate);
  // var $articleTemplate = $('.template').clone().removeClass('template');
  // $articleTemplate.find('h1').text(this.title);
  // $articleTemplate.find('.course p').text(this.course);
  // $articleTemplate.find('.description p').text(this.description);

  // return $articleTemplate;
  return theTemplate(this);
};

data.forEach(function (data){
     var newArticle = new Portfolioproject(data);
    $('#projects').append(newArticle.toHtml());
  });

  Portfolio.fetchAll =function () {
    if (localStorage.project) {
      Portfolioproject.loadAll(JSON.parse(localStorage.project));
      portfolioView.initPage();

    } else {
      console.log("localStorage does not exist");
      $getJSON("/data/portfolioJSON.json", function(data){
        localStorage.setItem ('project', JSON.stringify(data));
        Portfolioproject.loadAll(data);
        portfolioView.initPage();
      })
    }


  };
