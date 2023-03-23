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
        const { clientY } = e;
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const trackTop = rect.top;
        const thumbOffset = -(thumbHeight / 2);
        const clickRatio =
          (clientY - trackTop + thumbOffset) / trackCurrent.clientHeight;
        const scrollAmount = Math.floor(
          clickRatio * contentCurrent.scrollHeight
        );
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
