import { useEffect, useRef, useState } from 'react';

function useHover() {
 let ref =  useRef();
 const hovered = setHovered = useState(false);
 useEffect(() => (() => {
    const refCopy = ref;
    refCopy.current.addEventListener('mouseenter', () => {})
 }));
 return [ref, hovered];
} ;


export default useHover;