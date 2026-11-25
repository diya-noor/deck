"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function BreakdownTitle({ day }: { day: number }) {
  return (
    <>
      <div className="breakdown-title-band breakdown-title-band--main"><h2>BREAKDOWN</h2></div>
      <div className="breakdown-title-band breakdown-title-band--day"><p>Day {day}</p></div>
    </>
  );
}

export default function Home() {
  const presentationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = presentationRef.current;
    if (!root) return;

    const sections = root.querySelectorAll<HTMLElement>(".slide");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { root, threshold: 0.25 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main ref={presentationRef} className="presentation" aria-label="The Elementz animated company presentation">
      <section className="slide slide--intro is-visible" aria-label="The Elementz introduction">
        <div className="intro__frame">
          <Image className="slide__image intro__background" src="/elementz-intro-artwork.png" alt="The Elementz Live gold emblem against a nighttime city skyline" fill loading="eager" fetchPriority="high" sizes="100vw" />
        </div>
        <p className="sr-only">The Elementz. Presenting now and forever.</p>
      </section>

      <section className="slide slide--highway" aria-label="Get Plugged In">
        <Image className="slide__image highway__background" src="/elementz-highway-artwork.png" alt="" fill sizes="100vw" />
        <div className="highway__signs" aria-hidden="true">
          <div className="sign-layer sign-layer--left"><Image className="slide__image" src="/elementz-highway-artwork.png" alt="" fill sizes="100vw" /></div>
          <div className="sign-layer sign-layer--center"><Image className="slide__image" src="/elementz-highway-artwork.png" alt="" fill sizes="100vw" /></div>
          <div className="sign-layer sign-layer--right"><Image className="slide__image" src="/elementz-highway-artwork.png" alt="" fill sizes="100vw" /></div>
        </div>
        <div className="road__focus" aria-hidden="true"><Image className="slide__image" src="/elementz-highway-artwork.png" alt="" fill sizes="100vw" /></div>
        <div className="slide__shade" aria-hidden="true" />
        <p className="highway__disclaimer">
          DISCLAIMER: By submitting content, you agree that this<br />
          site permits Ai use exclusively for images. Any<br />
          submissions identified as Ai-generated art outside of<br />
          images will be rejected and removed.
        </p>
        <div className="sr-only"><p>The Elementz Live, representing now and forever.</p><h1>Get Plugged In</h1><p>Exit. Sortie.</p></div>
      </section>
      <section className="slide slide--mission" aria-label="Our Mission">
        <Image className="mission-artwork" src="/elementz-mission-left.png" alt="A hand plugs a cable into a glowing live music venue" fill sizes="57vw" />
        <div className="mission-copy">
          <h2 className="mission-copy__title">OUR MISSION</h2>
          <h3 className="mission-copy__question">What is The Elementz_Live ?</h3>
          <ul className="mission-copy__list">
            <li><span>The Elementz_Live is a Multi-day, Multi-part event, featuring a summit, a multi-genre arts competition, Live Comedy, live-in-concert performances, a social mixer and more!</span></li>
            <li><span>Our core mission is to create a safe space where artists can express themselves freely and uncover their true potential. With new connections, hands-on learning, and real industry exposure, they walk away equipped with the tools to launch their own careers.</span></li>
            <li><span>We intend to educate the artist and reshape people’s perceptions about hip-hop, its role in the music business, and music culture as a whole. Using our brand and competition as core tools, we expose attendees to history, innovation, business realities of the genre, and more.</span></li>
            <li><span>By the end, we aim for participants to have a stronger sense of clarity and the confidence to share their stories with authenticity.</span></li>
            <li><span>We’re developing and perfecting our system by implementing new ideas, or new technologies into The Elementz_Live each year.</span></li>
          </ul>
        </div>
      </section>
      <section className="slide slide--breakdown" aria-label="Day 1 Breakdown">
        <Image className="slide__image breakdown__background" src="/elementz-breakdown-source.png" alt="Elementz Live event breakdown" fill sizes="100vw" />
        <div className="breakdown__stage-mask" aria-hidden="true" />
        <div className="breakdown-asset breakdown-asset--camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="breakdown-asset breakdown-asset--film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="film-perforations film-perforations--top" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="film-perforations film-perforations--bottom" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="breakdown-photo breakdown-photo--one" aria-hidden="true"><Image src="/image (6).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--two" aria-hidden="true"><Image src="/image (7).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--three" aria-hidden="true"><Image src="/image (8).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--four" aria-hidden="true"><Image src="/image (9).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-reveal breakdown-reveal--heading" aria-hidden="true"><Image className="slide__image" src="/elementz-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="breakdown-reveal breakdown-reveal--copy" aria-hidden="true"><Image className="slide__image" src="/elementz-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <BreakdownTitle day={1} />
      </section>
      <section className="slide slide--day-two" aria-label="Day 2 Breakdown">
        <Image className="slide__image day-two__background" src="/elementz-day-2-breakdown-source.png" alt="Elementz Live Day 2 breakdown" fill sizes="100vw" />
        <div className="day-two__stage-mask" aria-hidden="true" />
        <div className="day-two-asset day-two-asset--camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="day-two-asset day-two-asset--film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="day-two-holes day-two-holes--top" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day2-top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-two-holes day-two-holes--bottom" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day2-bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-two-photo day-two-photo--one" aria-hidden="true"><Image src="/image.jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--two" aria-hidden="true"><Image src="/image (1).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--three" aria-hidden="true"><Image src="/image (2).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--four" aria-hidden="true"><Image src="/image (3).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-reveal day-two-reveal--title" aria-hidden="true"><Image className="slide__image" src="/elementz-day-2-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="day-two-reveal day-two-reveal--heading" aria-hidden="true"><Image className="slide__image" src="/elementz-day-2-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="day-two-reveal day-two-reveal--copy" aria-hidden="true"><Image className="slide__image" src="/elementz-day-2-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <BreakdownTitle day={2} />
      </section>
      <section className="slide slide--day-three" aria-label="Day 3 Breakdown">
        <Image className="slide__image day-three__background" src="/elementz-day-3-breakdown-source.png" alt="Elementz Live Day 3 breakdown" fill sizes="100vw" />
        <div className="day-three__mask" aria-hidden="true" />
        <div className="day-three-asset day-three-camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="day-three-asset day-three-film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="day-three-holes day-three-holes--top" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day3-top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-three-holes day-three-holes--bottom" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day3-bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-three-photo day-three-photo--one" aria-hidden="true"><Image src="/image (15).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--two" aria-hidden="true"><Image src="/image (16).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--three" aria-hidden="true"><Image src="/image (17).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--four" aria-hidden="true"><Image src="/image (18).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-reveal day-three-title" aria-hidden="true"><Image className="slide__image" src="/elementz-day-3-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="day-three-reveal day-three-heading" aria-hidden="true"><Image className="slide__image" src="/elementz-day-3-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="day-three-reveal day-three-copy" aria-hidden="true"><Image className="slide__image" src="/elementz-day-3-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <BreakdownTitle day={3} />
      </section>
      <section className="slide slide--day-four" aria-label="Day 4 Breakdown">
        <Image className="slide__image day-four-bg" src="/elementz-day-4-breakdown-source.png" alt="Elementz Live Day 4 breakdown" fill sizes="100vw" />
        <div className="day-four-mask" aria-hidden="true" />
        <div className="d4-asset d4-camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="d4-asset d4-film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="d4-holes d4-holes-top" aria-hidden="true">{Array.from({length:34},(_,i)=><Image key={`d4t-${i}`} src="/Rectangle 83.png" alt="" width={15} height={17}/>)}</div>
        <div className="d4-holes d4-holes-bottom" aria-hidden="true">{Array.from({length:34},(_,i)=><Image key={`d4b-${i}`} src="/Rectangle 83.png" alt="" width={15} height={17}/>)}</div>
        <div className="d4-photo d4-p1" aria-hidden="true"><Image src="/image (10).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p2" aria-hidden="true"><Image src="/image (12).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p3" aria-hidden="true"><Image src="/image (13).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p4" aria-hidden="true"><Image src="/image (14).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-reveal d4-title" aria-hidden="true"><Image className="slide__image" src="/elementz-day-4-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="d4-reveal d4-heading" aria-hidden="true"><Image className="slide__image" src="/elementz-day-4-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <div className="d4-reveal d4-copy" aria-hidden="true"><Image className="slide__image" src="/elementz-day-4-breakdown-source.png" alt="" fill sizes="100vw" /></div>
        <BreakdownTitle day={4} />
      </section>      <section className="slide slide--competition" aria-label="Competition Breakdown">
        <h2 className="competition-heading">COMPETITION BREAKDOWN</h2>
        <h3 className="competition-subheading">Get Plugged In!</h3>
        <div className="competition-cards">
          {[
            { src: "/AB6AXuBz-wUfjRkBTnAxP3hSbSEYFyMiKFDkvaFM561n0ugr4Su3au6-eThdNykPIkVtiCgrspN-jSv3U90LJ4v6nwCh5LEiZG1I-MXWmsk6Am3J-6zX1yZ8sfCzdRCw6ADaa1CfPfpWP3DzCxueZL7sK_l5-lxvFuZpmIzIhMEuIHl7BodjoeEdySKRlHaEIIe0VxG4EBaa7yclyNM.png", alt: "Vocalist — voice and performance", number: "01", title: "VOCALIST", subtitle: "VOICE • PERFORMANCE" },
            { src: "/image 284.png", alt: "Dance — movement and expression", number: "02", title: "DANCE", subtitle: "MOVEMENT • EXPRESSION" },
            { src: "/Card 03_ DJ.png", alt: "DJ — vibe, sound and energy", number: "03", title: "DJ", subtitle: "VIBE • SOUND • ENERGY" },
            { src: "/Card 04_ BEAT MAKER.png", alt: "Producer — beats and composition", number: "04", title: "PRODUCER", subtitle: "BEATS • COMPOSITION" },
            { src: "/Card 05_ COMEDIAN.png", alt: "Comedian — laughs and personality", number: "05", title: "COMEDIAN", subtitle: "LAUGHS • PERSONALITY" },
            { src: "/Card 06_ MC.png", alt: "MC — bars, truth and presence", number: "06", title: "MC", subtitle: "BARS • TRUTH • PRESENCE" },
            { src: "/Card 07_ GRAFFITI ARTIST.png", alt: "Graffiti artist — originality and vision", number: "07", title: "GRAFFITI ARTIST", subtitle: "ORIGINALITY • VISION" },
            { src: "/Card 08_ FASHION DESIGNER.png", alt: "Fashion designer — style, innovation and skill", number: "08", title: "FASHION DESIGNER", subtitle: "STYLE • INNOVATION • SKILL" },
            { src: "/Card 09_ FILMMAKER.png", alt: "Personalities — vlogs, host and interviews", number: "09", title: "PERSONALITIES", subtitle: "VLOGS • HOST • INTERVIEWS" },
            { src: "/Card 10_ FILM.png", alt: "Filmmaker — story, craft and impact", number: "10", title: "FILMMAKER", subtitle: "STORY • CRAFT • IMPACT" },
          ].map((card) => (
            <div className="competition-card competition-card--captioned" key={card.src}>
              <Image className="competition-card__image" src={card.src} alt={card.alt} fill sizes="19vw" />
              <span className="competition-card__number">{card.number}</span>
              <span className="competition-card__caption">
                <strong>{card.title}</strong>
                <small>{card.subtitle}</small>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="slide slide--siege" aria-label="Siege contest winner">
        <Image className="slide__image siege-bg" src="/elementz-siege-winner-source.png" alt="Siege, first Elementz Live contest winner" fill sizes="100vw" />
        <div className="siege-stage" aria-hidden="true" />
        <div className="siege-half siege-half--left" aria-hidden="true"><Image className="slide__image" src="/elementz-siege-winner-source.png" alt="" fill sizes="100vw" /></div>
        <div className="siege-half siege-half--right" aria-hidden="true"><Image className="slide__image" src="/elementz-siege-winner-source.png" alt="" fill sizes="100vw" /></div>
        <div className="siege-profile-cover" aria-hidden="true" />
        <div className="siege-profile" aria-hidden="true"><Image className="slide__image" src="/elementz-siege-winner-source.png" alt="" fill sizes="100vw" /></div>
        <div className="siege-body-mask" aria-hidden="true" />
        <p className="siege-body-copy"><span>Siege is our very first contest winner. We plan to connect with him again in the near future.</span></p>
      </section>
      <section className="slide slide--siege-story" aria-label="Siege success story">
        <Image className="slide__image siege-story-bg" src="/elementz-siege-story-source.jpg" alt="The Elementz Live competition success story" fill sizes="100vw" />
        <div className="siege-story-stage" aria-hidden="true" />
        <div className="siege-story-half siege-story-left" aria-hidden="true"><Image className="slide__image" src="/elementz-siege-story-source.jpg" alt="" fill sizes="100vw" /></div>
        <div className="siege-story-half siege-story-right" aria-hidden="true"><Image className="slide__image" src="/elementz-siege-story-source.jpg" alt="" fill sizes="100vw" /></div>
        <div className="siege-story-heading-mask" aria-hidden="true" />
        <h2 className="siege-story-heading"><span>THE ELEMENTZ_LIVE IS TRIED,</span><span>TESTED, AND PROVEN TO WORK.</span></h2>
        <div className="siege-story-copy-mask" aria-hidden="true" />
        <div className="siege-story-copy">
          <p><span>Now in its second year, The Elementz_Live competition stands proven and powerful. Our first-year champion, Siege, hit the ground running—touring widely, opening for Lil’ Wayne, and grabbing every opportunity to push his career forward. He’s earned major features with Lil Wayne, Rich Homie Quan(rip), and other standout artists, and his debut album is stacked with elite collaborators and producers. He’s undeniably one to watch.</span></p>
          <p><span>Siege returned home with exclusive production and coveted features. Every partner reached their goals, and every team moved in sync to make it all happen in just one year. That’s the essence of what The Elementz_Live represents.</span></p>
        </div>
      </section>
      <section className="slide slide--fame" aria-label="Elementz Live Wall of Fame">
        <Image className="slide__image fame-bg" src="/bg1.webp" alt="" fill sizes="100vw" />
        <div className="fame-content">
          <header className="fame-heading"><h2>THE ELEMENTZ_LIVE</h2></header>
          <h3 className="fame-subheading">Wall Of Fame</h3>
          <div className="fame-gallery">
            <article className="fame-entry"><div className="fame-frame"><Image className="fame-frame-art" src="/wall-frame-black.webp" alt="" fill sizes="25vw" /><Image className="fame-portrait" src="/Rectangle%20235.png" alt="Mannie Fresh" fill sizes="18vw" /></div><p>Mannie fresh</p></article>
            {[2, 3, 4].map((number) => <article className="fame-entry" key={number}><div className="fame-frame"><Image className="fame-frame-art" src="/wall-frame-black.webp" alt="" fill sizes="25vw" /><Image className="fame-seal-art" src="/logo.webp" alt="The Elementz Live emblem on black" fill sizes="12vw" /></div><p>your favorite artist here</p></article>)}
          </div>
        </div>
      </section>
      <section className="slide slide--judges" aria-label="Elementz Live Judges">
        <Image className="slide__image judges-bg" src="/bg1.webp" alt="" fill sizes="100vw" />
        <div className="judges-content">
          <header className="judges-heading"><h2>THE ELEMENTZ_LIVE JUDGES</h2></header>
          <div className="judges-gallery">
            {[1, 2, 3].map((number) => <article className="judges-entry" key={number}><div className="judges-frame"><Image className="judges-frame-art" src="/wall-frame-black.webp" alt="" fill sizes="25vw" /><Image className="judges-seal-art" src="/logo.webp" alt="The Elementz Live emblem on black" fill sizes="12vw" /></div><p>To Be Announced</p></article>)}
          </div>
        </div>
      </section>
      <section className="slide slide--summit" aria-label="Elementz Live Summit">
        <div className="summit-photo-grid" role="img" aria-label="Hip-Hop 101 artist workshop">
          {Array.from({ length: 30 }, (_, index) => <span className="summit-photo-tile" style={{ backgroundPosition: `${(index % 5) * 25}% ${Math.floor(index / 5) * 20}%` }} key={index} />)}
        </div>
        <div className="summit-panel">
          <header className="summit-heading"><h2>SUMMIT</h2></header>
          <h3 className="summit-subheading">What Element Are You?</h3>
          <div className="summit-copy">
            <article className="summit-copy-card"><span aria-hidden="true">•</span><p>This Summit gives developing artists a rare opportunity to explore the core elements and inner workings of the entertainment industry and Hip‑Hop culture. It’s designed to deepen their understanding, sharpen their skills, and connect them directly with the knowledge and experiences that shape today’s creative landscape.</p></article>
            <article className="summit-copy-card"><span aria-hidden="true">•</span><p>This special workshop offers an exclusive, behind-the-scenes look at how Hip-Hop is assembled. Our line-up of seasoned veterans will share their knowledge and experience with attendees.</p></article>
          </div>
        </div>
      </section>
      <section className="slide slide--schedule" aria-label="Summit Schedule Breakdown">
        <div className="schedule-content">
          <header className="schedule-heading"><h2>BREAKDOWN</h2></header>
          <div className="schedule-table">
            <div className="schedule-col">
              <div className="schedule-cell schedule-cell--header">HOST</div>
              <div className="schedule-cell">11:00PM - 12:00PM</div>
              <div className="schedule-cell">12:00PM 12:15PM</div>
              <div className="schedule-cell schedule-cell--header">HOST</div>
              <div className="schedule-cell">12:15PM 1:30PM</div>
              <div className="schedule-cell">1:30PM 1:45PM</div>
              <div className="schedule-cell schedule-cell--header">HOST</div>
              <div className="schedule-cell">1:45PM 3:00PM</div>
            </div>
            <div className="schedule-col">
              <div className="schedule-cell schedule-cell--header">1st SPEAKER</div>
              <div className="schedule-cell">MIXING, DJING</div>
              <div className="schedule-cell">BREAK &amp; REFRESHMENT</div>
              <div className="schedule-cell">2ND SPEAKER</div>
              <div className="schedule-cell">DRUM STACKING, PRODUCTION</div>
              <div className="schedule-cell">BREAK &amp; REFRESHMENT</div>
              <div className="schedule-cell">3RD SPEAKER</div>
              <div className="schedule-cell">WRITING, INDUSTRY</div>
            </div>
          </div>
          <p className="schedule-note"><span>NOT REAL</span> SCHEDULE ITINERARY IN APP LIVE</p>
        </div>
      </section>
      <section className="slide slide--mobile" aria-label="Elementz Live Mobile Expansion">
        <Image className="mobile-art" src="/flying.webp" alt="Artist using the Elementz Live mobile app while skydiving" fill sizes="55vw" />
        <span className="mobile-app-note">Actual App</span>
        <div className="mobile-panel">
          <header className="mobile-heading"><h2>MOBILE</h2></header>
          <h3 className="mobile-subheading">Gearing Up For An Expansion!</h3>
          <div className="mobile-copy">
            <article className="mobile-copy-card"><h4>NEW APP</h4><p><span aria-hidden="true">•</span>With the launch of a new mobile app and a live, interactive digital format, we are expanding into much larger venues featuring more A-list artists, higher attendance, and a star-studded panel of judges.</p></article>
            <article className="mobile-copy-card"><h4>NEW STRATEGY</h4><p><span aria-hidden="true">•</span>The Elementz_Live App will include a real-time voting feature that serves as the event’s and the Competition’s live hub. All attendees and viewers can vote giving everyone a chance to support and help propel their favorite artist into the Industry!</p></article>
          </div>
        </div>
      </section>
      <section className="slide slide--stats" aria-label="Live event audience statistics" style={{ backgroundImage: "url('/image 195.png')", backgroundPosition: "center", backgroundSize: "100% 100%" }}>
        <Image className="stats-cover" src="/WhatsApp Image 2025-05-25 at 20.48.21_12b7b064.png" alt="" fill sizes="92vw" />
        <div className="stats-cylinder stats-cylinder--large"><Image src="/cylinder.webp" alt="" fill sizes="18vw" /></div>
        <div className="stats-stat stats-stat--large"><strong>52%</strong><span>AGE : 18-24</span></div>
        <div className="stats-cylinder stats-cylinder--medium"><Image src="/cylinder.webp" alt="" fill sizes="15vw" /></div>
        <div className="stats-stat stats-stat--medium"><strong>35%</strong><span>AGE : 25-34</span></div>
        <div className="stats-cylinder stats-cylinder--small"><Image src="/cylinder2.webp" alt="" fill sizes="12vw" /></div>
        <div className="stats-stat stats-stat--small"><strong>15%</strong><span>AGE : 35 +</span></div>
        <p className="stats-quote">“Canadians are attending more, and spending more of their money on live events.”</p>
      </section>
      <section className="slide slide--demographics" aria-label="Elementz Live Demographics">
        <Image className="slide__image demographics-bg" src="/demographics-bg.webp" alt="Elementz Live audience demographics in a gold framed gallery" fill sizes="100vw" />
        <div className="demographics-stage" aria-hidden="true" />
        <div className="demographics-left" aria-hidden="true"><Image className="slide__image" src="/demographics-bg.webp" alt="" fill sizes="100vw" /></div>
        <div className="demographics-right" aria-hidden="true"><Image className="slide__image" src="/demographics-bg.webp" alt="" fill sizes="100vw" /></div>
        <Image className="demographics-photo" src="/image.png" alt="Young attendees looking at their phones" fill sizes="22vw" />
        <div className="demographics-copy">
          <h2>DEMOGRAPHICS</h2>
          <h3>Who Is Attending?</h3>
          <div className="demographics-copy__item"><span>Our largest audience is high-school and college students ranging from 18-24 years old. They are highly active online. They discover and buy through social platforms, share trends across their communities, and constantly hunt for deals, event tickets, exclusive drops, latest tech, etc. These trendsetters move culture, fashion, and gadgets quickly—often buying new releases before they’re widely available.</span></div>
          <div className="demographics-copy__item"><span>They know what they like and seek nightlife experiences that deliver fun and uniqueness. These attendees frequently spend online and in person, own credit cards, and are the largest group of online shoppers at our events. They chase exclusive drops, limited-edition merch, tickets, and one-of-a-kind moments—then share them across social platforms.</span></div>
        </div>
      </section>
      <section className="slide slide--lifestyle" aria-label="Lifestyle Demographics">
        <Image className="slide__image lifestyle-bg" src="/page18-bg.webp" alt="Lifestyle demographics in gold framed gallery" fill sizes="100vw" />
        <div className="lifestyle-stage" aria-hidden="true" />
        <div className="lifestyle-frame lifestyle-left-top" aria-hidden="true"><Image className="slide__image" src="/page18-bg.webp" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-left-bottom" aria-hidden="true"><Image className="slide__image" src="/page18-bg.webp" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-right-top" aria-hidden="true"><Image className="slide__image" src="/page18-bg.webp" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-right-bottom" aria-hidden="true"><Image className="slide__image" src="/page18-bg.webp" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-center" aria-hidden="true"><Image className="slide__image" src="/page18-bg.webp" alt="" fill sizes="100vw" /></div>
        <Image className="lifestyle-photo" src="/Group 2147225068.png" alt="Guests socializing at a rooftop gathering" fill sizes="31vw" />
        <div className="lifestyle-logo" aria-hidden="true"><span>—THE—</span><span>ELEMENTZ_</span><span>—LIVE—</span></div>
        <div className="lifestyle-copy" aria-label="Lifestyle demographics details">
          <p className="lifestyle-copy__left-top">Second-largest demographic: adults 25–34. They typically earn between $25k–$1M annually, are digitally active (though less than the 16–24 group), and make informed, decisions online.</p>
          <p className="lifestyle-copy__left-bottom">25–34 segment: career‑driven, socially active, and experience-focused. They’re building careers, scheduling meetings, dating, and networking—while still online.</p>
          <p className="lifestyle-copy__right-top">Their weekends are spent building a lifestyle with the people, the brands, and the artist association that they love. They seek what reflects their identity and social circles.</p>
        </div>
      </section>
      <section className="slide slide--demographics-35" aria-label="35 Plus Demographics">
        <Image className="slide__image demographics-35-bg" src="/demographics-35-plus.png" alt="35 plus audience demographics in gold frames" fill sizes="100vw" />
        <div className="demographics-35-stage" aria-hidden="true" />
        <div className="demographics-35-panel demographics-35-left" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-35-panel demographics-35-center" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-35-panel demographics-35-right" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-35-graph">
          <div className="demographics-35-values" aria-label="Income values">
            <span>$120K</span><span>$100K</span><span>$80K</span><span>$60K</span><span>$40K</span><span>$20K</span><span>$0</span>
          </div>
        </div>
      </section>
      <section className="slide slide--marketing" aria-label="Marketing and media coverage">
        <Image className="slide__image marketing-bg" src="/marketing.png" alt="Elementz Live marketing and media coverage across television, radio, social media, and blogs" fill sizes="100vw" />
        <div className="marketing-stage" aria-hidden="true" />
        <div className="marketing-reveal marketing-title" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-subtitle" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-copy" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-column marketing-column-one" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-column marketing-column-two" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-column marketing-column-three" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-column marketing-column-four" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
        <div className="marketing-reveal marketing-column marketing-column-five" aria-hidden="true"><Image className="slide__image" src="/marketing.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--interview" aria-label="Mannie Fresh interview on CP24">
        <Image className="slide__image interview-bg" src="/fresh-talks.webp" alt="Mannie Fresh talking with Steve Anthony on CP24" fill sizes="100vw" />
        <div className="interview-caption-title">Mannie Fresh talking with Steve Anthony Live (@CP24)</div>
        <p className="interview-caption-copy">We will feature more interviews, expanded highlights, and increased public-relations coverage, along with candid artist interactions, and performance clips to broadcast this years competition.</p>
      </section>
      <section className="slide slide--local-marketing" aria-label="Local Marketing Plan">
        <Image className="slide__image local-marketing-bg" src="/local-marketing-bg.webp" alt="Dark media control room background" fill sizes="100vw" />
        <div className="local-marketing-art"><Image className="slide__image" src="/local-marketing-img.webp" alt="Television and online broadcasting studio with media labels and Elementz Live emblem" fill sizes="40vw" /></div>
        <h2 className="local-marketing-heading">LOCAL MARKETING PLAN</h2>
        <blockquote className="local-marketing-quote">“Approximately 74% of music listeners lean toward brands that engage them through giveaways, sweepstakes, and sponsorships.”</blockquote>
        <p className="local-marketing-copy">Traditional and digital advertising will drive awareness and ticket sales across the campaign. The event website, mobile app, and social channels—Facebook, Instagram, YouTube, and others—will serve as primary hubs for discovery and conversion. Our strategy centers on partnership inclusion, contests and giveaways, scheduled posts, artist trivia, market analytics, and platform-specific activations. This mix engages each platform’s followers, targets the customers most likely to buy tickets, and reaches fans who value experiential entertainment.</p>
      </section>
      <section className="slide slide--statistics-analysis" aria-label="Statistics — Canadian entertainment spending analysis">
        <Image className="slide__image statistics-analysis-bg" src="/statistics-analysis.png" alt="Statistics analysing the Canadian entertainment market and industry revenue, including movies, professional sports, and live music" fill sizes="100vw" />
        <div className="statistics-analysis-stage" aria-hidden="true" />
        <h2 className="statistics-analysis-heading">STATISTICS</h2>
        <div className="statistics-analysis-reveal statistics-analysis-subtitle" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
        <div className="statistics-analysis-reveal statistics-analysis-left-bg" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
        <div className="statistics-analysis-reveal statistics-analysis-right-bg" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
        <div className="statistics-analysis-reveal statistics-analysis-laptop" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
        <div className="statistics-analysis-reveal statistics-analysis-table" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
        <div className="statistics-analysis-reveal statistics-analysis-footer" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--partners" aria-label="Some past and current partners">
        <Image className="slide__image partners-bg" src="/partners.png" alt="Some past and current partners, featuring media and music partners alongside The Elementz Live" fill sizes="100vw" />
        <div className="partners-stage" aria-hidden="true" />
        <h2 className="partners-heading">SOME PAST &amp; CURRENT PARTNERS</h2>
        <h3 className="partners-subheading">We Are Constantly Growing</h3>
        <div className="partners-reveal partner-tile partner-tile-one" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-two" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-three" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-four" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-five" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-six" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partners-hero" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
      </section>      <section className="slide slide--new-wave" aria-label="The Element Live New Wave � Gen Z is rewriting entertainment">
        <Image className="slide__image new-wave-bg" src="/element-live-new-wave.png" alt="The Element Live New Wave showing four Gen Z entertainment trends: short-form impact, AI co-creation, meme-driven identity, and community-led hype" fill sizes="100vw" />
        <div className="new-wave-stage" aria-hidden="true" />
        <div className="new-wave-title-wrap">
          <h2 className="new-wave-title">THE ELEMENTZ_LIVE NEW WAVE</h2>
          <h3 className="new-wave-subtitle">Gen Z Is Rewriting Entertainment</h3>
        </div>
        <div className="new-wave-reveal new-wave-card new-wave-card-one" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-two" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-three" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-four" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-footer" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
      </section>      <section className="slide slide--sponsorship-spending" aria-label="Corporate spending on sponsorships">
        <Image className="slide__image sponsorship-spending-bg" src="/corporate-sponsorship-spending.png" alt="Corporate spending on sponsorships chart showing growth from 28.3 billion in 2015 to 65.8 billion in 2025" fill sizes="100vw" />
        <div className="sponsorship-spending-stage" aria-hidden="true" />
        <h2 className="sponsorship-spending-title-text">Sponsorship For The Live Music Business Is Up 15% In Three Years.</h2>
        <div className="sponsorship-spending-reveal sponsorship-spending-subtitle" aria-hidden="true"><Image className="slide__image" src="/corporate-sponsorship-spending.png" alt="" fill sizes="100vw" /></div>
        {Array.from({ length: 11 }, (_, index) => (
          <div key={`sponsorship-slice-${index}`} className={`sponsorship-spending-reveal sponsorship-chart-slice sponsorship-chart-slice-${index + 1}`} aria-hidden="true">
            <Image className="slide__image" src="/corporate-sponsorship-spending.png" alt="" fill sizes="100vw" />
          </div>
        ))}
      </section>
      <section className="slide slide--fast-facts" aria-label="Fast facts">
        <Image className="slide__image fast-facts-bg" src="/fast-facts.png" alt="Fast facts covering the Toronto location, attendance, performers, ticket prices, media coverage, public relations, and 2027 event plans" fill sizes="100vw" />
        <div className="fast-facts-stage" aria-hidden="true" />
        <h2 className="fast-facts-title-text">FAST FACTS</h2>
        <div className="fast-facts-reveal fast-facts-subtitle" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
        <div className="fast-facts-copy fast-facts-copy--left">
          <ul>
            <li><strong>Location: Toronto, Canada</strong></li>
            <li>Queen Elizabeth Theater, After party-TBA, Events -TBA</li>
            <li><strong>Expected attendance:</strong></li>
            <li>2000+ (T.B.A / competition -, summit -, After-party- Concerts)</li>
            <li><strong>Expected event impressions:</strong></li>
            <li>5,000,000+ physical and digital combined</li>
            <li><strong>Date:</strong></li>
            <li>2027</li>
          </ul>
        </div>
        <div className="fast-facts-copy fast-facts-copy--center">
          <ul>
            <li><strong>Performers: TBA</strong></li>
            <li>Guests Judges: more TBA</li>
            <li>Host: T.B.A</li>
            <li>T.B.A (moderator)</li>
            <li>Ticket prices will go up.</li>
            <li>Starting at $20</li>
          </ul>
        </div>
        <div className="fast-facts-copy fast-facts-copy--right">
          <ul>
            <li><strong>Media coverage:</strong></li>
            <li>93.5FM The Move, live interviews, TV interviews, blogs TBA</li>
            <li><strong>Press/Public Relations:</strong></li>
            <li>2027 show will be powered by The Elementz Live mobile app. Past Press and media partners: CP24, Breakfast Television, Much Music, CBC, The Source, SpillMagazine, Rap City, Hip Hop Canada, Narcity, BlogTO, and moreTBA</li>
            <li><strong>“Host” TBA, “Media” TBA “press/public relations Show will be powered by the elementz App all new media TBA.</strong></li>
          </ul>
        </div>
      </section>
      <section className="slide slide--canadian-music-spending" aria-label="Canadian music based spending">
        <Image className="slide__image canadian-music-spending-bg" src="/canadian-music-spending.png" alt="Canadian music based spending comparison for Canadians, teens, and millennials in 2025 and 2026" fill sizes="100vw" />
        <div className="canadian-music-spending-stage" aria-hidden="true" />
        <div className="canadian-music-spending-reveal canadian-music-spending-title" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
        <div className="canadian-music-spending-reveal canadian-music-spending-subtitle" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
        <div className="canadian-music-spending-reveal canadian-spending-panel canadian-spending-canadians" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
        <div className="canadian-music-spending-reveal canadian-spending-panel canadian-spending-teens" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
        <div className="canadian-music-spending-reveal canadian-spending-panel canadian-spending-millennials" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
        <div className="canadian-music-spending-reveal canadian-spending-legend" aria-hidden="true"><Image className="slide__image" src="/canadian-music-spending.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--live-times" aria-label="The Elementz Live Times fast facts">
        <Image className="slide__image live-times-bg" src="/elementz-live-times.png" alt="The Elementz Live Times fast facts poster featuring past media coverage, Toronto event details, performers, and breaking news" fill sizes="100vw" />
        <div className="live-times-stage" aria-hidden="true" />
        <div className="live-times-reveal live-times-masthead" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>
        <div className="live-times-reveal live-times-feature" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>
        <div className="live-times-reveal live-times-seal" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>
        <div className="live-times-reveal live-times-fast-facts" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>
        <div className="live-times-reveal live-times-stories" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>
        <div className="live-times-reveal live-times-ticker" aria-hidden="true"><Image className="slide__image" src="/elementz-live-times.png" alt="" fill sizes="100vw" /></div>      </section>
      <section className="slide slide--closing-emblem" aria-label="The Elementz Live closing emblem">
        <Image className="slide__image closing-emblem-bg" src="/elementz-closing-emblem.png" alt="The Elementz Live emblem over a deep blue Toronto skyline" fill sizes="100vw" />
        <div className="closing-emblem-stage" aria-hidden="true" />
        <div className="closing-emblem-reveal closing-emblem-backdrop" aria-hidden="true"><Image className="slide__image" src="/elementz-closing-emblem.png" alt="" fill sizes="100vw" /></div>
        <div className="closing-emblem-reveal closing-emblem-rings" aria-hidden="true"><Image className="slide__image" src="/elementz-closing-emblem.png" alt="" fill sizes="100vw" /></div>
        <div className="closing-emblem-reveal closing-emblem-seal" aria-hidden="true"><Image className="slide__image" src="/elementz-closing-emblem.png" alt="" fill sizes="100vw" /></div>
      </section>    </main>  );
}




































