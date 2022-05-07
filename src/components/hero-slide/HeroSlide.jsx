import React, { useState, useEffect, useRef } from 'react';

import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button, { OutlineButton } from '../button/Button';
import Modal, { ModalContent } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';
// import { useHistory } from 'react-router';

const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(1, 4));
                // console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);
    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
            // autoplay={{delay: 3000}}
            >
                {/* {
                    movieItems && movieItems.length > 0 && movieItems.map((item, i) => (
                        <img src={apiConfig.originalImage(item.backdrop_path)} alt="" />
                    ))
                } */}
            </Swiper>
            {/* {
                movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            } */}
        </div>
    );
}

export default HeroSlide;
