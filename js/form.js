// resetter formen fra starten

document.querySelector("#webform").reset();
 
// Eventlistnere på knapperne
document.querySelector("#reset_btn").addEventListener("click", reset);
document.querySelector("#submit_btn").addEventListener("click", submitForm);

// Sender value af inputfelterne til Summary
function submitForm() {
    document.querySelector("#sumName").textContent = document.querySelector("#f_navn").value;
    document.querySelector("#sumLastname").textContent = document.querySelector("#e_navn").value;
    document.querySelector("#sumBooking").textContent = document.querySelector("#booking-nr").value;
    document.querySelector("#sumFly").textContent = document.querySelector("#fly-nr").value;
    document.querySelector("#sumAfrejse").textContent = document.querySelector("#afrejse").value;
    document.querySelector("#sumAnkomst").textContent = document.querySelector("#ankomst").value;
    document.querySelector("#sumPlanlagt").textContent = document.querySelector("#planlagt").value;
    document.querySelector("#sumTid").textContent = document.querySelector("#tid").value;
    document.querySelector("#sumVarighed").textContent = document.querySelector("#varighed").value;
    document.querySelector("#sumÅrsag").textContent = document.querySelector("#årsag").value;
    document.querySelector("#sumFlyselskab").textContent = document.querySelector("#flyselskab").value;

}




function reset() {
    document.querySelector("#webform").reset();
    document.querySelector("#sum").style.display = "none";
  }