function uploadEmailsCsv () {}; 

// Parse CSV
uploadEmailsCsv.prototype.getCsv = function(e) {
      
  let input = document.getElementById('emailsCsv');
  input.addEventListener('change', function() {

    if (this.files && this.files[0]) {

        var myFile = this.files[0];
        var reader = new FileReader();
        
        reader.addEventListener('load', function (e) {
            
            let csvdata = e.target.result; 
            parseCsv.getParsecsvdata(csvdata);
        });
        
        reader.readAsBinaryString(myFile);
    }
  });
}

// Display CSV data
uploadEmailsCsv.prototype.getParsecsvdata = function(data) {

    let parsedata = [];

    let newLinebrk = data.split("\n");
    for(let i = 0; i < newLinebrk.length; i++) {

        parsedata.push(newLinebrk[i].split(","))
    }

    console.table(parsedata);
}

var parseCsv = new uploadEmailsCsv();
parseCsv.getCsv();
