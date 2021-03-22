
customerSelect.onshow=function(){
  // set height property of text area control 
  // - special code 
  txtaDisplayCustomers.style.height = "100px"
}


btnCustomers.onclick=function(){
  query = "SELECT * FROM customer"
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)
}
