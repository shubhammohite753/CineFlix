import React, { useState } from "react";
import "./Cineflicks.css";
import CategoryTab, { Categories } from "../CategoryTab/CategoryTab";
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import Welcome from "../Welcome/Welcome";
import MovieCarousel from "../Movies/MovieCarousel";
import cineflicksImg from "../../assest/cineflicksImg.png";
import diwali from "../../assest/diwali.png";
import happy from "../../assest/happy.png";
import {
  trendingMovies,
  romanceMovies,
  thrillerMovies,
  hindiMovies,
  tvShow,
  festiveFevourits,
  behindTheScenes,
  topPicks,
  newReleases,
  webSeries,
} from "../Movies/data.js";
import WatchInYourLanguage from "../WatchInYourLanguage/WatchInYourLanguage.js";

const Cineflicks = () => {
  return (
    <div>
      <CategoryTab />
      <CarouselSlide />
      <Welcome />
      <MovieCarousel headerTitle="Trending Now" movies={trendingMovies} />
      <Categories />
      <MovieCarousel headerTitle="Romance Movies" movies={romanceMovies} />
      <MovieCarousel headerTitle="Thriller Movies" movies={thrillerMovies} />
      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div className="responsive-div"
          style={{
            display: "grid",
            placeItems: "center",
            width: "786px",
            height: "113px",
            backgroundImage: `url(${happy})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            margin: "0 auto",
            marginTop: "40px",
          }}
        ></div>
      </div>

      <MovieCarousel headerTitle="Hindi Movies" movies={hindiMovies} />
      <MovieCarousel headerTitle="US TV Show" movies={tvShow} />
      <div className="diwali"
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          width: "100%",
          height: "320px",
          backgroundImage: `url(${diwali})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <MovieCarousel
        headerTitle="Festive Fevourits"
        movies={festiveFevourits}
      />
      <WatchInYourLanguage />
      <MovieCarousel headerTitle="Behind The Scenes" movies={behindTheScenes} />
      <MovieCarousel headerTitle="Top Picks" movies={topPicks} />
      <div className="cine"
        style={{
          display: "grid",
          gridTemplateRows: "1fr auto",
          width: "100%",
          height: "670px",
          backgroundImage: `url(${cineflicksImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div></div>

        <MovieCarousel
          headerTitle="New Releases"
          movies={newReleases}
          style={{
            width: "100%",
            margin: "1 auto",
          }}
        />
      </div>

      <MovieCarousel headerTitle="Web Series" movies={webSeries} />
    </div>
  );
};

export default Cineflicks;
