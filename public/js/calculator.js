function percent(gradeInp, outOfInp, output){
document.getElementsByName(gradeInp)[0].addEventListener("keyup", function(){
  var grade = document.getElementsByName(gradeInp)[0].value;
  var outOf = document.getElementsByName(outOfInp)[0].value;
  var percent = grade / outOf * 100;
  document.getElementById(output).innerHTML = percent.toFixed(2);
});
document.getElementsByName(outOfInp)[0].addEventListener("keyup", function(){
  var grade1 = document.getElementsByName(gradeInp)[0].value;
  var outOf1 = document.getElementsByName(outOfInp)[0].value;
  var percent1 = grade1 / outOf1 * 100;
  document.getElementById(output).innerHTML = percent1.toFixed(2);
});

}

percent("grade_1", "outOf_1", "percentage_1");
percent("grade_2", "outOf_2", "percentage_2");
percent("grade_3", "outOf_3", "percentage_3");
percent("grade_4", "outOf_4", "percentage_4");

function letterGrades(gradeInp, outOfInp, output){
  document.getElementsByName(outOfInp)[0].addEventListener("keyup", function(){
    var toA = document.getElementById("gradesTable1").value;
    var fromA =   document.getElementById("gradesTable11").value;
    var toB = document.getElementById("gradesTable2").value;
    var fromB =   document.getElementById("gradesTable22").value;
    var toC = document.getElementById("gradesTable3").value;
    var fromC =   document.getElementById("gradesTable33").value;
    var toD = document.getElementById("gradesTable4").value;
    var fromD =   document.getElementById("gradesTable44").value;
    var toF = document.getElementById("gradesTable5").value;
    var fromF =   document.getElementById("gradesTable55").value;

    var grade = document.getElementsByName(gradeInp)[0].value;
    var outOf = document.getElementsByName(outOfInp)[0].value;
    var percent = grade / outOf * 100;
    if((percent >= fromF) && (percent <= toF)){
        document.getElementById(output).innerHTML = "F";
      }
    else if ((percent >= fromD) && (percent <= toD)){
        document.getElementById(output).innerHTML = "D";
      }
    else if ((percent >= fromC) && (percent <= toC)){
        document.getElementById(output).innerHTML = "C-/C/C+";
      }
    else if ((percent >= fromB) && (percent <= toB)){
        document.getElementById(output).innerHTML = "B-/B/B+";
      }
    else if ((percent >= fromA) && (percent <= toA)){
        document.getElementById(output).innerHTML = "A-/A/A+";
      }
    else {
      document.getElementById(output).innerHTML = "Invalid grade";
    }
});

  document.getElementsByName(gradeInp)[0].addEventListener("keyup", function(){
    var toA = document.getElementById("gradesTable1").value;
    var fromA =   document.getElementById("gradesTable11").value;
    var toB = document.getElementById("gradesTable2").value;
    var fromB =   document.getElementById("gradesTable22").value;
    var toC = document.getElementById("gradesTable3").value;
    var fromC =   document.getElementById("gradesTable33").value;
    var toD = document.getElementById("gradesTable4").value;
    var fromD =   document.getElementById("gradesTable44").value;
    var toF = document.getElementById("gradesTable5").value;
    var fromF =   document.getElementById("gradesTable55").value;

    var grade = document.getElementsByName(gradeInp)[0].value;
    var outOf = document.getElementsByName(outOfInp)[0].value;
    var percent = grade / outOf * 100;

    if((percent >= fromF) && (percent <= toF)){
        document.getElementById(output).innerHTML = "F";
      }
    else if ((percent >= fromD) && (percent <= toD)){
        document.getElementById(output).innerHTML = "D";
      }
    else if ((percent >= fromC) && (percent <= toC)){
        document.getElementById(output).innerHTML = "C-/C/C+";
      }
    else if ((percent >= fromB) && (percent <= toB)){
        document.getElementById(output).innerHTML = "B-/B/B+";
      }
    else if ((percent >= fromA) && (percent <= toA)){
        document.getElementById(output).innerHTML = "A-/A/A+";
      }
    else {
      document.getElementById(output).innerHTML = "Invalid grade";
    }
});
}

letterGrades("grade_1", "outOf_1","letter1");
letterGrades("grade_2", "outOf_2","letter2");
letterGrades("grade_3", "outOf_3","letter3");
letterGrades("grade_4", "outOf_4","letter4");

function mean() {
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  if(outOf1 != 0){
    var grade1 = (document.getElementsByName("grade_1")[0].value) / outOf1;
  }
  else{
    var grade1 = 0;
  }
  if(outOf2 != 0){
    var grade2 = (document.getElementsByName("grade_2")[0].value) / outOf2;
  }
  else{
    var grade2 = 0;
  }
  if(outOf3 != 0){
    var grade3 = (document.getElementsByName("grade_3")[0].value) / outOf3;
  }
  else{
    var grade3 = 0;
  }
  if(outOf4 != 0){
    var grade4 = (document.getElementsByName("grade_4")[0].value) / outOf4;
  }
  else{
    var grade4 = 0;
  }
  var count = 0;
  var array = [grade1, grade2, grade3, grade4];
  for(var i = 0; i < 4; i++){
    if(array[i] != 0){
      count++;
    }
  }
  var meanValue = ((grade1 + grade2 + grade3 + grade4)/count)*100;
  var output = meanValue.toFixed(1);
  document.getElementById("output").innerHTML = output + "/100";
}

function weighted() {
  var outOf1 = document.getElementsByName("outOf_1")[0].value;
  var outOf2 = document.getElementsByName("outOf_2")[0].value;
  var outOf3 = document.getElementsByName("outOf_3")[0].value;
  var outOf4 = document.getElementsByName("outOf_4")[0].value;
  var weight1 = document.getElementsByName("weight_1")[0].value;
  var weight2 = document.getElementsByName("weight_2")[0].value;
  var weight3 = document.getElementsByName("weight_3")[0].value;
  var weight4 = document.getElementsByName("weight_4")[0].value;
  if(outOf1 != 0){
    var grade1 = (document.getElementsByName("grade_1")[0].value) / outOf1;
  }
  else{
    var grade1 = 0;
  }
  if(outOf2 != 0){
    var grade2 = (document.getElementsByName("grade_2")[0].value) / outOf2;
  }
  else{
    var grade2 = 0;
  }
  if(outOf3 != 0){
    var grade3 = (document.getElementsByName("grade_3")[0].value) / outOf3;
  }
  else{
    var grade3 = 0;
  }
  if(outOf4 != 0){
    var grade4 = (document.getElementsByName("grade_4")[0].value) / outOf4;
  }
  else{
    var grade4 = 0;
  }
  if(weight1 == ""){
    weight1 = 0;
  }
  if(weight2 == ""){
    weight2 = 0;
  }
  if(weight3 == ""){
    weight3 = 0;
  }
  if(weight4 == ""){
    weight4 = 0;
  }
  weightedValue = ((grade1*weight1 + grade2*weight2 + grade3*weight3 + grade4*weight4)/(parseInt(weight1, 10) + parseInt(weight2, 10) + parseInt(weight3, 10) + parseInt(weight4, 10)))*100;
  var output = weightedValue.toFixed(1);
  document.getElementById("output").innerHTML = output + "/100";
}

function clearr(){
 document.getElementsByName("grade_1")[0].value = "";
 document.getElementsByName("grade_2")[0].value = "";
 document.getElementsByName("grade_3")[0].value = "";
 document.getElementsByName("grade_4")[0].value = "";
 document.getElementsByName("outOf_1")[0].value = "";
 document.getElementsByName("outOf_2")[0].value = "";
 document.getElementsByName("outOf_3")[0].value = "";
 document.getElementsByName("outOf_4")[0].value = "";
 document.getElementsByName("weight_1")[0].value = "";
 document.getElementsByName("weight_2")[0].value = "";
 document.getElementsByName("weight_3")[0].value = "";
 document.getElementsByName("weight_4")[0].value = "";
 document.getElementById("output").innerHTML = "";
 document.getElementById("percentage_1").innerHTML = "";
 document.getElementById("percentage_2").innerHTML = "";
 document.getElementById("percentage_3").innerHTML = "";
 document.getElementById("percentage_4").innerHTML = "";
 document.getElementById("letter1").innerHTML = "";
 document.getElementById("letter2").innerHTML = "";
 document.getElementById("letter3").innerHTML = "";
 document.getElementById("letter4").innerHTML = "";
}
