import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Rows from "../components/Rows";
import requests from "../Requests";

export default function Home() {
    return (
        <div className="">
            <Nav />
            <Banner />
            <Rows
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Rows
                title='Trending Now'
                fetchUrl={requests.fetchTrending}
            />
            <Rows
                title='Top Rated'
                fetchUrl={requests.fetchTopRated}
            />
            <Rows
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
            />
            <Rows
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
            />
            <Rows
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Rows
                title='Romance Movies'
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Rows
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
};