export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  
  export const zoomInOut = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  
  export const slideLeft = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  
  export const slideRight = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  
  export const rotateIn = {
    hidden: { opacity: 0, rotate: -90 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  