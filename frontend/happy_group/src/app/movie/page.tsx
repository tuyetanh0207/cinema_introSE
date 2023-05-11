
import { GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next";
import movieAPI from "../api/movieAPI";
import axios from "axios";

import { Metadata, ResolvingMetadata } from 'next';
import { useEffect, useState } from "react";
type movieInterface = {
    _id: string,
    duration: number,
    title: string,
    image: string,
    language: [],
    genre : [],
    director: string,
    cast : [],
    // releaseDate: string,
    rating: number,
    description: string,
}
type Props = {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };


type MoviesPageProps= {
    movies: movieInterface[];
}

export default function MoviesPage( props: Props) {
// const MoviesPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
    console.log("hihi");
    console.log("pros",props.params);

    // export default function MoviessPage  ({movies}:InferGetStaticPropsType<typeof getStaticProps>) {
    // console.log("hihi");
    // console.log("pros",movies);
    // if (movies===undefined) {
    //     console.log("kaka")
    // }

    // const [moviesss, setMoviesss] =useState<movieInterface[]>([])
    // const fetchMoviesss = async  () => {
    //     const {data:moviessss}= await axios.get<movieInterface[]>("http://localhost:8000/v1/movies/");
    //     setMoviesss(moviessss);
    //     console.log("moviessss: ",moviessss)
    //     console.log("moviessss: ",typeof(moviessss))
  
    // }
    // useEffect(()=> {
    //     fetchMoviesss();
    // },[])
    // console.log("moviesss: ",typeof(moviesss))
    // console.log("moviesss: ",moviesss)
    return <div> Danh sacsh phim
          <ul>
        {/* {props.movies.map((post:any) => (
          <li key={post.id}>{post.title}</li>
        ))} */}
      </ul>
    </div>
}

// export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
//     console.log('Params:', params);
//     const {data:movies}= await axios.get<movieInterface[]>("http://localhost:8000/v1/movies/");
// //    const res = await movieAPI.getAllMovies();
// //    const movies:movieInterface[] = res.data
// console.log("Movies: ", movies)
//    return {
//     props:{movies:movies}
//    }

// }


export async function generateMetadata(
    { params, searchParams }: Props,
    parent?: ResolvingMetadata,
  ): Promise<Metadata> {
    // read route params
    const id = params.id;
   
    // // fetch data
    // const product = await fetch(`https://.../${id}`).then((res) => res.json());
   
    // // optionally access and extend (rather than replace) parent metadata
    // const previousImages = (await parent).openGraph?.images || [];
   
        // fetch data
        const movies = await fetch(`http://localhost:8000/v1/movies/`).then((res) => res.json());
   
        // optionally access and extend (rather than replace) parent metadata
        // const previousImages = (await parent).openGraph?. || [];
    
    // const {data:movies}= await axios.get<movieInterface[]>("http://localhost:8000/v1/movies/");
//    const res = await movieAPI.getAllMovies();
//    const movies:movieInterface[] = res.data
// console.log("Movies: ", movies)

    return {
    title: movies,
    openGraph: movies
     
    };
  }


// 
// export default MoviesPage
// 