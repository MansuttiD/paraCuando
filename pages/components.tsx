import ArrowButton from '../components/ArrowButton';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeartDisLike from '../components/HeartDisLike';
import HeartLike from '../components/HeartLike';
import InputSearch from '../components/InputSearch';
import Label from '../components/Label';
import NextButton from '../components/NextButton';
import SliderCard from '../components/SliderCard';

export default function components() {
  return (
    <div>
      <ul>
        <li>ArrowButton</li>
        <ArrowButton />
        <li>EventCard</li>
        <EventCard />
        <li>Header</li>
        <Header />
        <li>Footer</li>
        <Footer />
        <li>HeartLike</li>
        <HeartLike />
        <li>HeartDisLike</li>
        <HeartDisLike />
        <li>InputSearch</li>
        <InputSearch />
        <li>Label</li>
        <Label category="marcasytiendas" />
        {/* <li>Layout</li> */}
        {/* <Layout /> */}
        <li>NextButton</li>
        <NextButton action="siguiente" />
        {/* <li>SlideNexButton</li>
          <SlideNextButton />
          <li>SlidePrevButton</li>
          <SlidePrevButton /> */}
        <li>SliderCard</li>
        <SliderCard />
      </ul>
    </div>
  );
}
