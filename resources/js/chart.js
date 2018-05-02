window.onload = function() {
  var chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,

    title: {
      text: 'Technology Stack'
    },
    axisX: {
      interval: 1
    },
    axisY2: {
      interlacedColor: 'rgba(1,77,101,.2)',
      gridColor: 'rgba(1,77,101,.1)',
      title: 'Year(s) Of Experience'
    },
    data: [
      {
        type: 'column',
        name: 'companies',
        axisYType: 'secondary',
        color: '#014D65',
        dataPoints: [
          { y: 5, label: 'SQL' },
          { y: 1, label: 'AngularJS' },
          { y: 4, label: 'Mockito' },
          { y: 5, label: 'JUnit' },
          { y: 4, label: 'Web Services' },
          { y: 2, label: 'Hibernate' },
          { y: 2, label: 'JSF' },
          { y: 5, label: 'Spring' },
          { y: 6, label: 'Java' }
        ]
      }
    ]
  });
  this.setTimeout(function() {
    chart.render();
  }, 1000);
};
