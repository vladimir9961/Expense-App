let table = document.getElementById("tbody");

tbody.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("btn").click();
    }
  });



function onClick(){
    event.preventDefault();
    if(document.getElementById("name").value.length === 0)
    {   
        alert("Please insert name!!!");
    }else if(document.getElementById("date").value.length === 0){
        alert("Please insert date!!!");
    }else if(document.getElementById("amount").value.length === 0){
        alert("Please insert amount!!!");
    }
    else if(document.getElementById("name").value.length > 20){
      let tr = document.createElement('tr')
      table.appendChild(tr);
      
          
          let tdName = document.createElement('TD');
          let nameVal = document.getElementById("name").value;
          tdName.setAttribute("class", "hide"); 
          tdName.innerHTML = nameVal;
          let newP = document.createElement('p');
          newP.innerHTML = nameVal;
          let div = document.getElementById("myModalDiv");
          div.appendChild(newP);

          let tdDate= document.createElement('TD');
          let dateVal = document.getElementById("date").value;
          tdDate.innerHTML = dateVal;

          let tdAmount = document.createElement('TD');
          let amountVal = document.getElementById("amount").value;
          tdAmount.innerHTML = amountVal;
          
          tr.appendChild(tdName);
          tr.appendChild(tdDate);
          tr.appendChild(tdAmount);
      

          //Creating button for delete
          let btnRem = document.createElement('TD');
          tr.appendChild(btnRem);
          let newBtn = document.createElement('button');
          newBtn.setAttribute("id", "btnDel"); 
          newBtn.innerHTML = "X";
          btnRem.appendChild(newBtn);


          //Button show hiden text in popup
          let popUp = document.createElement('button');
          popUp.setAttribute("id", "show"); 
          popUp.innerHTML = "Show";
          btnRem.appendChild(popUp);


          // Get the modal
            var modal = document.getElementById("myModal");

            // Get the button that opens the modal
            var btn = document.getElementById("show");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on the button, open the modal
            btn.onclick = function() {
              modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }


          //Onclick btn delete li element
          newBtn.onclick = function() {
          let delBtn = tr;
          delBtn.remove();
            
          }}else{ 


        let tr = document.createElement('tr')
        table.appendChild(tr);
        
     
            let tdName = document.createElement('TD');
            let nameVal = document.getElementById("name").value;
            tdName.innerHTML = nameVal;

            let tdDate= document.createElement('TD');
            let dateVal = document.getElementById("date").value;
            tdDate.innerHTML = dateVal;

            let tdAmount = document.createElement('TD');
            let amountVal = document.getElementById("amount").value;
            tdAmount.innerHTML = amountVal;
            
            tr.appendChild(tdName);
            tr.appendChild(tdDate);
            tr.appendChild(tdAmount);
        

            //Creating button for delete
            let btnRem = document.createElement('TD');
            tr.appendChild(btnRem);
            let newBtn = document.createElement('button');
            newBtn.setAttribute("id", "btnDel"); 
            newBtn.innerHTML = "X";
            btnRem.appendChild(newBtn);
            

            //Onclick btn delete li element
            newBtn.onclick = function() {
            let delBtn = tr;
            delBtn.remove();
        };
    }
}


