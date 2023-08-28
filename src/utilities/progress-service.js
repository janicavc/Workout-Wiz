import sendRequest from "./send-request";

const BASE_URL = '/api/progress';


export async function createProgress(progressData) {
    return sendRequest(`${BASE_URL}/progress`, 'POST', progressData);
}

export async function getProgress() {
    return sendRequest(`${BASE_URL}/progress`, 'GET');
  }