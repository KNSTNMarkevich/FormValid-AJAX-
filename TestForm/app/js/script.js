$(document).ready(function(){

   $('#test form').validate({
    rules: {
        name: "required",
        surname: "required",
        message: "required"
    },
    messages: {
        name: "Заполните поле",
        surname: "Заполните поле",
        message: "Заполните поле"
    },
    
   })  

   $(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за оставленный вопрос! Мы обязательно с вами свяжемся!");
			$(".form").trigger("reset");
		});
		return false;
	});
});