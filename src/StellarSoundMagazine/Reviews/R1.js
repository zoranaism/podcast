import React from "react";
import SingleReviewPage from "../components/SingleReviewPage";

export default function R1() {
  return (
    <SingleReviewPage
      episodeName="Season 1 | Episode 1"
      host="radina"
      guest=" Leo from Just Leo"
      guestLink="https://www.youtube.com/c/JustLeoMusic"
      spotifyLink="https://open.spotify.com/episode/5fzmLikjxvphHwHvFK3tZp"
      youtubeLink="https://www.youtube.com/watch?v=TGnHphK3LGU&t=993s"
      applePodcastsLink="https://podcasts.apple.com/rs/podcast/episode-1-leo-from-just-leo/id1556200413?i=1000511246446"
      sponsor="fae-games"
      spotifyPlayerLink="https://open.spotify.com/embed-podcast/episode/5fzmLikjxvphHwHvFK3tZp"
      description1='Leo or "Just Leo" is a bassist, singer-songwriter and a multi-instrumentalist.'
      description2="From having built a steady community on YouTube, he has now ventured into releasing his debut album in 2021."
      description3='We will explore who stands behind the humble nickname of "Just Leo", 
    how autism and mental health in general play a role in this, and take a peek at his creative strategies.'
      description4=""
      guestsImagePath="img/episodes/guests/JustLeo.webp"
      prevEpisodePath=""
      prevEpisodeImgPath=""
      nextEpisodePath="episode-2"
      nextEpisodeImgPath="https://d33wubrfki0l68.cloudfront.net/be54bad07c87635e123f9f48c2429c492e035d9f/6202a/img/newcoverimg/2.jpg"
      nextEpisode="Episode 2: HunBjørn"
    />
  );
}
