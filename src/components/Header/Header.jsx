import x from "../../assets/svg/phone-call.png"
import { PHONE } from "../../utils/constants"


export default function Header() {
    return (
        <div className="sticky top-0  p-2 w-full bg-gray-100 z-[5]" >
            <div className='container ' >
                <div className='flex flex-col gap-2 mx-auto md:mr-0 md:flex-row w-fit' >
                    <p className='font-semibold' >Questions? Give us a call</p>
                    <div className='flex gap-2 '  >
                        <img loading='lazy' width={24} height={24} src={x} className='h-6 ' alt="call" />
                        <a className='z-[5] underline' href={`tel:+91${PHONE}`} >+91 {PHONE.slice(0, 5) + "-" + PHONE.slice(5)}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
