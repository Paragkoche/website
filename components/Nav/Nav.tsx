import { NextPage } from "next"
const Nav: NextPage = () => {
    return (
        <nav className="flex backdrop-blur-3xl w-full top-0 h-[80px] fixed z-[1000] items-center justify-between p-5">
            <div className=" w-fit items-center flex justify-around">
                <i className="far fa-bars w-5 h-5 cursor-pointer mx-2"></i>
                <div className="w-[40px] h-[40px] cursor-pointer" onClick={() => window.location.href = '/'}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 163.3 154.2" xmlSpace="preserve">
                        <style type="text/css" jsx>{`
                         .st0{fill:#FFFFFF;}
                         .st1{fill:none;stroke:#000000;stroke-miterlimit:10;}
                        `}

                        </style>
                        <path d="M71.4,57.4c0,1.8-2.4,2.6-3.5,1.1c-6.3-8.8-19.6-26.7-28.5-33.7C30,17.3,13.1,8.8,6.3,5.5c-1.4-0.7-2.9,0.4-2.7,2
	c0.7,6,3.3,19.2,12.9,30.5c13.2,15.6,32.6,22.7,42.4,25.5c9.8,2.9,7,2.5,7,2.5l-1.5,0.9l2,0.4c0.4,0.1,0.8,0,1.2-0.1l0,0
	c0.4-0.2,0.9-0.2,1.3-0.1l5.6,1.6c0.3,0.1,0.6,0.1,0.9,0l2.5-0.5c0,0,0.1,0,0.2,0l3.3-0.3c0.3,0,0.6-0.1,0.9-0.3
	c2.3-1.7,12.9-10.5,14.9-33.9c1.3-15.5,2.4-24.2,3-28.6c0.2-1.6-1.6-2.8-3-1.8c-4,2.8-10.4,7.8-14.8,14.6
	C76.5,27.1,71.8,40.9,71.4,57.4z"/>
                        <g>
                            <path d="M48.9,154.7v-0.4c0-11,9.4-24.8,27-38.5c15.3-12,14.6-26.2,14.4-27.5c-0.4-2,0.1-17.7-15.3-17.4
		c-11.2,0.3-15.8,5.1-18.2,16.1c-0.3,1.5-1.7,4.8-3.3,4.8L53.2,92c-2.1,0-3.5-4.2-3.1-6.3C52.9,73.1,62,64.6,77,64.6
		c17.9,0,54.9,5.8,52.8,26.9c-1.8,18-33,15.5-49.4,29c-10.6,8.6-17.8,15.9-21.6,22.9c-1.2,2.2,0.5,4.8,2.9,4.8h40.6
		c2.1,0,3.6,1.9,3.2,3.9l0,0c-0.3,1.6-1.6,2.7-3.2,2.7L48.9,154.7L48.9,154.7z"/>
                        </g>
                        <circle className="st0" cx="107.2" cy="81" r="6.3" />
                        <g>
                            <path d="M58.3,154.8v-0.4c0-11.1-9.4-25-27.1-38.9c-15.4-12.1-19.3-15.8-19.3-27c0-9.8,5.4-18.2,18.2-18.2
		c11.3,0,17.6,5.1,20.2,16.3c0.4,1.5,1.7,2.6,3.2,2.6h0.2c2.1,0,3.7-2,3.3-4c-2.9-12.8-11.9-21.4-27-21.4
		c-17.9,0-25.6,12.4-25.6,24.3c0,13.9,5.8,18.5,22.2,32.1c10.6,8.7,17.9,16,21.7,23.1c1.2,2.2-0.5,4.9-3,4.9H4.8
		c-2.1,0-3.6,1.9-3.3,3.9l0,0c0.3,1.6,1.7,2.7,3.3,2.7L58.3,154.8L58.3,154.8z"/>
                        </g>
                        <line className="st1" x1="131.7" y1="85.2" x2="159.6" y2="78.1" />
                        <line className="st1" x1="128.1" y1="80.2" x2="145.7" y2="68" />
                        <line className="st1" x1="132.3" y1="91.1" x2="152.8" y2="94.6" />
                    </svg>

                </div>
            </div>
            <form className="w-[820px] h-full relative">
                <input className="outline-none border-none bg-[#EBEBEB] h-full w-full rounded-3xl pl-5 pr-10 placeholder:text-white" placeholder="search" />
                <button type="submit" className="fal fa-search absolute right-5 top-[15px] text-white cursor-pointer"></button>
            </form>
            <div className="flex justify-end">
                <ul className="flex">
                    <li>
                        <img src="" className="rounded-full" />
                    </li>
                </ul>
            </div>
        </nav >
    )
}
export default Nav