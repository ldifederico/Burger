$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");  
      var newBurgerDevoured = {
        devoured: "true"
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerDevoured
      }).then(
        function() {
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
          location.reload();
        }
      );
    });
});