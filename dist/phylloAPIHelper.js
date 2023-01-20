
// Base url For sandbox  
const PHYLLO_BASE_URL = "https://api.staging.getphyllo.com";

const URL_CREATE_SDK_TOKEN = "/v1/sdk-tokens";
const URL_CREATE_USER = "/v1/users";

const PHYLLO_CLIENT_ID = "getfromurlparam1 CID";
const PHYLLO_SECRET_ID = "getfromurlparam2 SEC";

// encode client_id:secret to base-64
const AUTH_KEY = window.btoa(PHYLLO_CLIENT_ID+":"+PHYLLO_SECRET_ID);
