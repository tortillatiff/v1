import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useOnScreen from "../../hooks/useOnScreen";

export default function ProjectSlide({
  title,
  description,
  tags,
  index,
  updateActiveImage,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <StyledProjectSlide ref={ref}>
      <h3>{title}</h3>
      <h2>{description}</h2>
      <p>{tags}</p>
    </StyledProjectSlide>
  );
}
const StyledProjectSlide = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 60%;

  h2,
  h3 {
    font-weight: 500;
  }

  p {
    color: var(--grey);
  }
`;
