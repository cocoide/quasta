import Image from 'next/image'
import { clsx } from '../../../../utils/clsx'

interface NextjsImageProps {
    src: string | undefined
    alt: string
    w: number
    h: number
    style: string
}
const NextjsImage = ({ src, alt, w, h, style }: NextjsImageProps) => {
    return (
        <>
            {src != undefined ?
        <Image src={src} alt={alt} width={w} height={h} className={clsx(style)} />
                :
                <div className={clsx(style, "bg-gray-300 animate-pulse")}></div>
            }
        </>
    )
}
export default NextjsImage