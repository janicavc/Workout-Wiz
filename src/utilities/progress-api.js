import sendRequest from "./send-request";

const BASE_URL = '/api/progress';

// export async function fetchProgressByUser(userId) {
//     return sendRequest(`${BASE_URL}/user/${userId}`, 'GET');
// }

export async function createProgress(progressData) {
    return sendRequest(`${BASE_URL}/progress`, 'POST', progressData);
}