
//constructor function, that needs data to pass through in order to fill it in. referring to a single project.
function Portfolioproject (project) {
  this.title = project.title;
  this.course = project.course;
  this.description = project.description;
};
Portfolioproject.all = [];

Portfolioproject.prototype.toHtml = function () {
  var articleTemplate = $("#project-template").html();
  var theTemplate = Handlebars.compile(articleTemplate);

  return theTemplate(this);
};


Portfolioproject.fetchAll =function () {
  if (localStorage.project) {
    Portfolioproject.loadAll(JSON.parse(localStorage.getItem("project")));
    portfolioView.initPage();

  } else {
    console.log("localStorage does not exist");
    $.getJSON("../data/portfolio.json", function(data){
      localStorage.setItem ('project', JSON.stringify(data));
      Portfolioproject.loadAll(data);
      portfolioView.initPage();
    })
  }


};

Portfolioproject.loadAll= function(projects) {
  projects.forEach(function(project) {
    Portfolioproject.all.push(new Portfolioproject(project));
  })
};
