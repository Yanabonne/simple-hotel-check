import React from "react";

function Scrollbar({ listRef }) {
  const scrollTrackRef = React.useRef(null);
  const scrollThumbRef = React.useRef(null);
  const observer = React.useRef(null);
  const [thumbHeight, setThumbHeight] = React.useState(20);
  const [scrollStartPosition, setScrollStartPosition] = React.useState(null);
  const [initialScrollTop, setInitialScrollTop] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  function handleResize(ref, trackSize) {
    const { clientHeight, scrollHeight } = ref;
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
  }

  React.useEffect(() => {
    if (listRef.current && scrollTrackRef.current) {
      const ref = listRef.current;
      const { clientHeight: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      ref.addEventListener("scroll", handleThumbPosition);
      return () => {
        observer.current?.unobserve(ref);
        ref.removeEventListener("scroll", handleThumbPosition);
      };
    }
  }, []);

  const handleThumbPosition = React.useCallback(() => {
    if (
      !listRef.current ||
      !scrollTrackRef.current ||
      !scrollThumbRef.current
    ) {
      return;
    }
    const { scrollTop: contentTop, scrollHeight: contentHeight } =
      listRef.current;
    const { clientHeight: trackHeight } = scrollTrackRef.current;
    let newTop = (+contentTop / +contentHeight) * trackHeight;
    newTop = Math.min(newTop, trackHeight - thumbHeight);
    const thumb = scrollThumbRef.current;
    thumb.style.top = `${newTop}px`;
  }, []);

  const handleThumbMousedown = React.useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setScrollStartPosition(e.clientY);
    if (listRef.current) setInitialScrollTop(listRef.current.scrollTop);
    setIsDragging(true);
  }, []);

  const handleThumbMouseup = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        setIsDragging(false);
      }
    },
    [isDragging]
  );

  const handleTrackClick = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const { current: trackCurrent } = scrollTrackRef;
      const { current: contentCurrent } = listRef;
      if (trackCurrent && contentCurrent) {
        // First, figure out where we clicked
        const { clientY } = e;
        // Next, figure out the distance between the top of the track and the top of the viewport
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        // We want the middle of the thumb to jump to where we clicked, so we subtract half the thumb's height to offset the position
        const thumbOffset = -(thumbHeight / 2);
        // Find the ratio of the new position to the total content length using the thumb and track values...
        const clickRatio =
          (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
        // ...so that you can compute where the content should scroll to.
        const scrollAmount = Math.floor(
          clickRatio * contentCurrent.scrollHeight
        );
        // And finally, scroll to the new position!
        contentCurrent.scrollTo({
          top: scrollAmount,
          behavior: "smooth",
        });
      }
    },
    [thumbHeight]
  );

  const handleThumbMousemove = React.useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isDragging) {
        const {
          scrollHeight: contentScrollHeight,
          offsetHeight: contentOffsetHeight,
        } = listRef.current;

        // Subtract the current mouse y position from where you started to get the pixel difference in mouse position. Multiply by ratio of visible content height to thumb height to scale up the difference for content scrolling.
        const deltaY =
          (e.clientY - scrollStartPosition) *
          (contentOffsetHeight / thumbHeight);
        const newScrollTop = Math.min(
          initialScrollTop + deltaY,
          contentScrollHeight - contentOffsetHeight
        );

        listRef.current.scrollTop = newScrollTop;
      }
    },
    [isDragging, scrollStartPosition, thumbHeight]
  );

  // Listen for mouse events to handle scrolling by dragging the thumb
  React.useEffect(() => {
    document.addEventListener("mousemove", handleThumbMousemove);
    document.addEventListener("mouseup", handleThumbMouseup);
    document.addEventListener("mouseleave", handleThumbMouseup);
    return () => {
      document.removeEventListener("mousemove", handleThumbMousemove);
      document.removeEventListener("mouseup", handleThumbMouseup);
      document.removeEventListener("mouseleave", handleThumbMouseup);
    };
  }, [handleThumbMousemove, handleThumbMouseup]);

  return (
    <div className="scroll">
      <div
        className="scroll__track"
        ref={scrollTrackRef}
        onClick={handleTrackClick}
        style={{ cursor: isDragging ? "grabbing" : "pointer" }}
      ></div>
      <div
        className="scroll__thumb"
        ref={scrollThumbRef}
        onMouseDown={handleThumbMousedown}
        style={{
          height: `${thumbHeight}px`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      ></div>
    </div>
  );
}

export default Scrollbar;

const Scrollba = () => {
  const contentRef = React.useRef(null);
  const scrollTrackRef = React.useRef(null);
  const scrollThumbRef = React.useRef(null);
  const observer = React.useRef(null);
  const [thumbHeight, setThumbHeight] = React.useState(20);

  function handleResize(ref, trackSize) {
    const { clientHeight, scrollHeight } = ref;
    setThumbHeight(Math.max((clientHeight / scrollHeight) * trackSize, 20));
  }

  React.useEffect(() => {
    if (contentRef.current && scrollTrackRef.current) {
      const ref = contentRef.current;
      const { clientHeight: trackSize } = scrollTrackRef.current;
      observer.current = new ResizeObserver(() => {
        handleResize(ref, trackSize);
      });
      observer.current.observe(ref);
      return () => {
        observer.current?.unobserve(ref);
      };
    }
  }, []);

  return (
    <div className="custom-scrollbars__container">
      <div className="custom-scrollbars__content" ref={contentRef}></div>
      <div className="custom-scrollbars__scrollbar">
        <button className="custom-scrollbars__button">⇑</button>
        <div className="custom-scrollbars__track-and-thumb">
          <div className="custom-scrollbars__track"></div>
          <div
            className="custom-scrollbars__thumb"
            ref={scrollThumbRef}
            style={{
              height: `${thumbHeight}px`,
            }}
          ></div>
        </div>
        <button className="custom-scrollbars__button">⇓</button>
      </div>
    </div>
  );
};
