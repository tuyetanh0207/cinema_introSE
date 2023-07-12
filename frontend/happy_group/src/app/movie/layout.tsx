
import { Metadata, ResolvingMetadata } from "next";
import { showtimeInterface } from "../api/apiResponse";
import showtimeAPI from "../api/showtimeAPI";

type Props = {
    params: { movie: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

export default function Layout ({
    children,
  }: {
    children: React.ReactNode
  }) {
return {children}
}


// export function generateMetadata() {
//     return new Promise((resolve) => {
//       resolve({});
//     });
//   }
// export async function generateStaticParams() {
//   const res= await showtimeAPI.getAllShowtimes();
//   const movies=res.data
//   // console.log("Movies path: ", movies)
//   return movies.map((movie:showtimeInterface) => ({
//     movie: "6489ec98ba4769263484ac62",
//     //movie.id
//   }));
// }