import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import MovieList from "../Components/MovieList";

configure({ adapter: new Adapter() });

test('MovieList Component renders correctly', () => {

    const movies = [{
        "id": 1,
        "title": "The Grinch",
        "imdb_id": "2709692",
        "url": "https://www.imdb.com/title/tt2709692/?ref_=rlm",
        "image_url": "https://m.media-amazon.com/images/M/MV5BYmE5Yjg0MzktYzgzMi00YTFiLWJjYTItY2M5MmI1ODI4MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "release_date": "29 November 2018",
        "rating": 5.6
    }];
    const wrapper = mount(
        <MovieList movies={movies}/>
    );
    const movieListSection = wrapper.find('.movie-section');

    expect(movieListSection).toBeDefined();
});

