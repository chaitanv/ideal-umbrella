  function pop(){
question_word = "<h4 id='word_display'> Success Abacus</h4>";
input_box = "<br><p>AbacusBuild Confidence & Concentration & strenghten memoryVedic Mathshelpful for 8th-10th Std & above students & competitive examHandwritingWriting improves memory & good handwriting brings confidence";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Go</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "" ;
}