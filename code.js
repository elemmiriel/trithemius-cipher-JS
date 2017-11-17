var alphabet = ['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я','а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я','0','1','2','3','4','5','6','7','8','9',' ',',','.','!','?',';'];
var n = alphabet.length; //n - мощность алфавита

//шифруем
function cipher () {
  var k = document.getElementById("key").value; //значение поля секретный ключ
  var textInput = document.getElementById("input-text").value; //текст из поля Исходный текст
  var textOutput = document.getElementById("output-text");
  textInput.split(/(\w)/i); //Разбиваем исходный текст на массив посимвольно
  var str=""; //Строковая переменная для вывода
  var m = -1;
  console.log(textInput);
  
  for (i = 0; i < textInput.length; i++){
    m= find(alphabet,textInput[i]);
      if (m!==-1) {
////////////////////////////////////////        
        /*  Здесь можно пошагово увидеть значения переменных */
        console.log("m=" + m);
        console.log("k=" + k);
//////////////////////////////////////
        str = str + alphabet[(m+k)%n]; //Строка вывода формируется посимвольно. Мат. модель см. в википедии.
        console.log(alphabet[(m+k)%n]);
      }else{ //Отсутствующие в алфавите программы символы заменяются нижним подчёркиванием.
      str = str + '_';
    }
  }
  textOutput.innerHTML = ""; //не обязательно
  textOutput.innerHTML = str;
}


//дешифровка
function decipher () {
  var k = document.getElementById("key").value; //значение поля секретный ключ
  var textInput = document.getElementById("input-text").value; //текст из поля Исходный текст
  var textOutput = document.getElementById("output-text");
  textInput.split(/(\w)/i); //Разбиваем исходный текст на массив посимвольно
  var str=""; //Строковая переменная для вывода
  var m = -1;
  console.log(textInput);
/*  
  for (i = 0; i < textInput.length; i++){
    m= find(alphabet,textInput[i]);
      if (m!==-1) {
////////////////////////////////////////        
      //Здесь можно пошагово увидеть значения переменных 
        console.log("m=" + m);
        console.log("k=" + k);
//////////////////////////////////////
//попробовать без изменений м

        while((m-k)<0){
          m+=n;
          console.log("m+=n -> "+m)
        }        
        console.log((m-k)%n);
        str = str + alphabet[(m-k)%n]; //Строка вывода формируется посимвольно. Мат. модель см. в википедии.
        console.log(alphabet[(m-k)%n]);
      }else{ //Отсутствующие в алфавите программы символы заменяются нижним подчёркиванием.
      str = str + '_';
    }
  }
*/
  for (i = 0; i < textInput.length; i++){
    m= find(alphabet,textInput[i]);
       
        console.log(m*n-k);
        str = str + alphabet[m*n-k]; //Строка вывода формируется посимвольно. Мат. модель см. в википедии.
        console.log(alphabet[m*n-k]);
    
  }
        
  
  console.log(str);
  textOutput.innerHTML = ""; //не обязательно
  textOutput.innerHTML = str;
}


//Функция find() вычисляет индекс символа в массиве алфавита
function find(array, value) {
  if (array.indexOf) { // если метод существует
    return array.indexOf(value);
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }

  return -1;
}
