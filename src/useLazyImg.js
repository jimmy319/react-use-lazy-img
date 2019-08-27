import { useState, useEffect } from 'react'

/**
 * useLazyImg is a custom hook help you defer loading of images
 * How it works:
 * It will expose a state: imgSrc which will be initialized with param - placeholder. This state will be set as param - imgUrl once component did mount
 * @param {String} imgUrl image url you want to load lazily
 * @param {String} placeholderUrl image url which will be used to display as placeholder before desired image loaded
 * @param {Object} lazyTarget ref of lazy image element
 * @param {Object} intersectionObserverOptions Intersection observer options
 * @param {String} fallbackUrl fallback image Url when the imgUrl is broken
 */
export default function useLazyImg(imgUrl, placeholderUrl, lazyTarget, intersectionObserverOptions = {}, fallbackUrl) {
  const [imgSrc, setImgSrc] = useState(placeholderUrl)
  const onError = () => setImgSrc(fallbackUrl || placeholderUrl)

  // load image
  useEffect(() => {
    // if browser supports IntersectionObserver and lazyTarget is given
    if ('IntersectionObserver' in window && lazyTarget && lazyTarget.current instanceof Element) {
      const lazyImageObservor = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // change state
            setImgSrc(imgUrl)
            // don't need to observe anymore
            lazyImageObservor.unobserve(entry.target)
          }
        })
      }, intersectionObserverOptions)

      // start to observe element
      lazyImageObservor.observe(lazyTarget.current)
    } else {
      // baseline: load image after componentDidMount
      setImgSrc(imgUrl)
    }
  }, [])

  return { imgSrc, onError }
}
