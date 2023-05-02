
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRwA7ScYW-qlcurArWdWQcEu6T8XjCys9IItTUjKoUqCqhTfgs9lyyBoFyKl7IlUwGTda24_0xZ_g4s/pub?output=csv")
    .then(response => response.text())
    .then(text => {
        
        const rows = text.split('\n');
        const data = rows.map(row => row.split(','));

        var m_grid = document.getElementById("ul-grid").getElementsByTagName("section")[0];
        m_grid.innerHTML = "";

        for (var row = 1; row < rows.length; row++) {
            var newRow = m_grid.insertRow();

            rowColData = rows[row].split(',');

            for (var col = 0; col < rowColData.length; col++) {
     
                // Insert a cell at the end of the row
                var newCell = newRow.insertCell();
                newCell.innerHTML = rowColData[col];

           }

        }


        console.log(newRow);



    });
