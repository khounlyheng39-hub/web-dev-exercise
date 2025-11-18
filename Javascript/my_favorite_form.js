document.addEventListener("DOMContentLoaded" ,function () {
  const titleInput =document.getElementById("title");
  const form= document.getElementById("favoritefoodForm");
  const titleError= document.getElementById("titleError");
  const typeButtons= document.getElementsByName("type");
  const startDateinput= document.getElementById("start_date");
  const startDateError= document.getElementById("startDateError");
  const CountryInput= document.getElementById("Country");
  const CountryError= document.getElementById("CountryError");
  const ingredientInput= document.getElementById("ingredient");
  const ingredientError= document.getElementById("ingredientError");

  function validateTitle() {
    const value= titleInput.value.trim();
    if(value ===""){
      titleError.textContent="Title is required.";
      return false;
    }

    if (value.length > 50) {
        titleError.textContent= "No more than 50 characters allowed.";
        return false;
    }
    titleError.textContent ="";
    return true;
  }

  function validateType() {
    let checkedType= document.querySelector("input[name='type']:checked");
    
    if(checkedType=== null) {
        tasteError.textContent= "Type is required.";
        return false;
    }else{
        tasteError.textContent= "";
        return true;
    }
  }
  function validateStartDate(){
    if(!startDateinput.validity.valid) {
      startDateError.textContent= "invalid date";
      return false;
    }
    startDateError.textContent= "";
    return true;
  }
    function validateCountry(){
      if(CountryInput.value === "") {
        CountryError.textContent= "Type is required.";
        return false;
    }else{
        CountryError.textContent= "";
        return true;
    }
  }
    function validateingredient(){
      if(ingredientInput.value === "") {
        ingredientError.textContent= "Type is required.";
        return false;
    }else{
        ingredientError.textContent= "";
        return true;
    }
  }


  titleInput.addEventListener("blur", validateTitle);
  form.addEventListener("submit", function (event){
    const isValid = validateTitle();
    if(!isValid){
        // stop submit(stop going to the url if input are wrong)
        event.preventDefault();
    }
  });
  typeButtons.forEach(radioButton=>{
      radioButton.addEventListener('blur', validateType);

  });
    startDateinput.addEventListener("blur", validateStartDate);
    CountryInput.addEventListener("blur", validateCountry);
    ingredientInput.addEventListener("blur", validateingredient);
 });
  
