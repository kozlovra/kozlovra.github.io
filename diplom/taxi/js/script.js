const selectElement = document.querySelector('.pay-option');
var mnSelect = document.getElementById("mn-option");

selectElement.addEventListener('change', (event) => {
  if (event.target.value == 'card-pay') {
    mnSelect.value = "";
    mnSelect.disabled = true;
  }else{
    mnSelect.disabled = false;
  }
});


  const form = document.getElementById( "order-form" );
  form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      document.location = "order-completed.html";
  } );