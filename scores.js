function submit()
{
 alert("submit worked!")
 var score=0;
 if(checkfirst() == true){
  score+=25;
 }
 if(checksecond() == true){
  score+=25;
 }
 if(checkthird() == true){
  score+=25;
 }
 if(checkfourth() == true){
  score+=25;
 }
 if(checkfifth() == true){
  score+=25;
 }
 document.getElementById("score").value = score;
 alert(score);
}


function checkfirst()
{
 var fAnswer = document.getElementById("firstAnswer").value;
 var rightAnswer= "Elmore";
 if (fAnswer == rightAnswer){
  return true;
 }
 else {
  return false;
 }
}

function checksecond()
{
 var sAnswer = document.getElementById("secondAnswer").value;
 var rightAnswer= "Rabbit";
 if (sAnswer == rightAnswer){
  return true;
 }
 else {
  return false;
 }
}

function checkthird()
{
 var thirdA = document.getElementById("thirdAnswer").value;
 var rightAnswer= "five";
 if (thirdA == rightAnswer){
  return true;
 }
 else {
  return false;
 }
}

function checkfourth()
{
 var fourthA = document.getElementById("fourthAnswer").value;
 var rightAnswer= "Penny";
 if (fourthA == rightAnswer){
  return true;
 }
 else {
  return false;
 }
}

function checkfifth()
{
 var fourthA = document.getElementById("fifthAnswer").value;
 var rightAnswer= "Zach";
 if (fourthA == rightAnswer){
  return true;
 }
 else {
  return false;
 }
}