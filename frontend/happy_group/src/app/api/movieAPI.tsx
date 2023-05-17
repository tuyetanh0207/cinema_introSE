import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic";

const movieAPI = {
  
  getNowShowing: function () {
    const url = `${apiV1}/showtimes/nowShowing`;
    return get(url, "");
  },
  getComingMovies: function () {
    const url = `${apiV1}/showtimes/comingSoon`;
    return get(url, "");
  },
  searchMovie: function (query:string){
    const url=`${apiV1}/search?q=${query}`;
    return get(url, "");
  },
  getAllMovies: function () {
    const url =`${apiV1}/movies/`;
    return get(url,"");
  },
  getMovie: function (id: string){
    const url =`${apiV1}/movies/${id}`;
    return get (url,"");
  },

  quickBuyTicket: function (query:string) {
    const url = `${apiV1}/quick-buy/${query}`;
    return get(url, "");
  }



  // patchResource: function (data: any, id: string, token: string) {
  //   const url = `${apiV1}/groups/resources?${id}`;
  //   return patch(url, data, token);
  // },
 
  // postClass: function (data: any, token: string) {
  //   const url = `${apiV1}/groups/class/create`;
  //   return post(url, data, token);
  // },
 
  // deleteResource: function (id: string, token: string) {
  //   const url = `${apiV1}/groups/resources?${id}`;
  //   return delele(url, token);
  // },
  
  // getRole: function (classId: string, token: string) {
  //   const url = `${apiV1}/groups/enrollment/me?classId__eq=${classId}`;
  //   return get(url, token);
  // },
  // patchClass: function (data: any, id: string, token: string) {
  //   const url = `${apiV1}/groups/class?${id}`;
  //   return patch(url, data, token);
  // },
  // deleteClass: function (id: string, token: string) {
  //   const url = `${apiV1}/groups/class?${id}`;
  //   return delele(url, token);
  // },
  // getMembers: function (classId: any, token: string) {
  //   const url = `${apiV1}/groups/enrollment?classId__eq=${classId}`;
  //   return get(url, token);
  // },
  // patchRole: function (data: any, id: string, token: string) {
  //   const url = `${apiV1}/groups/enrollment/${id}`;
  //   return patch(url, data, token);
  // },
  // deleteMember: function (id: string, token: string) {
  //   const url = `${apiV1}/groups/enrollment/${id}`;
  //   return delele(url, token);
  // },
};

export default movieAPI;
