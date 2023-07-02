import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic"; //

const AdminAPI = {
  getAllShowtime: function () {
    const url = `${apiV1}/showtimes/`;
    return get(url, "");
  },

  getScheByID: function (id: string){
    const url =`${apiV1}/schedules/showtime/${id}`;
    return get (url,"");
  },


}
export default AdminAPI;
