
// Base url For staging  
const XANO_BASE_URL = "https://x8ki-letl-twmt.n7.xano.io/api:1zR1S5hR";

// const URL_CREATE_SDK_TOKEN = "/v1/sdk-tokens";
const URL_GET_ME = "/auth/me";

const url = new URL(window.location.toLocaleString());
const parameters = new URLSearchParams(url.search);
const auth = parameters.get('auth');
const handle = parameters.get('handle');
const external_id = parameters.get('id');
const pid = parameters.get('pid');
const sdk = parameters.get('sdk');
const isExistingUser = parameters.get('exists');
const workpid = parameters.get('workpid');
const platform = parameters.get('platform');


  localStorage.setItem('auth', auth.toString());
  localStorage.setItem('pid', pid.toString());
  localStorage.setItem('external_id', external_id.toString());
  localStorage.setItem('handle', handle.toString());
  localStorage.setItem('sdk', sdk.toString());
  localStorage.setItem('isExistingUser', isExistingUser.toString());
  localStorage.setItem('workpid', workpid.toString());
  localStorage.setItem('platform', platform.toString());
  



