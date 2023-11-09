import { useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

export default function Banner({ list }: any) {
    const [index, setIndex] = useState(0)

    return (
        <>
            <Swiper
                className="w-[517px]"
                autoplay={{
                    delay: 20000,
                    disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                effect={'cards'}
                grabCursor={true}
                spaceBetween={250}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(e) => {
                    setIndex(e.activeIndex)
                }}
            >
                {
                    list.map((e: any, i: number) => {
                        return (<SwiperSlide className="w-[517px]" key={'swiper' + i}>
                            <img className="w-[517px]" src={e} alt="" />
                        </SwiperSlide>)
                    })
                }
            </Swiper>
            <div className="flex flex-col items-center justify-center ml-[30px]">
                {
                    list.map((e: any, i: number) => {
                        return <div key={`ImagesList` + i} className={`w-[8px] h-[30px] ${index == i ? 'bg-[#CA9CFF]' : ''} border-1 border-[#CA9CFF] border-solid rounded-[12px] mt-[6px]`}>
                        </div>
                    })
                }
            </div>
        </>
    )

}