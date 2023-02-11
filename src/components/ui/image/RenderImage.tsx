"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { clsx } from '../../../../utils/clsx'
import { supabase } from '../../../libs/supabase'

type RenderImagType = {
    src: string,
    alt: string,
    height?: string,
    width?: string,
    style?: string,
}


const RenderImage = ({ src, alt, width, height, style }: RenderImagType) => {
    const router = useRouter()
    const [url, setUrl] = useState<string>()
    const [h, setH] = useState<number>(100)
    const [w, setW] = useState<number>(100)

    const handleRenderImage = useCallback(async () => {
        if (!src) return
        setUrl(src)
    }, [src])

    useEffect(() => {
        handleRenderImage();
    }, [handleRenderImage]);

    return <img srcSet={url as string} src={url as string} alt={alt} height={h} width={w} className={clsx(`${style}`)} />
}
export default RenderImage