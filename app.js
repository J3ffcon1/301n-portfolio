var data = [
  {
    title: 'Guessing-Game',
    course: 'Code 201',
    description: 'this project is a guessing game that uses javascript to quiz people on trivia questions about me.',
  },

  {
    title: 'Cookie-stand',
    course:  'Code 201',
    description: 'Created a website for a cookie stand that uses randomly generated data to calculate totals of cookies sold for different store branches.',
  },

  {
    title: 'Market Analysis App',
    course:  'Code 201',
    description: 'Use Canvas API to create a table that would show data aquired from a clicking test, which asks participants to click the image of a product which most appeals to them',
  },
  {
    title: 'Stop and Drop',
    course: 'Code 201',
    description: 'Used Google API to create a crowdsourced app that locates restrooms, aimed at people who drive for a living or those who just need to find the closest bathroom',
  }
];

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
