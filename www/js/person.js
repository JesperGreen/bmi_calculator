function Person(attr) {
  this.weight = attr.weight;
  this.weight_in_lbs = attr.weight_in_lbs;
  this.height = attr.height;
  this.height_in_inches = attr.height_in_inches;
  this.height_in_feet = attr.height_in_feet;
  this.system = attr.system;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  if (this.system == 'metric') {
    calculator.metric_bmi(this);
  }
  else if (this.system == 'imperial') {
    calculator.imperial_bmi(this);
  }
  else {
    alert("You need to enter your height and weight")
  };
};
