import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic";

const showtimeAPI = {
  
//   getNowShowingMovies: function () {
//     const url = `${apiV1}/showtimes/nowShowing`;
//     return get(url, "");
//   },
//   geComingSoonMovies: function () {
//     const url = `${apiV1}/showtimes/comingSoon`;
//     return get(url, "");
//   },
//   searchMovie: function (query:string){
//     const url=`${apiV1}/search?q=${query}`;
//     return get(url, "");
//   },
  getAllShowtimes: function () {
    const url =`${apiV1}/showtimes/`;
    return get(url,"");
  },
  getShowtime: function (id: string){
    const url =`${apiV1}/showtimes/id/${id}`;
    return get (url,"");
  },
  quickbuy: function (showtimeId: string, theatre: string, date:string){
    const url =`${apiV1}/schedules/search/?showtimeId=${showtimeId}&&theatre=${theatre}&&date=${date}`
    return get(url, "")
  }
 
 
};

export default showtimeAPI;
