import React, { useEffect, useState, useRef } from "react";
import cn from "classnames";
import { projectSlides } from "../../data";
import ProjectSlide from "./projectSlide";
import styled from "styled-components";
import { gsap } from "gsap";

function RenderImages({ activeFeatureIndex }) {
  return projectSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ "as-primary": activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
      alt=""
    />
  ));
}

export default function ProjectSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const projectSliderRef = useRef(null);
  const projectSliderRightRef = useRef(null);

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectSliderRightRef.current,
          start: "top top",
          end: () => `+=${projectSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <SlidesContainer ref={projectSliderRef}>
      <div>
        {projectSlides.map((project, index) => (
          <ProjectSlide
            updateActiveImage={setFeatureIndex}
            key={project.imageUrl}
            title={project.title}
            description={project.description}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
      <StyledSlidesRight ref={projectSliderRightRef}>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </StyledSlidesRight>
    </SlidesContainer>
  );
}

const StyledSlidesRight = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const SlidesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  /* grid-template-columns: 7fr 4fr;
  grid-gap: 68px;
  align-items: center;
  max-width: 1200px; */

  img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0;
    transition: all 1s ease-in-out;
    transform: scale(1.3);
    position: absolute;
    top: 0;
  }
  .as-primary {
    opacity: 1;
    transform: scale(1.1);
  }
`;
