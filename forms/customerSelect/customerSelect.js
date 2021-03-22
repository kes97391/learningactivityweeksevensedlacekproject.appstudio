customerSelect.onshow=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`the results are \n ${results}`)
        if (results.length == 0)    
           lblResults.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaDisplayCustomers.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblResults.value = "Error code: " + req.status
}


