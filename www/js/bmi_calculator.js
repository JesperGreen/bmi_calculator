function BMICalculator(){
};

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

BMICalculator.prototype.imperial_bmi = function(obj) {
  var weight = obj.weight_in_lbs;
  var height_in_feet = obj.height_in_feet * 12;
  var height_in_inches = obj.height_in_inches;
  var height = height_in_feet + height_in_inches;
  if (weight > 0 && height > 0) {
    var finalBmi = (weight * 703) / (height * height);
    obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }
};

function setBMIMessage (obj, value){
  if (obj.bmiValue < 18.5) {
    obj.bmiMessage = "Underweight"
  }
  if (obj.bmiValue >= 18.5 && obj.bmiValue < 25) {
    obj.bmiMessage = "Normal"
  }
  if (obj.bmiValue >= 25 && obj.bmiValue < 30) {
    obj.bmiMessage = "Overweight"
  }
  if (obj.bmiValue >= 30) {
    obj.bmiMessage = "Obese"
  }
};
