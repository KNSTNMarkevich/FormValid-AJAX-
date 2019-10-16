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
                var  send = true;
            $('.form input[type="text"]').each(function(){
                if(!$(this).val() || $(this).val() == ''){
                $(this).css('border-color','red');//Сделаем бордер красным
                send = false;
                }
            });
            if(!send) return false;
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
