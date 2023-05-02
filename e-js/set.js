var a = fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRwA7ScYW-qlcurArWdWQcEu6T8XjCys9IItTUjKoUqCqhTfgs9lyyBoFyKl7IlUwGTda24_0xZ_g4s/pub?output=csv')
  .then(response => response.text())
  .then(text => {
    const rows = text.split('\n');
    const data = rows.map(row => row.split(','));
    var dbody= document.getElementById("up-cbody").getElementsByClassName("cbody")[0];
    dbody.innerHTML = "";
    var idvalue = 0;
    for (var row = 1; row < rows.length; row++) {
        idvalue++;
        const box = document.createElement("div");
        box.id = "card"+idvalue;
        box.className = "card";
        document.getElementById("cbody").appendChild(box);
        
        var rowColData = rows[row].split(',');

        const cin = document.createElement("div");
        cin.className = "card-info";
        cin.id = "card-info"+idvalue;
        document.getElementById("card"+idvalue).appendChild(cin);

        const cimg = document.createElement("img");
        cimg.className ="c-img";
        var ilink = rowColData[6];
        cimg.src = ilink.replace("https://drive.google.com/open?id=","https://drive.google.com/uc?export=view&id=");
        document.getElementById("card-info"+idvalue).appendChild(cimg);

        const ttlp = document.createElement("p");
        ttlp.className ="title";
        ttlp.innerText = rowColData[1];
        document.getElementById("card-info"+idvalue).appendChild(ttlp);

        const ttlpb = document.createElement("p");
        ttlpb.className ="i-price";
        ttlpb.innerText = rowColData[4];
        document.getElementById("card-info"+idvalue).appendChild(ttlpb);

        const cdbtn = document.createElement("button");
        cdbtn.className = "btn-det";
        cdbtn.innerHTML = "Details";
        document.getElementById("card-info"+idvalue).appendChild(cdbtn);

        const cpbtn = document.createElement("button");
        cpbtn.className = "btn-cart";
        cpbtn.innerHTML = "To Cart";
        document.getElementById("card-info"+idvalue).appendChild(cpbtn);




        

        console.log(rowColData[5]);
        
        
        


    }

    
    console.log(dbody);
    

  
  });


