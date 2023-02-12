"use client"
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { imageViewAtom } from '../../model/atoms';

const ImageView = () => {
    const [showImage, setShowImage] = useRecoilState(imageViewAtom)
    return (
        <>
            {
                showImage.length > 0 ?
                    <>
                        <Image src={showImage} alt="post-image" width={300} height={400}
                            className="mx-auto my-auto fixed inset-0 z-50"></Image>
                    </>
                    :
                    <></>
            }
        </>
    )
}
export default ImageView