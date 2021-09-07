import React from "react";
import EpisodeComponent from "../../../components/EpisodePage.component";

export default function Episode7() {
  return (
    <EpisodeComponent
      episodeName='Pilot Episodes | Episode 7'
      host="radina"
      guest="Zsolt Argyelan"
      guestLink="https://www.youtube.com/watch?v=y3GKavuTrRk"
      spotifyLink="https://open.spotify.com/episode/2LRMrXjomKiuIE6VcCEH34"
      youtubeLink="https://www.youtube.com/watch?v=XKd36gUUrOQ&t=2975s"
      applePodcastsLink="https://podcasts.apple.com/rs/podcast/pilot-episode-4-guest-zsolt-argyelan-host-radina-dimcheva/id1556200413?i=1000527570484"
      sponsor="ketz"
      spotifyPlayerLink="https://open.spotify.com/embed/episode/2LRMrXjomKiuIE6VcCEH34"
      description1='In our 4th episode, you will get to know our guest Zsolt Argyelan, an extremely talented jazz trumpet player and music producer who shared with us his thoughts on many different topics, such as music through time, his creative process & inspiration, how he chose his favorite instrument, etc.'
      description2='There are many fun details he went through, which nicely spiced up the conversation. Make yourself comfortable, put this episode on and explore another musical galaxy from Zsolt’s perspective.'
      description3=''
      description4=''
      guestsImagePath="img/episodes/guests/zsolt-image.webp"
      prevEpisode='Episode 6: Milan Mirić'
      prevEpisodePath="episode-6"
      prevEpisodeImgPath="img/episodes/episodes-cover/live/live-streaming-episode3-cover-milan-miric.webp"
      nextEpisodePath="episode-8"
      nextEpisodeImgPath="img/episodes/episodes-cover/live/live-streaming-episode4-cover-orlando-dees.webp"
      nextEpisode='Episode 8: Orlando Dees'
    />
  );
}