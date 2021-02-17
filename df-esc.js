var url = Java.type('java.net.URL');
var myUrl = new url("https://bgtian.life/content"); 
var con = myUrl.openConnection(); 
con.setRequestMethod("GET"); 
con.setRequestProperty("User-Agent", "Gigya User-Agent"); 
var responseCode = con.getResponseCode(); 