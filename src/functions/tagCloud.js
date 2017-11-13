module.exports = function(container){
    // d3-cloud would not work without v3 of d3.js
var width = 800;
var height = 500;
var data = [
  {'text': 'Javascript', 'size':80},
  {'text': 'Java', 'size': 60},
  {'text': 'React.js', 'size':80}, 
  {'text': 'Redux.js', 'size': 90},
  {'text': 'Webpack', 'size': 70},
  {'text': 'SASS', 'size': 60},
  {'text': 'Pug', 'size': 70},
  {'text': 'Node.js', 'size': 75},
  {'text': 'Spring', 'size': 60},
  {'text': 'MyBatis', 'size': 70},
  {'text': 'SQL', 'size': 60},
  {'text': 'MySQL', 'size': 70},
  {'text': 'Firebase', 'size': 70},
  {'text': 'Git', 'size': 60},
  {'text': 'Babel', 'size': 70},
  {'text': 'npm', 'size': 60},
  {'text': 'yarn', 'size': 60},
  {'text': 'UI/UX', 'size': 60},
  {'text': 'CSS3', 'size': 60},
  {'text': 'Express', 'size': 60}
];

  var fill = d3.scale.linear()
              .domain([1,10])
              .range(['#fff5a3', '#ffa3d5']);
  var colors = ["yellow","white","azure"];
  d3.layout.cloud().size([width, height])
      .words(data)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return d.size; })
      .on("end", draw)
      .start();
  function draw(words) {
    d3.select(container).append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate("+width/2+","+height/2+")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .style("font-family", "IM Fell DW Pica")
        .style("fill", function(d, i) { return "rgba(255,255,255,"+(d.size/60)+")"; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }

    
}