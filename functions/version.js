function version(){
  var xhr = new XMLHttpRequest();
  var url = "https://rawgit.com/petrosh/rpgit-system/gh-pages/version.txt";
  xhr.open ( "GET", url, true );
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var resp = xhr.responseText;
      return resp;
    }
  }
}
