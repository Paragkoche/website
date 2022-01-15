import axios from "axios"
import { NextPage } from "next"
import React from "react"

const Side: NextPage<{
    data: Array<{
        channel_url: string,
        name: string,
        profilepic: string,
        viwes: string,
        video_count: string,
        rank: string
    }>
}> = (props) => {
    const sol = async () => {
        const data2: Array<{
            channel_url: string,
            name: string,
            profilepic: string,
            viwes: string,
            video_count: string,
            rank: string
        }> = await (await axios.get('https://xxnxx.vercel.app/top/list/pornstars/')).data.result
        console.log(data2);

        return data2
    }
    const [datas, setData] = React.useState(props.data)
    return (<section className="class-side fixed left-5 w-[200px] h-full">

        <div className="class-side-cont p-[12px] h-full">
            <header className="class-side-heading font-bold md text-[18px] mb-[20px]">
                Popular Pornstar
            </header>
            <ul className={`h-[80%] class-side-ul overflow-y-auto w-fit`} onScroll={(e) => {
                var lastDivOffset = e.currentTarget.offsetTop + e.currentTarget.clientHeight;
                var pageOffset = window.pageYOffset + window.innerHeight;
                console.log(pageOffset > lastDivOffset - 10);
                console.log(e.currentTarget.offsetTop, e.currentTarget.clientHeight)
                // if (pageOffset > lastDivOffset - 10) {
                //     sol().then((r: any) => {
                //         setData((s) => [...s, ...r])
                //     })
                // }
            }}>
                {datas.map((v, i) => (
                    <li key={i} className="class-side-li flex cursor-pointer w-fit h-10 my-4 items-center">
                        <i className="mr-5 w-[40px] h-[40px]">
                            <img src={v.profilepic} className="rounded-full" />
                        </i>
                        <p className=" text-[#808080] class-side-p " >{v.name}</p>
                    </li>
                ))}
                <button onClick={() => {
                    sol().then((r: any) => {
                        setData((s) => [...s, ...r])
                    })
                }}>LOAD</button>
            </ul>
        </div>
    </section>)
}

export default Side