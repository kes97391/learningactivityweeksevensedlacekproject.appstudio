
customerDelete.onshow=function(){
  query = "SELECT * FROM customer" 
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=kes97391&query=" + query)
}

btnSubmitDelete.onclick=function(){
  
}
