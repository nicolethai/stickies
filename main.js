var myDataRef = new Firebase('https://eq4vxp0rje5.firebaseio-demo.com/');
var stickButton = document.getElementById('stick');
var notes = document.getElementById('notes');

var postIt = function() {
    
    var note = document.getElementById('note').value;
    var date = document.getElementById('date').value;
    
    myDataRef.push({note: note, date: date});

};
    
myDataRef.on('child_added', function(data) {
    
    var content = data.val();
    displayNewNote(content.note, content.date);
    
    }
);
    
var displayNewNote = function(note, date) {
    
    var sticky = note + " stuck since " + date;
    
    var posted = document.createElement("p");
    posted.textContent = sticky;
    notes.appendChild(posted);
    
};

stickButton.onclick = postIt;