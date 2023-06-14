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
//   getAllMovies: function () {
//     const url =`${apiV1}/movies/`;
//     return get(url,"");
//   },
  getShowtime: function (id: string){
    const url =`${apiV1}/showtimes/id/${id}`;
    return get (url,"");
  },
 
 
};

export default showtimeAPI;
