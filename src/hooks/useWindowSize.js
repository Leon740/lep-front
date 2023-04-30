import { useEffect, useState } from 'react';
import useDebounce from './useDebouce';

function getWindowSizeFn() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowSize(delayNum = 200) {
  const [windowSize, setWindowSize] = useState(() => getWindowSizeFn());

  const debouncedWindowWidth = useDebounce(windowSize.width, delayNum);
  const debouncedWindowHeight = useDebounce(windowSize.height, delayNum);

  // 1) mount: useEffect call
  // 2) resize: setWindowSize,
  // after useDebounce timeout finishes,
  // debouncedWindowWidth, debouncedWindowHeight get updated
  // 3) useEffect call

  useEffect(() => {
    // console.log(`width = ${debouncedWindowWidth}`);
    // console.log(`height = ${debouncedWindowHeight}`);

    function handleResizeFn() {
      // console.log('resize occurs every render');
      setWindowSize(getWindowSizeFn());
    }

    window.addEventListener('resize', handleResizeFn);

    return () => window.removeEventListener('resize', handleResizeFn);
  }, [debouncedWindowWidth, debouncedWindowHeight]);

  return { screenWidth: debouncedWindowWidth, screenHeight: debouncedWindowHeight };
}
