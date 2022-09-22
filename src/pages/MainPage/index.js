import React from 'react'
import requests from '../../api/requests'
import Banner from '../../component/Banner'
import Row from '../../component/Row'

export default function MainPage() {
    return (
        <div>
            <Banner />
            <Row
                title="NETFILX ORIGINALS"
                id="NO"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" id="TR" fetchUrl={requests.fetchToRated} />
            <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
        </div>
    )
}
