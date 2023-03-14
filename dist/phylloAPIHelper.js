

const url = new URL(window.location.toLocaleString());
const parameters = new URLSearchParams(url.search);
const external_id = parameters.get('id');
const pid = parameters.get('pid');
const sdk = parameters.get('sdk');


  localStorage.setItem('pid', pid.toString());
  localStorage.setItem('external_id', external_id.toString());
  localStorage.setItem('sdk', sdk.toString());
  localStorage.setItem('isExistingUser', isExistingUser.toString());



