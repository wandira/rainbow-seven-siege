
function validate()
{
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var address = document.getElementById('address').value;
  var gtype = document.getElementById('gtype').value;
  var copy = document.getElementById('copy').value;
  var form = document.getElementById('form')
  var errorElement = document.getElementById('error')
  const cb = document.getElementById('terms');

  if(name.length === 0)
  {
    text = "Please fill in your name"
    errorElement.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length <6)
  {
    text = "Please enter a valid email"
    errorElement.innerHTML = text;
    return false;
  }
  if(password.length < 6)
  {
    text = "Password must be 6 characters or more"
    errorElement.innerHTML = text;
    return false;
  }
  if(address.length === 0)
  {
    text = "Please fill in your address"
    errorElement.innerHTML = text;
    return false;
  }
  if(!gtype.includes("regular") && !gtype.includes("premium"))
  {
    text = "Game Type must be Regular or Premium"
    errorElement.innerHTML = text;
    return false;
  }
  if(isNaN(copy) || copy.length === 0 || copy == 0)
  {
    text = "Number of Copies must be greater than 0 and Must be a number"
    errorElement.innerHTML = text;
    return false;
  }
  if(document.querySelector('#terms:checked') === null)
  {
    text = "Pleaae agree to the terms and agreements"
    errorElement.innerHTML = text;
    return false;
  }

  alert("Order Successfull");
  return true;

}

