const billamt=document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given"); 
const checkbutton= document.querySelector("#check-button")
const errormsg=document.querySelector("#error-msg")
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
checkbutton.addEventListener("click", function checkbuttonhandler(){ 
    errormsg.style.display="none";
    if (billamt.value > 0){ 
        if (Number(billamt.value) <= Number(cashgiven.value)){ 
            var remamt=cashgiven.value - billamt.value;
            calculateChange(remamt);

        }
        else{ 
            errormsg.style.display="block";
            errormsg.innerText= "Cash received should be more than bill amount.";

        }

    }

    else{
        errormsg.style.display="block";
        errormsg.innerText= "The bill amount should be more than 0.";
    }
    function calculateChange(remamt){ 
        for (let i = 0; i < availableNotes.length; i++) {
            
            const numberOfNotes = Math.trunc(remamt / availableNotes[i]);
            remamt = remamt % availableNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
          }

    }
});