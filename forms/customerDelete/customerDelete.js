
customerDelete.onshow=function(){
  query = "SELECT * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=kes97391&pass=" + pw + "&database=kes97391&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(results)
        if (results.length == 0)    
           lblErrorMessage.value = "There are no customers in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtaDisplayCustomer.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblErrorMessage.value = "Error code: " + req.status
}

btnSubmitDelete.onclick=function(){
    let customerNameDel = inptDeleteHere.value
    let found = false
    for (i = 0; i < results.length; i++) {
        if (customerNameDel == results[i][1]){
            found = true
            break 
        }
    }
    if (found == false) 
       lblDisplayDelete.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"     
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=kes97391&query=" + query)
      if (req.status == 200) //transit worked.
            if (req.responseText == 500)    
                lblDisplayDelete.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblDisplayDelete.value = `There was a problem deleting ${customerNameDel} from the database.`
      else
        lblDisplayDelete.textContent = `Error: ${req.status}`
    } 
}


