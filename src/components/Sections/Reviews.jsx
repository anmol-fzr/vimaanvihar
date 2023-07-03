import metro from "../../assets/images/compressed/metro.webp"
import airport from "../../assets/images/compressed/airport.webp"
import movies from "../../assets/images/compressed/movies.webp"
import study from "../../assets/images/compressed/study.webp"
import hospital from "../../assets/images/compressed/hospital.webp"
import club from "../../assets/images/compressed/club.webp"
import cricket from "../../assets/images/compressed/circket.webp"
import university from "../../assets/images/compressed/university.webp"
import f1 from "../../assets/images/compressed/f1.webp"

export const appreciations = [
    {
        image: metro,
        text: "metro station"
    },
    {
        image: movies,
        text: "Film City"
    },
    {
        image: study,
        text: "education hub"
    },
    {
        image: airport,
        text: "airport"
    },
    {
        image: hospital,
        text: "hospital"
    },
    {
        image: club,
        text: "clubhouse"
    },
    {
        image: cricket,
        text: "cricket stadium"
    },
    {
        image: university,
        text: "gautam buddha university"
    },
    {
        image: f1,
        text: "F1 track"
    },
]

export default function Reviews() { 
    return (
        <div className='container' >
            <div className='mb-20 mt-28 ' >
                <h2 className="h2 section-title ">
                    Features
                </h2>
                <div className='flex flex-wrap items-center justify-between w-full pb-4 mx-auto gap-y-6 scroll-smooth ' >
                    {appreciations.map(({ image, text }) => (
                        <div key={text} className=" w-fit sm:!w-[375px] mx-auto  h-full space-y-4 break-inside-avoid rounded-xl transition-bottom bg-gray-50 active:scale-95 border-light/25 font-dm" >
                            <article className="overflow-hidden sm:!w-[375px] rounded-lg shadow-lg">
                                <a href="#">
                                    <img loading='lazy' alt="Placeholder" className="block sm:!w-[375px] h-[266px] object-cover" src={image} />
                                </a>
                                <header className="flex items-center justify-between p-2 leading-tight md:p-4">
                                    <h1 className="text-lg">
                                        <p className="text-black no-underline capitalize hover:underline" href="#">
                                            {text}
                                        </p>
                                    </h1>
                                </header>
                            </article>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}
