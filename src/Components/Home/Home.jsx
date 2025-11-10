import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Banner from '../pages/Banner';
import LatestBook from '../pages/LatestBook';
import BookOfTheweek from '../pages/BookOfTheweek';
import AboutBookHaven from '../pages/AboutBookHaven';

const Home = () => {
  // const {name} = use(AuthContext)

  return (
    <div>
      <Banner></Banner>
      <LatestBook></LatestBook>
      <BookOfTheweek></BookOfTheweek>
      <AboutBookHaven></AboutBookHaven>
    </div>
  );
};

export default Home;