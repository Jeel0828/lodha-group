import React from "react";
import Header from "../Header";
import Hero from "./Hero";
import Review from "./Review";
import { Car } from "lucide-react";
import Carpet from "./Carpet";
import Amenities from "./Amenities";
import Location from "./Location";
import Video from "./Video";
import Book from "./Book";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Review />
      <Carpet />
      <Amenities />
      <Location />
      <Video />
      <Book />
      <Footer />
    </div>
  );
};

export default Home;
