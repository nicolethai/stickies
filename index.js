var stickButton = document.getElementById('stick');
var notes = document.getElementById('notes');

var postIt = function() {
    var note = document.getElementById('note').value;
    var date = document.getElementById('date').value;
    
    var sticky = note + " stuck since" + date;
    
    var posted = document.createElement("p");
    posted.textContent = sticky;
    notes.appendChild(posted);
    
}

stickButton.onclick = postIt;