import LeftBanner from "./LeftBanner"
import bannerimg  from "../../constant/sg.png"

export default function Banner() {
  return (
    <section id="home" className="w-fulln pt-10 pb-20 border-b-[1px] border-b-black font-titleFont flex ">
        <div className="w-1/2 flex flex-col gap-20">
        <LeftBanner />
        </div>
        <div className="w-1/2 flex justify-center items-center relative ">
           <img className="w-[500px] h-[680px] z-10" src={bannerimg} alt="mkmmmmmmmmm" />
           <div  className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r
            from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
        </div>
    </section>
  )
}
