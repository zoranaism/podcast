import React from "react";
import EpisodeComponent from "../../../components/EpisodePage.component";

export default function Episode6() {
  return (
    <EpisodeComponent
      episodeName='Season 1 | Episode 6'
      host="radina"
      guest=" Zsolt Argyelan"
      guestLink="https://www.youtube.com/watch?v=y3GKavuTrRk"
      spotifyLink="https://open.spotify.com/episode/2LRMrXjomKiuIE6VcCEH34"
      youtubeLink="https://www.youtube.com/watch?v=XKd36gUUrOQ&t=2975s"
      applePodcastsLink="https://podcasts.apple.com/rs/podcast/pilot-episode-4-guest-zsolt-argyelan-host-radina-dimcheva/id1556200413?i=1000527570484"
      sponsor="ketz"
      spotifyPlayerLink="https://open.spotify.com/embed/episode/2LRMrXjomKiuIE6VcCEH34"
      description1='In our sixth episode, you will get to know our guest Zsolt Argyelan, an extremely talented jazz trumpet player and music producer who shared with us his thoughts on many different topics, such as music through time, his creative process & inspiration, how he chose his favorite instrument, etc.'
      description2='There are many fun details he went through, which nicely spiced up the conversation. Make yourself comfortable, put this episode on and explore another musical galaxy from Zsolt’s perspective.'
      description3=''
      description4=''
      guestsImagePath="img/episodes/guests/zsolt-image.webp"
      prevEpisode='Episode 5: Milan Mirić'
      prevEpisodePath="episode-5"
      prevEpisodeImgPath="https://d33wubrfki0l68.cloudfront.net/35eca5afe78538560dc82ee9d1cdad38b36206b4/80736/img/newcoverimg/5.jpg"
      nextEpisodePath="episode-7"
      nextEpisodeImgPath="https://d33wubrfki0l68.cloudfront.net/1fe94c1cf438cb55a650295ebe243cc5b6d4ca72/f0688/img/newcoverimg/7.jpg"
      nextEpisode='Episode 7: Anne Van Damme'
    />
  );
}