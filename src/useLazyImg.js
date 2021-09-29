import { useState, useEffect } from "react";

/**
 * useLazyImg is a custom hook help you load image only when needed
 * How it works:
 * This hook exposes a state: imgSrc which is initialized with param - placeholder and it will be set to the actual image url once the custom effect being fired.
 * @param {String} imgUrl image url you want to load lazily
 * @param {String} placeholderUrl image url that is used to display as a placeholder before the desired image loads
 * @param {Object} lazyTarget lazy image element ref
 * @param {Object} intersectionObserverOptions Intersection observer options
 * @param {String} fallbackUrl fallback image url when the given imgUrl is broken
 */
export default function useLazyImg(
  imgUrl,
  placeholderUrl,
  lazyTarget,
  intersectionObserverOptions = {},
  fallbackUrl
) {
  const [imgSrc, setImgSrc] = useState(placeholderUrl);
  const [errSrc, setErrSrc] = useState(null);
  const onError = () => setErrSrc(fallbackUrl || placeholderUrl);

  // load image
  useEffect(() => {
    // if browser supports IntersectionObserver and lazyTarget is given
    if (
      "IntersectionObserver" in window &&
      lazyTarget &&
      lazyTarget.current instanceof Element
    ) {
      // reload image when prop - imgUrl changed
      if (imgUrl !== imgSrc) {
        const lazyImageObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // change state
              setErrSrc(null);
              setImgSrc(imgUrl);
              // don't need to observe anymore
              lazyImageObserver.unobserve(entry.target);
            }
          });
        }, intersectionObserverOptions);
        // start to observe element
        lazyImageObserver.observe(lazyTarget.current);
      }
    } else {
      // baseline: load image after componentDidMount
      setImgSrc(imgUrl);
    }
  }, [imgUrl, imgSrc]);

  return { imgSrc: errSrc || imgSrc, onError };
}
