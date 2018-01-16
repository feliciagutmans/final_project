/*
********************************************************************************
Student Number: 1300 8920
INSTG018 Introduction to Programming and Scripting
Dr. Rob Miller
Coursework 3
***********************************************************************************************
*/


// Defines max amount of customers allowed on trampoline at one time to be 5
const MAX_CUSTOMERS = 4;

// Defines customer list as an array
var customerList = new Array();

function addAndDisplayCustomer ()
{
  if (customerList.length > MAX_CUSTOMERS)
      //Error message when over 5 customers on trampoline
      alert ('Error- max number of customers reached. Please remove customers');
    {
     var newIndex = customerList.length;
     customerList[newIndex] = new Object;
     customerList[newIndex].name = document.getElementById('name').value.trim();
     while (customerList[newIndex].name== '')
       // Error message when name input left blank
       customerList[newIndex].name = prompt('Error- Please enter a name.').trim();
     var opt = document.getElementById('childOrAdult');
     customerList[newIndex].type = opt.options[opt.selectedIndex].value;
     displayCustomers();
    }
}

function displayCustomers()
{
  if (customerList.length==0)
  //Default message on landing page before any customers are added
  document.getElementById('outputDiv').innerHTML ='[There are currently no customers on the trampoline.]';
  else
  {
    customerList = customerList.sort(compare)
    var message='<center><table><tr><td><b>&nbsp;CUSTOMER NAME&nbsp;</b></td><td><b>&nbsp;CUSTOMER TYPE&nbsp;</b></tr>';
    for (var i = 0 ; i < customerList.length ; i++)
    {
        message += '<tr><td><center>&nbsp;' + customerList[i].name + ' &nbsp;</td><td><center>&nbsp;' + customerList[i].type
          // Adding the "remove this customer" button
        + '&nbsp;</td><td><button type="button" onclick="deleteCustomer(\'' +customerList[i].name + '\',\''
        + customerList[i].type  + '\'); displayCustomers();">remove this customer</button></td></tr>';
    }
        message += '</table></center>'
    document.getElementById('outputDiv').innerHTML = message;
  }
  customerList.sort();
}

// Allows user to delete specific customers using "remove this cusomter" button
function deleteCustomer (aName, aType)
{
  for (i=0;i < customerList.length;i++)
  {
    //Tells function to run when corresponding user name and status type inputted
    if (customerList[i].name==aName && customerList[i].type == aType)
    {
      while(i < customerList.length -1)
      {
        customerList[i].name = customerList[i+1].name;
        customerList[i].type = customerList[i+1].type;
        i++
      }
      // Removes the customer
      customerList.length--;
    }
  }
}

function compare (customer1,customer2)
{
  return customer1.name.localeCompare(customer2.name);
}
