
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from "../../components/banner";

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const ImagesList = [
  "/images/banner1.png",
  "/images/banner1.png",
  "/images/banner1.png"
];
const AboutList = [
  ["/images/about-us-1.svg", "Leading the world in AI-driven NFT creation and trading, where everyone becomes a value creator."],
  ["/images/about-us-2.svg", "Dance with AI, reshaping the essence of digital art. Harmonious co-creation, limitless possibilities."],
  ["/images/about-us-3.svg", "We bridge artists, creators, and consumers, ushering in a new era of digital artistry."],
  ["/images/about-us-4.svg", "We bridge artists, creators,  and consumers, ushering in a new era of digital artistry."]
]
const Creaators = [
  ["/images/creators-1.png", "BC Owner Buy 68", "dooihouhuwoek", "0.0000", "0.0000"],
  ["/images/creators-2.png", "BC Owner Buy 68", "dooihouhuwoek", "0.0000", "0.0000"],
  ["/images/creators-3.png", "BC Owner Buy 68", "dooihouhuwoek", "0.0000", "0.0000"],
  ["/images/creators-4.png", "BC Owner Buy 68", "dooihouhuwoek", "0.0000", "0.0000"],
  ["/images/creators-5.png", "BC Owner Buy 68", "dooihouhuwoek", "0.0000", "0.0000"],
]
const ChainList = [
  ["/images/chain1.png", "Ethereum"],
  ["/images/chain80001.png", "Polygon"],
  ["/images/chain97.png", "Binance Smart Chain"],
  ["/images/chain420.png", "Optimism"],
  ["/images/chain421613.png", "Flow"],
]

const data = [
  { collectionFloor: 'Floor 1', price: '$100', volume: '500' },
  { collectionFloor: 'Floor 2', price: '$200', volume: '400' },
  { collectionFloor: 'Floor 3', price: '$300', volume: '300' },
  { collectionFloor: 'Floor 4', price: '$400', volume: '200' },
  { collectionFloor: 'Floor 5', price: '$500', volume: '100' },
];

export default function Home() {


  return (
    <main>
      <div className="fixed w-full top-0 flex justify-between items-center h-[90px] bg-[#2A154D] z-[1000]">
        <div className="ml-[24px]">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="mr-[24px]">
          <Button className="rounded-[31px]" color="primary">
            Launchpad
          </Button>
        </div>
      </div>

      <div className="h-[571px] mt-[87px] bg-[url('/images/banner-bg.png')] bg-cover">
        <div className="h-[466px] flex justify-between items-center p-[52px]">
          <div className="w-[521px]">
            <div className="text-[32px] text-bold text-white">
              Explore & Collect. Mint & Trade. <br />
              All in one NFT world.
            </div>
            <br />
            <div className="text-[16px] text-white leading-[26px]">
              Uptick on Loopring is the open NFT marketplace powered by Uptick<br />
              Network and Loopring. It builds the secure, fast, and cheap<br />
              NFT ecosystem on Ethereum zkRollup Layer2.
            </div>
          </div>
          <div className="w-[600px] flex">
            <Banner list={ImagesList} />
          </div>
        </div>
        <div className="h-[105px] bg-[url('/images/new-bg.png')] bg-cover flex items-center px-[22px]  pt-[25px]">
          <img className="w-[36px] h-[36px]" src="/images/rocket.png" alt="" />
          <div className="text-white ml-[7px]">
            Mission: Empower every creator with advanced AI technology,enabling them to easily create and trade unique NFT digital content，establishing a decentralized, efficient, and stable digital art market.
          </div>

        </div>
      </div>

      <div className="h-[650px] bg-[#151515]">
        <div className="w-full flex justify-center pt-[100px]">
          <span className="text-[28px] text-[#EEEEEE] text-bold mr-[10px]">About</span> <span className="text-[28px] text-[#B06CFF] text-bold">Us</span>
        </div>
        <div className="w-full text-[#EEEEEE] flex justify-center pt-[37px]">
          <div className="w-[550px] text-center leading-[29px]">
            <span className="text-[#B06CFF] text-bold text-[20px] mr-[7px]">MintArtAI</span>
            Invites you to embark on a journey to the future of digital arts,
            where creativity knows no bounds.
          </div>
        </div>
        <Swiper
          className="max-w-[1440px] px-[20px] mt-[120px]"
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={44}
          navigation={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            2240: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            3040: {
              slidesPerView: 4,
              spaceBetween: 250,
            },
          }}
        >
          {
            AboutList.map((e, i) => {
              return <SwiperSlide key={`AboutList` + i} >
                <div className="w-[546px] h-[150px] border-2 border-[#BD85FF] border-solid rounded-[16px] !flex items-center">
                  <img className="w-[240px] absolute left-0" src={e[0]} alt="" />
                  <div className="w-[265px] ml-[240px] text-white text-[16px]">
                    {e[1]}
                  </div>
                </div>

              </SwiperSlide>
            })
          }
        </Swiper>
      </div>

      <div className="h-[850px] bg-[#210942]">
        <div className="w-full flex justify-center pt-[100px]">
          <span className="text-[28px] text-[#EEEEEE] text-bold  mr-[10px]">Real Time</span> <span className="text-[28px] text-[#B06CFF] text-bold">Data Tracking</span>
        </div>
        <div className="max-w-[1440px] m-auto">
          <div className="mt-[60px] flex justify-between">
            <div className="flex gap-[20px] ml-[50px]">
              <Button className="rounded-[31px]" color="primary">
                Trending
              </Button>
              <Button className="rounded-[31px]" color="primary">
                Top
              </Button>
            </div>
            <Button className="rounded-[31px] mr-[50px]" color="primary">
              View All
            </Button>
          </div>
          <div className="flex mt-[40px]">

            <div className="w-[406px] flex flex-col p-4 max-w-md mx-auto">
              <div className="flex text-[#BDC0D1]">
                <div className="w-[200px]">Collection</div>
                <div className="flex-1 flex jusity-start">Floor Price</div>
                <div className="flex-1 flex justify-end">Volume</div>
              </div>
              <div className="w-full h-[1px] bg-[#BDC0D1] mt-[12px]"></div>
              <ul className="w-full space-y-2">
                {data.map((item, index) => {
                  return (
                    <li key={index} className="h-[78px] flex text-[#BDC0D1]">
                      <div className="w-[200px] flex items-center">
                        <div className="">{index + 1}</div>
                        <img className="w-[48px] h-[48px] ml-[25px]" src={`/images/avatar/${index}.png`} alt="" />
                        <div className="ml-[16px]  text-[15px">{item.collectionFloor}</div>
                      </div>
                      <div className="flex-1 flex items-center jusity-start]  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.price}
                      </div>
                      <div className="flex-1 flex items-center justify-end  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.volume}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-[406px] flex flex-col p-4 max-w-md mx-auto">
              <div className="flex text-[#BDC0D1]">
                <div className="w-[200px]">Collection</div>
                <div className="flex-1 flex jusity-start">Floor Price</div>
                <div className="flex-1 flex justify-end">Volume</div>
              </div>
              <div className="w-full h-[1px] bg-[#BDC0D1] mt-[12px]"></div>
              <ul className="w-full space-y-2">
                {data.map((item, index) => {
                  return (
                    <li key={index} className="h-[78px] flex text-[#BDC0D1]">
                      <div className="w-[200px] flex items-center">
                        <div className="">{index + 1}</div>
                        <img className="w-[48px] h-[48px] ml-[25px]" src={`/images/avatar/${index}.png`} alt="" />
                        <div className="ml-[16px]  text-[15px">{item.collectionFloor}</div>
                      </div>
                      <div className="flex-1 flex items-center jusity-start]  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.price}
                      </div>
                      <div className="flex-1 flex items-center justify-end  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.volume}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-[406px] flex flex-col p-4 max-w-md mx-auto">
              <div className="flex text-[#BDC0D1]">
                <div className="w-[200px]">Collection</div>
                <div className="flex-1 flex jusity-start">Floor Price</div>
                <div className="flex-1 flex justify-end">Volume</div>
              </div>
              <div className="w-full h-[1px] bg-[#BDC0D1] mt-[12px]"></div>
              <ul className="w-full space-y-2">
                {data.map((item, index) => {
                  return (
                    <li key={index} className="h-[78px] flex text-[#BDC0D1]">
                      <div className="w-[200px] flex items-center">
                        <div className="">{index + 1}</div>
                        <img className="w-[48px] h-[48px] ml-[25px]" src={`/images/avatar/${index}.png`} alt="" />
                        <div className="ml-[16px]  text-[15px">{item.collectionFloor}</div>
                      </div>
                      <div className="flex-1 flex items-center jusity-start]  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.price}
                      </div>
                      <div className="flex-1 flex items-center justify-end  text-[15px">
                        <img className="w-[18px]" src="/images/ethereum.svg" alt="" />
                        {item.volume}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1200px] bg-[#151515]">
        <div className="w-full flex justify-center pt-[100px]">
          <span className="text-[28px] text-[#EEEEEE] text-bold  mr-[10px]">Artists and</span> <span className="text-[28px] text-[#B06CFF] text-bold">Creators</span>
        </div>
        <div className="w-full text-[#EEEEEE] flex justify-center pt-[32px]">
          <div className="w-[550px] text-center leading-[29px]">
            Statistical Cycle: 24H
          </div>
        </div>
        <div className="max-w-[1440px] m-auto overflow-hidden">
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}

            modules={[Navigation, Autoplay]}
            navigation={true}
            className="max-w-[1440px] mt-[50px] !px-[20px]"
          >
            {
              Creaators.map((e, i) => {
                return <SwiperSlide key={`Creaators` + i}>
                  <div className="w-[236px] h-[310px] border-1 border-[#9B6CFF] border-solid rounded-[31px] !flex flex-col items-center"
                    style={{ background: 'linear-gradient(0deg, #511FA4, #511FA4), linear-gradient(0deg, #9B6CFF, #9B6CFF))' }}>
                    <div className="text-[#BDC0D1] text-[14px] mt-[31px] leading-[17px]">{e[1]}</div>
                    <img className="w-[96px] h-[96px] mt-[40px] mt-[20px]" src={e[0]} alt="" />
                    <div className="text-[#BDC0D1] text-[15px] text-bold mt-[20px] leading-[18px]">{e[2]}</div>
                    <div className="w-full flex justify-between items-center mt-[20px]">
                      <div className="flex-1">
                        <div className="text-[#B0B1BC] text-[14px] text-center leading-[17px]">Floor</div>
                        <div className="text-[#BDC0D1] text-[14px] text-bold text-center mt-[12px] leading-[17px] flex items-center justify-center"><img className="w-[18px]" src="/images/ethereum.svg" alt="" />{e[3]}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[#B0B1BC] text-[14px] text-center leading-[17px]">Volume</div>
                        <div className="text-[#B0B1BC] text-[14px] text-bold text-center mt-[12px] leading-[17px] flex items-center justify-center"><img className="w-[18px]" src="/images/ethereum.svg" alt="" /> {e[4]}</div>
                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              })
            }

          </Swiper>
        </div>


        <div className="w-full flex justify-center pt-[132px]">
          <span className="text-[28px] text-[#EEEEEE] text-bold  mr-[10px]">Partners and</span> <span className="text-[28px] text-[#B06CFF] text-bold">Sponsors</span>
        </div>
        <div className="max-w-[1440px] m-auto mt-[66px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}

          >
            {
              ChainList.map((e, i) => {
                return <SwiperSlide className="!flex flex-col items-center justify-center" key={`ChainList` + i}>
                  <img className="w-[100px] h-[100px]" src={e[0]} alt="" />
                  <div className="text-[20px] text-[#BDC0D1] mt-[21px] text-center">{e[1]}</div>
                </SwiperSlide>
              })
            }

          </Swiper>
        </div>

      </div>

      <div className="h-[190px] bg-[#110E24] flex justify-between items-center px-[37px]">
        <div>
          <img src="/images/logo.svg" alt="" />
          <div className="text-[#D3CBDC] text-[18px] mt-[26px]">
            Copyright @2022 MintArt AI
          </div>
        </div>
        <div>
          <div className="flex gap-[40px] justify-end">
            <a href="" target="_blank"><img src="/images/medium.svg" alt="" /></a>
            <a href="" target="_blank"><img src="/images/email.svg" alt="" /></a>
            <a href="" target="_blank"><img src="/images/tg.svg" alt="" /></a>
            <a href="" target="_blank"><img src="/images/x.svg" alt="" /></a>
            <a href="" target="_blank"><img src="/images/discord.svg" alt="" /></a>
          </div>
          <div className="flex gap-[30px] text-[#B06CFF] mt-[26px]">
            <a href="" target="_blank">Gitbook</a>
            <a href="" target="_blank">Security and Privacys</a>
            <a href="" target="_blank">GSocial Media Links</a>
            <a href="" target="_blank">Contact Us</a>
          </div>
        </div>
      </div>


    </main>
  )
}
