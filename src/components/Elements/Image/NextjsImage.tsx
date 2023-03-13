import Image from 'next/image'

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
                <Image src={src} alt={alt} width={w} height={h} className={style} />
                :
                <Image src="/render.svg" alt={alt} width={w} height={h} className={style} />
            }
        </>
    )
}
export default NextjsImage