function Person (age, savings, interest, retirement){
  this.age = age;
  this.savings = savings;
  this.interest = interest;
  this.retirement = retirement;
  this.array = [];
  this.yearsLeft = function(){
    return this.retirement - this.age;
  };
  this.moneyAtRetirement = function(){
    if (this.yearsLeft() <= 0){
      alert('You are retired! Bozo!');
    }
    else {
      for (i = 0; i < this.yearsLeft(); i++){
        this.savings += this.savings * this.interest/100;
        this.array[i] = this.savings.toFixed(2);
      }
      return this.array;
    }
  };
}

document.getElementById('submit').onclick = function() {
  var age = parseInt(document.getElementById('age').value);
  var savings = parseInt(document.getElementById('total-savings').value);
  var interest = parseInt(document.getElementById('interest-rate').value);
  var retirement = parseInt(document.getElementById('retirement').value);
  var test = new Person(age, savings, interest, retirement);
  var data = test.moneyAtRetirement();
  var x = d3.scale.linear() //function that maps values to pixel measurements
  .domain([0, d3.max(data)])
  .range([0, 420]);

  d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", function(d) { return x(d) + "px"; })
  .text(function(d) { return d; });
  return false;
};
