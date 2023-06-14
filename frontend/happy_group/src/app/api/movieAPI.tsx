import { apiV1, apiV1_user, get, post, put, patch, delele} from "./generic";

const movieAPI = {
  
  getNowShowingMovies: function () {
    const url = `${apiV1}/showtimes/now-showing`;
    return get(url, "");
  },
  geComingSoonMovies: function () {
    const url = `${apiV1}/showtimes/comingSoon`;
    return get(url, "");
  },
  searchMovie: function (query:string){
    const url=`${apiV1}/search?q=${query}`;
    return get(url, "");
  },
  getAllMovies: function (token: string) {
    const url =`${apiV1}/movies/`;
    return get(url,token);
  },
  getMovie: function (id: string){
    const url =`${apiV1}/movies/${id}`;
    return get (url,"");
  },
 
  quickBuyTicket: function (query:string) {
    const url = `${apiV1}/quick-buy/${query}`;
  },
  getDateOfShowtime: function (id:string) {
    const url = `${apiV1}/quick-buy/date/${id}`;
    return get(url, "");
  },


  getTheatreOfShowtime: function (id:string,date:string) {
    const url = `${apiV1}/quick-buy/theatre/${id}/${date}`;
    return get(url, "");
  },

  getTimeOfShowtime: function (id:string,date:string,theatre: string) {
    const url = `${apiV1}/quick-buy/time/${id}/${date}/${theatre}`;
    return get(url, "");
  },



  getUpComingMovies: function () {
    const url = `${apiV1}/showtimes/upcoming`;
    return get(url, "");
  },

  getIDSeat: function(){
    const url = `${apiV1}/seats`;
    return get(url, "");
  },
  getAllSeats: function(){
    const url = `${apiV1}/seats/`;
    return get(url, "");
  },
  

};

export default movieAPI;
