document.addEventListener("DOMContentLoaded", function() {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const buttonText = this.innerText;
        
        if (buttonText === "C") {
          result.value = "";
        } else if (buttonText === "=") {
          try {
            result.value = eval(result.value);
          } catch (error) {
            result.value = "Error";
          }
        } else {
          result.value += buttonText;
        }
      });
    });
  });
  