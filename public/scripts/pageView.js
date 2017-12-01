var portfolioView = {};

// var handleMainNav = function() {
//   console.log('called handleMainNav function');
//
//   $('#menu').on('click','.tab', function(event) {
//     event.preventDefault();
//     var selectedTab = '#' + $(this).data('content');
//     console.log('showing ' + selectedTab);
//     $('.tab-content').hide();
//     $(selectedTab).show();
//   });
//
//   $('.menu .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
// };

portfolioView.initPage = function() {
  Portfolioproject.all.forEach(function(project){
    $('#projects').append(project.toHtml())
  });
};
