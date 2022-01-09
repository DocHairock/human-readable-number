module.exports = function toReadable (number) {
    let str = number.toString()
    let arr = str.split('')
    if (number == 100) { return "one hundred" }
    else if (number == 200) { return "two hundred" }
    else if (number == 300) { return "three hundred" }
    else if (number == 400) { return "four hundred" }
    else if (number == 500) { return "five hundred" }
    else if (number == 600) { return "six hundred" }
    else if (number == 700) { return "seven hundred" }
    else if (number == 800) { return "eight hundred" }
    else if (number == 900) { return "nine hundred" }
           
    else if (str.length == 3) {
        let a =""
        let b =""
        let c =""
       
        switch (arr[0]) {
  case '1':  { a ="one hundred";
  break;}
  case '2':  { a ="two hundred";
  break;}
  case '3':  { a ="three hundred";
  break;}
  case '4':  { a ="four hundred";
  break;}
  case '5':  { a ="five hundred";
  break;}
  case '6':  { a ="six hundred";
  break;}
  case '7':  { a ="seven hundred";
  break;}
  case '8':  { a ="eight hundred";
  break;}
  case '9':  { a ="nine hundred";
  break;}
  
 
        };   
        
        switch (arr[1]) {
        
            case '1': {
                  switch (arr[2]) {
         
                case '1':{ b="eleven"; break;}
                case '2':{ b="twelve"; break;}
                case '3':{ b="thirteen"; break;}
                case '4':{ b="fourteen"; break;}
                case '5':{ b="fifteen"; break;}
                case '6':{ b="sixteen"; break;}
                case '7':{ b="seventeen"; break;}
                case '8':{ b="eighteen"; break;}
                case '9':{ b="nineteen"; break;}
                case '0':{ b="ten"; break;}
        };
                
                ; break;
            }
                case '2': {b="twenty"; break;}
                case '3': {b="thirty"; break;}
                case '4': {b="forty"; break;}
                case '5': {b="fifty"; break;}
                case '6': {b="sixty"; break;}
                case '7': {b="seventy"; break;}
                case '8': {b="eighty"; break;}
                case '9': {b="ninety"; break;}
                case '0': {b=""; break;}
        };
        if (arr[1] !== "1") {
         switch (arr[2]) {
         
                case '1':{ c="one"; break;}
                case '2':{ c="two"; break;}
                case '3':{ c="three"; break;}
                case '4':{ c="four"; break;}
                case '5':{ c="five"; break;}
                case '6':{ c="six"; break;}
                case '7':{ c="seven"; break;}
                case '8':{ c="eight"; break;}
                case '9':{ c="nine"; break;}
                case '0':{ c=""; break;}
        };   
        }
    
        let s1 =" "
        let s2 =" "
        if (b == "") { s1 = "" }
        else if (c == "") { s2 = "" }
        else if (b == "" && c == "") { s1 = "", s2 = "" }
        
        
     let res = a+s1+b+s2+c
    return res   
    }
    else if (str.length == 2) {
         
        let b =""
        let c =""
         switch (arr[0]) {
        
            case '1': {
                  switch (arr[1]) {
         
                case '1':{ b="eleven"; break;}
                case '2':{ b="twelve"; break;}
                case '3':{ b="thirteen"; break;}
                case '4':{ b="fourteen"; break;}
                case '5':{ b="fifteen"; break;}
                case '6':{ b="sixteen"; break;}
                case '7':{ b="seventeen"; break;}
                case '8':{ b="eighteen"; break;}
                case '9':{ b="nineteen"; break;}
                case '0':{ b="ten"; break;}
        };
                
                ; break;
            }
                case '2': {b="twenty"; break;}
                case '3': {b="thirty"; break;}
                case '4': {b="forty"; break;}
                case '5': {b="fifty"; break;}
                case '6': {b="sixty"; break;}
                case '7': {b="seventy"; break;}
                case '8': {b="eighty"; break;}
                case '9': {b="ninety"; break;}
                case '0': {b=""; break;}
        };
        if (arr[0] !== "1") {
         switch (arr[1]) {
         
                case '1':{ c="one"; break;}
                case '2':{ c="two"; break;}
                case '3':{ c="three"; break;}
                case '4':{ c="four"; break;}
                case '5':{ c="five"; break;}
                case '6':{ c="six"; break;}
                case '7':{ c="seven"; break;}
                case '8':{ c="eight"; break;}
                case '9':{ c="nine"; break;}
                case '0':{ c=""; break;}
        };   
        }
    
        
        let s2 =" "
        if (b == "") { s1 = "" }
        else if (c == "") { s2 = "" }
        else if (b == "" && c == "") { s1 = "", s2 = "" }
        
        
     let res = b+s2+c
    return res   
    }
    else {
        
        let c =""
        switch (arr[0]) {
         
                case '1':{ c="one"; break;}
                case '2':{ c="two"; break;}
                case '3':{ c="three"; break;}
                case '4':{ c="four"; break;}
                case '5':{ c="five"; break;}
                case '6':{ c="six"; break;}
                case '7':{ c="seven"; break;}
                case '8':{ c="eight"; break;}
                case '9':{ c="nine"; break;}
                case '0':{ c="zero"; break;}
    };
        return c
    }
   
}
