module.exports = function check(str, bracketsConfig) {
  

   
 
    const a = "()",
     b = "[]",
     c = "{}",
     arrival = [],
     arrival2 = [];
 
    for (var i = 0; i < str.length; i++){
        if(str[i] == a[0] || str[i] == a[1] || str[i] == b[0] || str[i] == b[1] || str[i] == c[0] || str[i] == c[1]){
            arrival.push(str[i]);
        }
    }
 
    if(arrival[0] == a[1] || arrival[0] == b[1] || arrival[0] == c[1]){
        return false;
    }
    else {
        for (var j = 0; j < arrival.length; j++){
            if(j == 0){
                arrival2.push(arrival[j])
            }
            else {
                if(arrival[j] == a[0] || arrival[j] == b[0] || arrival[j] == c[0]){
                    arrival2.push(arrival[j])
                }
                else {
                    const str2 = '' + arrival2[arrival2.length - 1] + '' + arrival[j];
 
                    if (str2 == a || str2 == b || str2 == c){
                        arrival2.pop();
                    }
                    else {
                        return false;
                    }
                }
            }
        }
    }
 
    return true;
}