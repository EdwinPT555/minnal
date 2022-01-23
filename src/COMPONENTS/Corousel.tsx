import React from 'react';
import './ComponentStyles.scss';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

type Props = {};

const Corousel = (props: Props) => {
    return (
        <Carousel showThumbs={false} emulateTouch infiniteLoop autoPlay dynamicHeight={false}>
            <div>
                <img className='imgContainer' alt='' src="https://i1.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/10/1200x675.png?fit=1200%2C675&ssl=1" />
            </div>
            <div>
                <img className='imgContainer' alt='' src="https://i.gadgets360cdn.com/large/flipkart_big_billion_days_2021_sale_image_1632231040329.jpg?downsize=950:*" />
            </div>
            <div>
                <img className='imgContainer' alt='' src="https://trak.in/wp-content/uploads/2020/10/IMG_20201015_102047-1024x573.jpg" />
            </div>
        </Carousel>
    )
};

export default Corousel;
