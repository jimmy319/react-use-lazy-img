# react-use-lazy-img <a href='https://travis-ci.org/jimmy319/react-use-lazy-img'><img src='https://travis-ci.org/jimmy319/react-use-lazy-img.svg?branch=master' /></a>

This hook empowers components to load image lazily.

## Installation

```
npm i react-use-lazy-img
```

## Usage

Trigger image loading when component is rendered

```javascript
import React from "react";
import useLazyImg from "react-use-lazy-img";

function LazyImage({ imgUrl, placeholderUrl, fallbackUrl }) {
  const { imgSrc, onError } = useLazyImg(
    imgUrl,
    placeholderUrl,
    null,
    null,
    fallbackUrl
  );
  return <img src={imgSrc} onError={onError} />;
}
```

Load image when the element you specified is visible

```javascript
import React, { useRef } from "react";
import useLazyImg from "react-use-lazy-img";

function LazyImage({ imgUrl, placeholderUrl, fallbackUrl }) {
  const imgElement = useRef(null);
  const { imgSrc, onError } = useLazyImg(
    imgUrl,
    placeholderUrl,
    imgElement,
    null,
    fallbackUrl
  );
  return <img src={imgSrc} ref={imgElement} onError={onError} />;
}
```

## API

### useLazyImg(imgUrl, placeholderUrl, [lazyTarget], [intersectionObserverOptions])

| Name                        | Description                                                                                                                                                                                                                     |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| imgUrl                      | image url you want to load lazily                                                                                                                                                                                               |
| placeholderUrl              | image url that is used to display as a placeholder before the desired image loads                                                                                                                                             |
| lazyTarget                  | (optional) ref of a DOM element which is used to determine the timing of loading image according to its visibility                                                                                                         |
| intersectionObserverOptions | (optional) use [intersection observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer) if you want to lazyily load images in a complicated way |
| fallbackUrl                 | (optional) image url which will be used when imgUrl is broken                                                                                                                                                                   |
