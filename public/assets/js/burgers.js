$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("true");
  
      var newBurgerDevoured = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/:" + id, {
        type: "PUT",
        data: newBurgerDevoured
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
});