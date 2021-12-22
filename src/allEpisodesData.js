import React from "react";
import ep9 from '../src/assets/NewCoverIMG/9.jpg';
import ep8 from '../src/assets/NewCoverIMG/8.jpg';
import ep7 from '../src/assets/NewCoverIMG/7.jpg';
import ep6 from '../src/assets/NewCoverIMG/6.jpg';
import ep5 from '../src/assets/NewCoverIMG/5.jpg';
import ep4 from '../src/assets/NewCoverIMG/4.jpg';
import ep3 from '../src/assets/NewCoverIMG/3.jpg';
import ep2 from '../src/assets/NewCoverIMG/2.jpg';
import ep1 from '../src/assets/NewCoverIMG/1.jpg';

function episodesData() {
  return(
    [
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-9",
        episode: "9",
        imgPath: ep9,
        altText: "Stellar Sound Season 1: Episode 9",
        guest: "Ania Anahata",
        description: "Ethno multi-dimensional Leo music artist",
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-8",
        episode: "8",
        imgPath: ep8,
        altText: "Stellar Sound Podcast Pilot: Episode 5",
        guest: "Orlando Dees",
        description: `Orlando is a singer-songwriter originally from Galicia,
        Spain. The identity of his music project begins with a
        flamenco guitar and airy and soft voices, occasionally
        accompanied by synthesizers.`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-7",
        episode: "7",
        imgPath: ep7,
        altText: "Stellar Sound Podcast Pilot: Episode 4",
        guest: "Zsolt Argyelan",
        description: `Traveling jazz trumpet player and music producer in the
        middle of his debut EP creation.`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-6",
        episode: "6",
        imgPath: ep6,
        altText: "Stellar Sound Podcast Live: Episode 3",
        guest: "Milan Mirić",
        description: `Alternative rock band from Nis, Serbia.`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-5",
        episode: "5",
        imgPath: ep5,
        altText: "Stellar Sound Podcast Live: Episode 2",
        guest: "Anne van Damme",
        description: `A pure, passionate professional musician, songwriter,
        entrepreneur, and music educator.`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-4",
        episode: "4",
        imgPath: ep4,
        altText: "Stellar Sound Podcast Live: Episode 1",
        guest: "GAMMA",
        description: `Creative process, autism and mental health of a musician,
        style and uniqueness of the autor's work, irish bouzouki and
        many more!`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-3",
        episode: "3",
        imgPath: ep3,
        altText: "Stellar Sound Podcast Pilot: Episode 3",
        guest: "Aleksandra Denda",
        description: `Living in New York and moving back to Serbia amidst the
        pandemic, being an international musician, co-founding
        traditional serbian vocal group ROSA, musical influences,
        creative process and ‘’Dreamer’’ EP, experience as a music
        educator, impact of pandemic on the mental health, new
        release for international jazz day...`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-2",
        episode: "2",
        imgPath: ep2,
        altText: "Stellar Sound Podcast Pilot: Episode 2",
        guest: "HunBjørn",
        description: `Music education and what skills serve once done, autotune,
        mental state during the pandemic, journal 3 pages a day,
        gender in the music business, social media, strategies to
        improve creativity, Harry Potter...`,
      },
      {
        typeOfEpisode: "Stellar Season 1",
        episodePath: "episode-1",
        episode: "1",
        imgPath: ep1,
        altText: "Stellar Sound Podcast Pilot: Episode 1",
        guest: `Leo from "Just Leo"`,
        description: `Creative process, autism and mental health of a musician,
        style and uniqueness of the autor's work, irish bouzouki and
        many more!`,
      },
    ]
  )
} 

export default episodesData;