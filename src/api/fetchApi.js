import AxiosClient from './AxiosClient';

const FeedAPI = {
  getListFeed() {
    return AxiosClient.get('listFeed');
  },
  addListFeed(res) {
    return AxiosClient.post('listFeed', res);
  },
  deleteListFeed(id) {
    return AxiosClient.delete(`listFeed/${id}`);
  },
};
export default FeedAPI;
