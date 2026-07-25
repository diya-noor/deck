"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
        <Image className="slide__image intro__background" src="/screen-01.png" alt="" fill loading="eager" fetchPriority="high" sizes="100vw" />
        <div className="intro__focus" aria-hidden="true">
          <Image className="slide__image intro__focus-image" src="/screen-01.png" alt="" fill sizes="100vw" />
        </div>
        <div className="slide__shade" aria-hidden="true" />
        <p className="sr-only">The Elementz. Presenting now and forever.</p>
      </section>

      <section className="slide slide--highway" aria-label="Get Plugged In">
        <Image className="slide__image highway__background" src="/highway-signs.png" alt="" fill sizes="100vw" />
        <div className="highway__signs" aria-hidden="true">
          <div className="sign-layer sign-layer--left"><Image className="slide__image" src="/highway-signs.png" alt="" fill sizes="100vw" /></div>
          <div className="sign-layer sign-layer--center"><Image className="slide__image" src="/highway-signs.png" alt="" fill sizes="100vw" /></div>
          <div className="sign-layer sign-layer--right"><Image className="slide__image" src="/highway-signs.png" alt="" fill sizes="100vw" /></div>
        </div>
        <div className="road__focus" aria-hidden="true"><Image className="slide__image" src="/highway-signs.png" alt="" fill sizes="100vw" /></div>
        <div className="slide__shade" aria-hidden="true" />
        <div className="sr-only"><p>The Elementz Live, representing now and forever.</p><h1>Get Plugged In</h1><p>Exit. Sortie.</p></div>
      </section>
      <section className="slide slide--mission" aria-label="Our Mission">
        <Image className="slide__image mission__background" src="/mission.png" alt="Our Mission — Elementz Live presentation" fill sizes="100vw" />
        <div className="mission-mask mission-mask--title" aria-hidden="true" />
        <div className="mission-mask mission-mask--question" aria-hidden="true" />
        <div className="mission-mask mission-mask--text-one" aria-hidden="true" />
        <div className="mission-mask mission-mask--text-two" aria-hidden="true" />
        <div className="mission-mask mission-mask--text-three" aria-hidden="true" />
        <div className="mission-mask mission-mask--text-four" aria-hidden="true" />
        <div className="mission-mask mission-mask--text-five" aria-hidden="true" />
        <div className="mission-reveal mission-reveal--title" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--question" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--text-one" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--text-two" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--text-three" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--text-four" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
        <div className="mission-reveal mission-reveal--text-five" aria-hidden="true"><Image className="slide__image" src="/mission.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--breakdown" aria-label="Event Breakdown">
        <Image className="slide__image breakdown__background" src="/breakdown.png" alt="Elementz Live event breakdown" fill sizes="100vw" />
        <div className="breakdown__stage-mask" aria-hidden="true" />
        <div className="breakdown-asset breakdown-asset--camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="breakdown-asset breakdown-asset--film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="film-perforations film-perforations--top" aria-hidden="true">
          {Array.from({ length: 34 }, (_, index) => <Image key={`top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}
        </div>
        <div className="film-perforations film-perforations--bottom" aria-hidden="true">
          {Array.from({ length: 34 }, (_, index) => <Image key={`bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}
        </div>
        <div className="breakdown-photo breakdown-photo--one" aria-hidden="true"><Image src="/image (6).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--two" aria-hidden="true"><Image src="/image (7).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--three" aria-hidden="true"><Image src="/image (8).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-photo breakdown-photo--four" aria-hidden="true"><Image src="/image (9).png" alt="" fill sizes="17vw" /></div>
        <div className="breakdown-reveal breakdown-reveal--heading" aria-hidden="true"><Image className="slide__image" src="/breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="breakdown-reveal breakdown-reveal--copy" aria-hidden="true"><Image className="slide__image" src="/breakdown.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--day-two" aria-label="Day 2 Breakdown">
        <Image className="slide__image day-two__background" src="/day-2-breakdown.png" alt="Elementz Live Day 2 breakdown" fill sizes="100vw" />
        <div className="day-two__stage-mask" aria-hidden="true" />
        <div className="day-two-asset day-two-asset--camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="day-two-asset day-two-asset--film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="day-two-holes day-two-holes--top" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day2-top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-two-holes day-two-holes--bottom" aria-hidden="true">{Array.from({ length: 34 }, (_, index) => <Image key={`day2-bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-two-photo day-two-photo--one" aria-hidden="true"><Image src="/image.jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--two" aria-hidden="true"><Image src="/image (1).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--three" aria-hidden="true"><Image src="/image (2).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-photo day-two-photo--four" aria-hidden="true"><Image src="/image (3).jpg" alt="" fill sizes="17vw" /></div>
        <div className="day-two-reveal day-two-reveal--title" aria-hidden="true"><Image className="slide__image" src="/day-2-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="day-two-reveal day-two-reveal--heading" aria-hidden="true"><Image className="slide__image" src="/day-2-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="day-two-reveal day-two-reveal--copy" aria-hidden="true"><Image className="slide__image" src="/day-2-breakdown.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--day-three" aria-label="Day 3 Breakdown">
        <Image className="slide__image day-three__background" src="/day-3-breakdown.png" alt="Elementz Live Day 3 breakdown" fill sizes="100vw" />
        <div className="day-three__mask" aria-hidden="true" />
        <div className="day-three-asset day-three-camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="day-three-asset day-three-film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="day-three-holes day-three-holes--top" aria-hidden="true">{Array.from({ length: 34 },(_,index)=><Image key={`day3-top-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-three-holes day-three-holes--bottom" aria-hidden="true">{Array.from({ length: 34 },(_,index)=><Image key={`day3-bottom-${index}`} src="/Rectangle 83.png" alt="" width={15} height={17} />)}</div>
        <div className="day-three-photo day-three-photo--one" aria-hidden="true"><Image src="/image (15).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--two" aria-hidden="true"><Image src="/image (16).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--three" aria-hidden="true"><Image src="/image (17).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-photo day-three-photo--four" aria-hidden="true"><Image src="/image (18).png" alt="" fill sizes="17vw" /></div>
        <div className="day-three-reveal day-three-title" aria-hidden="true"><Image className="slide__image" src="/day-3-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="day-three-reveal day-three-heading" aria-hidden="true"><Image className="slide__image" src="/day-3-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="day-three-reveal day-three-copy" aria-hidden="true"><Image className="slide__image" src="/day-3-breakdown.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--day-four" aria-label="Day 4 Breakdown">
        <Image className="slide__image day-four-bg" src="/day-4-breakdown.png" alt="Elementz Live Day 4 breakdown" fill sizes="100vw" />
        <div className="day-four-mask" aria-hidden="true" />
        <div className="d4-asset d4-camera" aria-hidden="true"><Image src="/image 151 (1).png" alt="" fill sizes="30vw" /></div>
        <div className="d4-asset d4-film" aria-hidden="true"><Image src="/Rectangle 7 (1).png" alt="" fill sizes="72vw" /></div>
        <div className="d4-holes d4-holes-top" aria-hidden="true">{Array.from({length:34},(_,i)=><Image key={`d4t-${i}`} src="/Rectangle 83.png" alt="" width={15} height={17}/>)}</div>
        <div className="d4-holes d4-holes-bottom" aria-hidden="true">{Array.from({length:34},(_,i)=><Image key={`d4b-${i}`} src="/Rectangle 83.png" alt="" width={15} height={17}/>)}</div>
        <div className="d4-photo d4-p1" aria-hidden="true"><Image src="/image (10).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p2" aria-hidden="true"><Image src="/image (12).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p3" aria-hidden="true"><Image src="/image (13).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-photo d4-p4" aria-hidden="true"><Image src="/image (14).png" alt="" fill sizes="17vw"/></div>
        <div className="d4-reveal d4-title" aria-hidden="true"><Image className="slide__image" src="/day-4-breakdown.png" alt="" fill sizes="100vw"/></div>
        <div className="d4-reveal d4-heading" aria-hidden="true"><Image className="slide__image" src="/day-4-breakdown.png" alt="" fill sizes="100vw"/></div>
        <div className="d4-reveal d4-copy" aria-hidden="true"><Image className="slide__image" src="/day-4-breakdown.png" alt="" fill sizes="100vw"/></div>
      </section>
      <section className="slide slide--competition" aria-label="Competition Breakdown">
        <Image className="slide__image competition-bg" src="/competition-breakdown.png" alt="Elementz Live competition categories breakdown" fill sizes="100vw" />
        <div className="competition-dim" aria-hidden="true" />
        <div className="competition-panel competition-title" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-vocalist" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-dancer" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-mc" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-dj" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-comedian" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-graffiti" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-beatmaker" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
        <div className="competition-panel competition-fashion" aria-hidden="true"><Image className="slide__image" src="/competition-breakdown.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--siege" aria-label="Siege contest winner">
        <Image className="slide__image siege-bg" src="/siege-winner.png" alt="Siege, first Elementz Live contest winner" fill sizes="100vw" />
        <div className="siege-stage" aria-hidden="true" />
        <div className="siege-half siege-half--left" aria-hidden="true"><Image className="slide__image" src="/siege-winner.png" alt="" fill sizes="100vw" /></div>
        <div className="siege-half siege-half--right" aria-hidden="true"><Image className="slide__image" src="/siege-winner.png" alt="" fill sizes="100vw" /></div>
        <div className="siege-profile-cover" aria-hidden="true" />
        <div className="siege-profile" aria-hidden="true"><Image className="slide__image" src="/siege-winner.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--siege-story" aria-label="Siege success story">
        <Image className="slide__image siege-story-bg" src="/siege-story.jpg" alt="The Elementz Live competition success story" fill sizes="100vw" />
        <div className="siege-story-stage" aria-hidden="true" />
        <div className="siege-story-half siege-story-left" aria-hidden="true"><Image className="slide__image" src="/siege-story.jpg" alt="" fill sizes="100vw" /></div>
        <div className="siege-story-half siege-story-right" aria-hidden="true"><Image className="slide__image" src="/siege-story.jpg" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--fame" aria-label="Elementz Live Wall of Fame">
        <Image className="slide__image fame-bg" src="/wall-of-fame.png" alt="Elementz Live Wall of Fame" fill sizes="100vw" />
        <div className="fame-stage" aria-hidden="true" />
        <div className="fame-title" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
        <div className="fame-frame fame-frame-one" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
        <div className="fame-frame fame-frame-two" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
        <div className="fame-frame fame-frame-three" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
        <div className="fame-frame fame-frame-four" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
        <div className="fame-profile-cover" aria-hidden="true" />
        <div className="fame-profile" aria-hidden="true"><Image className="slide__image" src="/wall-of-fame.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--judges" aria-label="Elementz Live Judges">
        <Image className="slide__image judges-bg" src="/judges.png" alt="Elementz Live Judges" fill sizes="100vw" />
        <div className="judges-stage" aria-hidden="true" />
        <div className="judges-title" aria-hidden="true"><Image className="slide__image" src="/judges.png" alt="" fill sizes="100vw" /></div>
        <div className="judge-frame judge-frame-left" aria-hidden="true"><Image className="slide__image" src="/judges.png" alt="" fill sizes="100vw" /></div>
        <div className="judge-frame judge-frame-center" aria-hidden="true"><Image className="slide__image" src="/judges.png" alt="" fill sizes="100vw" /></div>
        <div className="judge-frame judge-frame-right" aria-hidden="true"><Image className="slide__image" src="/judges.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--summit" aria-label="Elementz Live Summit">
        <Image className="slide__image summit-bg" src="/summit.png" alt="Elementz Live Summit workshop" fill sizes="100vw" />
        <div className="summit-stage" aria-hidden="true" />
        <div className="summit-band summit-band-one" aria-hidden="true"><Image className="slide__image" src="/summit.png" alt="" fill sizes="100vw" /></div>
        <div className="summit-band summit-band-two" aria-hidden="true"><Image className="slide__image" src="/summit.png" alt="" fill sizes="100vw" /></div>
        <div className="summit-band summit-band-three" aria-hidden="true"><Image className="slide__image" src="/summit.png" alt="" fill sizes="100vw" /></div>
        <div className="summit-band summit-band-four" aria-hidden="true"><Image className="slide__image" src="/summit.png" alt="" fill sizes="100vw" /></div>
        <div className="summit-info" aria-hidden="true"><Image className="slide__image" src="/summit.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--schedule" aria-label="Summit Schedule Breakdown">
        <Image className="slide__image schedule-bg" src="/schedule-breakdown.jpg" alt="Summit schedule breakdown" fill sizes="100vw" />
        <div className="schedule-stage" aria-hidden="true" />
        <div className="schedule-title" aria-hidden="true"><Image className="slide__image" src="/schedule-breakdown.jpg" alt="" fill sizes="100vw" /></div>
        <div className="schedule-column schedule-column-left" aria-hidden="true"><Image className="slide__image" src="/schedule-breakdown.jpg" alt="" fill sizes="100vw" /></div>
        <div className="schedule-column schedule-column-right" aria-hidden="true"><Image className="slide__image" src="/schedule-breakdown.jpg" alt="" fill sizes="100vw" /></div>
        <div className="schedule-note" aria-hidden="true"><Image className="slide__image" src="/schedule-breakdown.jpg" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--mobile" aria-label="Elementz Live Mobile Expansion">
        <Image className="slide__image mobile-bg" src="/mobile-expansion.png" alt="Elementz Live mobile app expansion" fill sizes="100vw" />
        <div className="mobile-stage" aria-hidden="true" />
        <div className="mobile-left" aria-hidden="true"><Image className="slide__image" src="/mobile-expansion.png" alt="" fill sizes="100vw" /></div>
        <div className="mobile-right" aria-hidden="true"><Image className="slide__image" src="/mobile-expansion.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--stats" aria-label="Live event audience statistics">
        <Image className="slide__image stats-bg" src="/audience-stats.png" alt="Canadian live event audience age statistics" fill sizes="100vw" />
        <div className="stats-stage" aria-hidden="true" />
        <div className="stats-bar stats-bar-large" aria-hidden="true"><Image className="slide__image" src="/audience-stats.png" alt="" fill sizes="100vw" /></div>
        <div className="stats-bar stats-bar-medium" aria-hidden="true"><Image className="slide__image" src="/audience-stats.png" alt="" fill sizes="100vw" /></div>
        <div className="stats-bar stats-bar-small" aria-hidden="true"><Image className="slide__image" src="/audience-stats.png" alt="" fill sizes="100vw" /></div>
        <div className="stats-quote" aria-hidden="true"><Image className="slide__image" src="/audience-stats.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--demographics" aria-label="Elementz Live Demographics">
        <Image className="slide__image demographics-bg" src="/demographics.png" alt="Elementz Live audience demographics" fill sizes="100vw" />
        <div className="demographics-stage" aria-hidden="true" />
        <div className="demographics-left" aria-hidden="true"><Image className="slide__image" src="/demographics.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-right" aria-hidden="true"><Image className="slide__image" src="/demographics.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--lifestyle" aria-label="Lifestyle Demographics">
        <Image className="slide__image lifestyle-bg" src="/lifestyle-demographics.png" alt="Elementz Live lifestyle demographics" fill sizes="100vw" />
        <div className="lifestyle-stage" aria-hidden="true" />
        <div className="lifestyle-frame lifestyle-left-top" aria-hidden="true"><Image className="slide__image" src="/lifestyle-demographics.png" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-left-bottom" aria-hidden="true"><Image className="slide__image" src="/lifestyle-demographics.png" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-right-top" aria-hidden="true"><Image className="slide__image" src="/lifestyle-demographics.png" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-frame lifestyle-right-bottom" aria-hidden="true"><Image className="slide__image" src="/lifestyle-demographics.png" alt="" fill sizes="100vw" /></div>
        <div className="lifestyle-center" aria-hidden="true"><Image className="slide__image" src="/lifestyle-demographics.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--demographics-35" aria-label="35 Plus Demographics">
        <Image className="slide__image demographics-35-bg" src="/demographics-35-plus.png" alt="Elementz Live 35 plus audience demographics" fill sizes="100vw" />
        <div className="demographics-35-stage" aria-hidden="true" />
        <div className="demographics-35-panel demographics-35-left" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-35-panel demographics-35-center" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
        <div className="demographics-35-panel demographics-35-right" aria-hidden="true"><Image className="slide__image" src="/demographics-35-plus.png" alt="" fill sizes="100vw" /></div>
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
        <Image className="slide__image interview-bg" src="/media-interview.png" alt="Mannie Fresh talking about Elementz Live with Steve Anthony on CP24" fill sizes="100vw" />
        <div className="interview-stage" aria-hidden="true" />
        <div className="interview-reveal interview-scene-left" aria-hidden="true"><Image className="slide__image" src="/media-interview.png" alt="" fill sizes="100vw" /></div>
        <div className="interview-reveal interview-scene-right" aria-hidden="true"><Image className="slide__image" src="/media-interview.png" alt="" fill sizes="100vw" /></div>
        <div className="interview-reveal interview-heading" aria-hidden="true"><Image className="slide__image" src="/media-interview.png" alt="" fill sizes="100vw" /></div>
        <div className="interview-reveal interview-copy" aria-hidden="true"><Image className="slide__image" src="/media-interview.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--local-marketing" aria-label="Local Marketing Plan">
        <Image className="slide__image local-marketing-bg" src="/local-marketing-plan.png" alt="Local Marketing Plan covering traditional advertising, social media strategy, television and online broadcasting, community radio, blogs, and special promotion" fill sizes="100vw" />
        <div className="local-marketing-stage" aria-hidden="true" />
        <div className="local-marketing-reveal local-marketing-title" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
        <div className="local-marketing-reveal local-marketing-quote" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
        <div className="local-marketing-reveal local-marketing-copy" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
        <div className="local-marketing-reveal local-marketing-media" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
        <div className="local-marketing-reveal local-marketing-logo" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
        <div className="local-marketing-reveal local-marketing-labels" aria-hidden="true"><Image className="slide__image" src="/local-marketing-plan.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--statistics-analysis" aria-label="Statistics — Canadian entertainment spending analysis">
        <Image className="slide__image statistics-analysis-bg" src="/statistics-analysis.png" alt="Statistics analysing the Canadian entertainment market and industry revenue, including movies, professional sports, and live music" fill sizes="100vw" />
        <div className="statistics-analysis-stage" aria-hidden="true" />
        <div className="statistics-analysis-reveal statistics-analysis-title" aria-hidden="true"><Image className="slide__image" src="/statistics-analysis.png" alt="" fill sizes="100vw" /></div>
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
        <div className="partners-reveal partners-title" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partners-subtitle" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-one" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-two" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-three" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-four" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-five" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partner-tile partner-tile-six" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
        <div className="partners-reveal partners-hero" aria-hidden="true"><Image className="slide__image" src="/partners.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--new-wave" aria-label="The Element Live New Wave — Gen Z is rewriting entertainment">
        <Image className="slide__image new-wave-bg" src="/element-live-new-wave.png" alt="The Element Live New Wave showing four Gen Z entertainment trends: short-form impact, AI co-creation, meme-driven identity, and community-led hype" fill sizes="100vw" />
        <div className="new-wave-stage" aria-hidden="true" />
        <div className="new-wave-reveal new-wave-heading" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-one" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-two" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-three" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-card new-wave-card-four" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
        <div className="new-wave-reveal new-wave-footer" aria-hidden="true"><Image className="slide__image" src="/element-live-new-wave.png" alt="" fill sizes="100vw" /></div>
      </section>
      <section className="slide slide--sponsorship-spending" aria-label="Corporate spending on sponsorships">
        <Image className="slide__image sponsorship-spending-bg" src="/corporate-sponsorship-spending.png" alt="Corporate spending on sponsorships chart showing growth from 28.3 billion in 2015 to 65.8 billion in 2025" fill sizes="100vw" />
        <div className="sponsorship-spending-stage" aria-hidden="true" />
        <div className="sponsorship-spending-reveal sponsorship-spending-title" aria-hidden="true"><Image className="slide__image" src="/corporate-sponsorship-spending.png" alt="" fill sizes="100vw" /></div>
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
        <div className="fast-facts-reveal fast-facts-title" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
        <div className="fast-facts-reveal fast-facts-subtitle" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
        <div className="fast-facts-reveal fast-facts-column fast-facts-column-one" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
        <div className="fast-facts-reveal fast-facts-column fast-facts-column-two" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
        <div className="fast-facts-reveal fast-facts-column fast-facts-column-three" aria-hidden="true"><Image className="slide__image" src="/fast-facts.png" alt="" fill sizes="100vw" /></div>
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
      </section>
    </main>  );
}




































