import axios from 'axios';

const KEY = 'AIzaSyCqK8VipYhmXLUJk_o8RikYd4NTvvHsQF4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
