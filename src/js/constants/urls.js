const ROOT_URL = "http://127.0.0.1:8000";

export const AuthUrls = {
  LOGIN: `${ROOT_URL}/rest-auth/login/`
};

export const ActionUrls = {
  GET_USER: `${ROOT_URL}/api/v1/profiles/1/`,
  GET_PINS: `${ROOT_URL}/api/v1/pins/1/`,
  SAVE_PIN: `${ROOT_URL}/api/v1/pins/add/`,
  REMOVE_PIN: `${ROOT_URL}/api/v1/pins/delete/`
};