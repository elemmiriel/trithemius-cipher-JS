function cipher () {
  var alphabet = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я','а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я','0','1','2','3','4','5','6','7','8','9',' ',',','.','!','?',';'];

  var n = alphabet.length; //n - мощность алфавита
  var k = document.getElementById("key").value; //значение поля секретный ключ
  var textInput = document.getElementById("input-text").value; //текст из поля Исходный текст
  var textOutput = document.getElementById("output-text");
  textInput.split(/(\w)/i); //Разбиваем исходный текст на массив посимвольно
  var str="";
  
  console.log(textInput);
  
  for (i = 0; i < textInput.length; i++){
//  Здесь можно пошагово увидеть результат
    console.log("i=" + i);
    console.log("k=" + k);

    str = str + alphabet[(i+k)%n]; //Строка вывода
    console.log(alphabet[(i+k)%n]);
  }
  
  textOutput.innerHTML = '';
  textOutput.innerHTML = str;
}
