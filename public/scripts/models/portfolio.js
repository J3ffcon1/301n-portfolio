(function(module) {
  //constructor function, that needs data to pass through in order to fill it in. referring to a single project.
  function PortfolioProject (project) {
    this.title = project.title;
    this.course = project.course;
    this.description = project.description;
  };
  PortfolioProject.all = [];

  PortfolioProject.prototype.toHtml = function () {
    var articleTemplate = $("#project-template").html();
    var theTemplate = Handlebars.compile(articleTemplate);

    return theTemplate(this);
  };

  PortfolioProject.fetchAll =function () {
    if (localStorage.project) {
      PortfolioProject.loadAll(JSON.parse(localStorage.getItem("project")));
      portfolioView.initPage();

    } else {
      console.log("localStorage does not exist");
      $.getJSON("../data/portfolio.json", function(data){
        localStorage.setItem ('project', JSON.stringify(data));
        PortfolioProject.loadAll(data);
        portfolioView.initPage();
      })
    }
  };

  PortfolioProject.loadAll= function(projects) {
    projects.forEach(function(project) {
      PortfolioProject.all.push(new PortfolioProject(project));
    })
  };
  module.PortfolioProject = PortfolioProject;
} )(window);
