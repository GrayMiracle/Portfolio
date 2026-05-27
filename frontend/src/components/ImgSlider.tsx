import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './imgslider.css'

type ImageItem = string | { src: string; url?: string }

interface ImageSliders {
    images: ImageItem[];
    className: string;
    isActive: boolean;
}

const ImageSlider = ({ images, className, isActive }: ImageSliders) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timeoutRef = useRef<number | null>(null)
    const total = images.length

    const getSrc = (img: ImageItem) => typeof img === 'string' ? img : img.src
    const getUrl = (img: ImageItem) => typeof img === 'string' ? null : img.url ?? null

    const clearAutoScroll = useCallback(() => {
        if (timeoutRef.current !== null) {
            window.clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }, []);

    const scheduleNextSlide = useCallback(() => {
        clearAutoScroll()
        if (!isActive || total <= 1) return

        timeoutRef.current = window.setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % total)
        }, 4000)
    }, [clearAutoScroll, isActive, total])

    const setPrevImg = () => setCurrentIndex((prev) => (prev - 1 + total) % total)
    const setNextImg = () => setCurrentIndex((prev) => (prev + 1) % total)

    useEffect(() => {
        scheduleNextSlide()
        return clearAutoScroll
    }, [currentIndex, isActive, scheduleNextSlide])

    return (
        <div className={`img-slider ${className}-slider`}>
            <div className={`img-container ${className}-img-container`}>
                <button
                    className="arrow-left"
                    onClick={() => {
                        setPrevImg()
                        scheduleNextSlide()
                    }}
                > ← </button>

                <div className="img-stack">
                    {images.map((img, index) => {
                        const src = getSrc(img)
                        const url = getUrl(img)
                        const imgEl = (
                            <img
                                key={src}
                                src={src}
                                className={`home-image ${className}-image fade-image ${index === currentIndex ? 'active' : ''}`}
                            />
                        )
                        return url
                            ? <Link to={url} key={src} style={{ pointerEvents: index === currentIndex ? 'auto' : 'none' }}>{imgEl}</Link>
                            : imgEl
                    })}
                </div>

                <button
                    className="arrow-right"
                    onClick={() => {
                        setNextImg()
                        scheduleNextSlide()
                    }}
                > → </button>

                <div className="imgdots dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                setCurrentIndex(index)
                                scheduleNextSlide()
                            }}
                            className={`imgdot dot ${index === currentIndex ? 'active' : ''}`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;