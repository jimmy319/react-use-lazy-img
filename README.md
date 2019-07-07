# useLazyImg <a href='https://travis-ci.org/jimmy319/react-use-lazy-img'><img src='https://travis-ci.org/jimmy319/react-use-lazy-img.svg?branch=master' /></a>

This hook empowers components to be able to load image lazily without any DOM/Component structure changes.

## Installation

```
npm i -S react-use-lazy-img
```

## Usage

Trigger image loading when component is rendered (componentDidMount)

```javascript
import React from 'react'
import useLazyImg from 'react-use-lazy-img'

function LazyImage({ imgUrl, placeholderUrl }) {
  const imgSrc = useLazyImg(imgUrl, placeholderUrl)
  return (
    <Img src={imgSrc} />
  )
}
```

Load image when the element you specified is visible

```javascript
import React, { useRef } from 'react'
import useLazyImg from 'react-use-lazy-img'

function LazyImage({ imgUrl, placeholderUrl }) {
  const imgElement = useRef(null)
  const imgSrc = useLazyImg(imgUrl, placeholderUrl, imgElement)
  return (
    <Img src={imgSrc} ref={imgElement} />
  )
}
```

## API

### useLazyImg(imgUrl, placeholderUrl, [lazyTarget], [intersectionObserverOptions])

|      Name      |                                                                        Description                                                                           |
| -------------  | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| imgUrl         | image url you want to load lazily                                                                                                                            |
| placeholderUrl | image url which will be used to display as placeholder before desired image loaded                                                                           | 
| lazyTarget     | (optional) ref of a dom element which will be used to determine the timing of loading image according to its visibility                                      |
| intersectionObserverOptions    | (optional) use [intersection observer options](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Creating_an_intersection_observer) to defer image loading if you want to do this in a complicated way                   |
