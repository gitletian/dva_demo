import request from '../utils/request';


function getUser() {
    return request('/data');
}

export default { getUser };


