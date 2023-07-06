import requests from "./request";
const api = "192.168.43.7:9001"
// const api = "192.168.20.185:9006"

//uh
export const upload_file_api = (data) =>
    requests({ url: 'http://' + api + '/uploadfiles/', method: "post", data });
export const execute_file_api = (data) =>
    requests({ url: 'http://' + api + '/execute/', method: "post", data});
export const get_kg = (data) =>
    requests({ url: 'http://' + api + '/get_kg/', method: "get", data});
export const get_pic_url = (data) =>
    requests({ url: 'http://' + api + '/get_pic_url/', method: "get", data});