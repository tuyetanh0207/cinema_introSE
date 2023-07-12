import { showtimeInterface } from "../api/apiResponse";
import showtimeAPI from "../api/showtimeAPI";

type Props = {
    params: { movie: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

export default function Layout (children:any){
return {children}
}

export async function generateMetadata(
  { params, searchParams }:Props
) {


    const id = params.movie;
   
    const res= await showtimeAPI.getShowtime(id);
    const movie=res.data  
console.log("Movie: ", movie)
    return {
    title: movie.movie.title
    };

}
export async function generateStaticParams() {
  const res= await showtimeAPI.getAllShowtimes();
  const movies=res.data
  // console.log("Movies path: ", movies)
  return movies.map((movie:showtimeInterface) => ({
    movie: movie.id,
  }));
}