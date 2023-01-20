
// Base url For sandbox  
const PHYLLO_BASE_URL = "https://api.sandbox.getphyllo.com";

const URL_CREATE_SDK_TOKEN = "/v1/sdk-tokens";
const URL_CREATE_USER = "/v1/users";

const PHYLLO_CLIENT_ID = "null";
const PHYLLO_SECRET_ID = "null";

// encode client_id:secret to base-64
const AUTH_KEY = window.btoa(PHYLLO_CLIENT_ID+":"+PHYLLO_SECRET_ID);

const getAxiosInstance = () => {
  const api = axios.create({
    baseURL: PHYLLO_BASE_URL,
    headers: {
      'Authorization':'Basic ' + AUTH_KEY
    },
  });
  return api;
};
const createUser = async (name, externalId, isExistingUser) => {
  try {
    const userId = await localStorage.getItem("PHYLLO_USERID");
    if (isExistingUser) {
      return userId;
    } else if (!isExistingUser || !Boolean(userId)) {
      const api = getAxiosInstance();
      let response = await api.post(URL_CREATE_USER, {
        name: name,
        external_id: externalId,
      });
      await localStorage.setItem("PHYLLO_USERID", response.data.id);
      return response.data.id;
    }
  } catch (err) {
    console.error(`Error ${err} occurred while generating user token`);
    return err.body;
  }
};

const createSDKToken = async (userId) => {
  if (!userId) {
    let err = new Error("User id cannot be blank or null");
    throw err;
  }
  try {
    const api = getAxiosInstance();
    let response = await api.post(URL_CREATE_SDK_TOKEN, {
      user_id: userId,
      products: ["IDENTITY", "ENGAGEMENT"],
    });
    return response.data.sdk_token;
  } catch (err) {
    console.error(`Error ${err} occurred while generating user token`);
    return err.body;
  }
};
