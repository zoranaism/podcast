import React from "react";
import HostComponent from "../../components/Host.component.js";

export default function Hosts() {
  return (
    <div className="container">
      <div className="nj-section-header-episodes" style={{ marginTop: "80px" }}>
        <h1 className="nj-section-header-title-episodes pt-120px">
          stellar hosts
        </h1>
      </div>

      <HostComponent
        name="RADINA DIMCHEVA"
        imagePath="img/hosts/Radina-Dimcheva.webp"
        facebook="https://www.facebook.com/RadinaTheTheaterEquation"
        instagram="https://www.instagram.com/radina_artsy_chameleon/"
        otherSocial=""
        youtubeLink="https://www.youtube.com/user/kukundrela"
        description1='"I call myself an artsy chameleon; everything creative would spark my interest. What brings me joy and meaning is being able to connect with people in a deep way over a certain topic; if that is related to art and music - even more so! I feel like singing allows me to express that in the best way. Currently, I am part of two bands, and the idea to join the Stellar Sound Podcast felt only natural. In my daily job, I am used to interviewing people, so I’m looking forward to all the insights we will gather. By education, I am a psychologist, and by heart - a creative, vocalist, and overall artistic and empathetic person."'
        description2=""
        description3=""
      />

      <HostComponent
        name="JUSTEN WILLIAMS"
        imagePath="img/hosts/Justen-Williams.webp"
        facebook=""
        instagram="https://www.instagram.com/jus10williams/"
        otherSocial="https://twitter.com/jus10williams"
        youtubeLink="https://www.youtube.com/channel/UCbeTpbH9rnJVrU4vahU-ZTA"
        description1='"Hi there! My name is Justen Williams. I am a comedian, actor and podcaster from Toronto, Ontario Canada. I used to operate a solo podcast called “The gift of gab” where I would interview a wide range of local talent. As an actor, I have not done anything too big; but my claim to fame is a commercial on YouTube which has 1.2 Million views. I recently teamed-up with two other gentlemen to form Pro Sports Podcasters, where we interview athletes and where we shed light on sports which do not get enough TV time. Finally, as a comic (which is my true passion), I have performed in various cities across North America, and Germany. I look forward to e-meeting all of you!"'
        description2=""
        description3=""
      />
    </div>
  );
}
