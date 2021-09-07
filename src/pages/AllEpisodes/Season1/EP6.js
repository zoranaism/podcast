import React from "react";
import EpisodeComponent from "../../../components/EpisodePage.component";

export default function Episode6() {
  return (
    <EpisodeComponent
      episodeName='Stellar Live | Episode 6'
      host="justen"
      guest="Milan Mirić"
      guestLink="https://www.youtube.com/channel/UCahOzb6W2pgelfaNri4MiIA/featured"
      spotifyLink="https://open.spotify.com/episode/2U9Q1Djhl6AG1DxgBno4mu"
      youtubeLink="https://www.youtube.com/watch?v=fGdILeNQ1-o&t=580s"
      applePodcastsLink="https://podcasts.apple.com/rs/podcast/live-episode-3-guest-milan-miric-host-justen-williams/id1556200413?i=1000529887511"
      sponsor="fae-games"
      spotifyPlayerLink="https://open.spotify.com/embed/episode/2U9Q1Djhl6AG1DxgBno4mu"
      description1='This is a third episode from the Stellar Live Series. We are exploring songwriting with Milan, a songwriter, guitarist, and vocalist from the alternative rock band Ego.'
      description2='Ego was formed in Nis, Serbia in 2009 as a result of great love and obsession with music. Today, this band is eagerly awaiting the "Mechanisms": album release accompanied by punchy guitar riffs, energetic rhythm, and vocals that fluctuate between angry and melancholic. They have just released their debut single "Hypnotech"!'
      description3=''
      description4=''
      guestsImagePath="img/episodes/guests/milan-miric.webp"
      prevEpisode='Episode 5: Anne van Damme'
      prevEpisodePath="episode-5"
      prevEpisodeImgPath="img/episodes/episodes-cover/live/live-streaming-episode2-cover-anne-van-damme.webp"
      nextEpisodePath="episode-7"
      nextEpisodeImgPath="img/episodes/episodes-cover/pilot/episode-4-cover.webp"
      nextEpisode='Episode 7: Zsolt Argyelan'
    />
  );
}