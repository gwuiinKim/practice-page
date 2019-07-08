import React, { useRef, useEffect, useState } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref, isOutside, setIsOutside) => {
  /**
   * Alert if clicked on outside of element
   */
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      alert("You clicked outside of me!");
      setIsOutside(true);
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

/**
 * Component that alerts if you click outside of it
 */
export default ({ children, isOutside, setIsOutside }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, isOutside, setIsOutside);

  return <div ref={wrapperRef}>{children}</div>;
};
