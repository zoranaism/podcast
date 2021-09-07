import React from "react";
import EpisodeComponent from "../../../components/EpisodePage.component";

export default function Episode8() {
  return (
    <EpisodeComponent
      episodeName='Stellar Live | Episode 8'
      host="justen"
      guest="Orlando Dees"
      guestLink="https://www.youtube.com/watch?v=gIrjLIFRPj4"
      spotifyLink="https://open.spotify.com/show/4b4Nokn6zf9wWcZkDikazp"
      youtubeLink="https://www.youtube.com/watch?v=fGdILeNQ1-o&t=580s"
      applePodcastsLink="https://podcasts.apple.com/rs/podcast/stellar-sound-podcast/id1556200413"
      sponsor="fae-games"
      spotifyPlayerLink="https://open.spotify.com/embed/track/6NZIIySmh7JfINapXqmsQB"
      description1='The fourth episode of the Stellar Live Series is dedicated to Orlando Dees.'
      description2='Orlando is a singer-songwriter originally from Galicia, Spain. After living and working in Bavaria, playing drums with various bands, he moved to Berlin for two years to develop his own music.'
      description3='The identity of his music project begins with a flamenco guitar and airy and soft voices, occasionally accompanied by synthesizers. He is currently working on his first LP "Arcadia", which is expected to be recorded this 2021.'
      description4=''
      guestsImagePath="img/episodes/guests/orlando-dees.webp"
      prevEpisode='Episode 7: Zsolt Argyelan'
      prevEpisodePath="episode-7"
      prevEpisodeImgPath="img/episodes/episodes-cover/pilot/episode-4-cover.webp"
      nextEpisodePath="episode-9"
      nextEpisodeImgPath="img/episodes/episodes-cover/pilot/episode-5-cover.webp"
      nextEpisode='Episode 9: Ania Anahata'
    />
  );
}