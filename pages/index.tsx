import { GetServerSideProps, NextPage } from "next"
import axios from "axios"
import Side from "../components/Side/Side"
import { type } from "os"


type d = [{
  url: string,
  title: string,
  preview: string,
  image: string,
  duration: string,
  view: string,
  rating: string
}]
type dss = {
  url: string,
  preview: string,
  image: string,
  duration: string,
  view: string,
  rating: string
}
const Home: NextPage<{
  data: d, side: Array<{
    channel_url: string,
    name: string,
    profilepic: string,
    viwes: string,
    video_count: string,
    rank: string
  }>
}> = (props) => {
  function a(s: any[], chunkSize: any) {
    var temporal = [];

    for (var i = 0; i < s.length; i += chunkSize) {
      temporal.push(s.slice(i, i + chunkSize));
    }

    return temporal;
  }
  const ds = props.data
  // console.log(ds);
  const s = ds.slice(0, ds.length / 2)
  const s2 = ds.slice(ds.length / 2, ds.length)
  // console.log(s, s2);
  const ss = a(s2, s2.length / 3)

  console.log(s[0]);

  return <main className=' mt-20 w-full h-full'>
    <Side data={props.side} />
    <main className='class-main-body ml-[220px] w-[90%]'>

      <section className='px-[40px] w-full my-5 '>
        <header className='flex items-center justify-between  mb-5'>
          <h1 className="text-[#FFA31A] font-bold font-[26px]">Recommended</h1>
          <div className="flex justify-end">
            <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
              <i className="fas fa-chevron-left text-white"></i>
            </button>
            <button className='w-[30px] h-[30px] mr-[10px] bg-black/30 rounded-full flex items-center justify-center'>
              <i className="fas fa-chevron-right text-white"></i>
            </button>
          </div>
        </header>
        <main className='w-full overflow-y-auto flex'>
          {s.map((v: any, i) => (
            <div className="flex flex-col mx-5">
              <div className="rounded-[14px] overflow-hidden w-[540px] h-[250px] class-main-img-con">

                <img className="w-full h-full " src={v.img} onMouseOver={e => e.currentTarget.src = v.preview} />
              </div>
              <div className="flex flex-col w-full h-fit">
                <h1 className="text-black font-bold">{v.title}</h1>
                <div className="flex justify-between">
                  <p className="text-[#C2C2C2] font-[13px] mr-1">{v.view} - view -{v.duration}</p>

                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
      <section className='px-[40px] w-full '>
        <header className="flex items-center justify-between  mb-5">
          <h1 className="text-[#FFA31A] font-bold font-[26px]">All</h1>

        </header>
        <main className="w-full overflow-y-auto flex all-f">
          <div className="w-1/3 mx-5">
            {ss[0].map((v: any, i: any) => (
              <div key={i} className="flex flex-col mx-5 w-full mb-5">
                <div className="rounded-[14px] overflow-hidden w-full h-[250px] class-main-img-con-2">

                  <img className="w-full h-full " src={v.img} onMouseOver={e => e.currentTarget.src = v.preview} />
                </div>
                <div className="flex flex-col w-full h-fit">
                  <h1 className="text-black font-bold">{v.title}</h1>
                  <div className="flex justify-between">
                    <p className="text-[#C2C2C2] font-[13px] mr-1">{v.view} - view -{v.duration}</p>

                  </div>
                </div>
              </div>


            ))}
          </div>
          <div className="w-1/3 mx-5">
            {ss[1].map((v: any, i: any) => (
              <div key={i} className="flex flex-col mx-5 w-full mb-5">
                <div className="rounded-[14px] overflow-hidden w-full h-[250px] class-main-img-con-2">

                  <img className="w-full h-full " src={v.img} onMouseOver={e => e.currentTarget.src = v.preview} />
                </div>
                <div className="flex flex-col w-full h-fit">
                  <h1 className="text-black font-bold">{v.title}</h1>
                  <div className="flex justify-between">
                    <p className="text-[#C2C2C2] font-[13px] mr-1">{v.view} - view -{v.duration}</p>

                  </div>
                </div>
              </div>


            ))}
          </div>
          <div className="w-1/3 mx-5">
            {ss[2].map((v: any, i: any) => (
              <div key={i} className="flex flex-col mx-5 w-full mb-5">
                <div className="rounded-[14px] overflow-hidden w-full h-[250px] class-main-img-con-2">

                  <img className="w-full h-full " src={v.img} onMouseOver={e => e.currentTarget.src = v.preview} />
                </div>
                <div className="flex flex-col w-full h-fit">
                  <h1 className="text-black font-bold">{v.title}</h1>
                  <div className="flex justify-between">
                    <p className="text-[#C2C2C2] font-[13px] mr-1">{v.view} - view -{v.duration}</p>

                  </div>
                </div>
              </div>


            ))}
          </div>

        </main>
      </section>
    </main>
  </main>
}

Home.getInitialProps = async () => {
  const data = await (await axios.get('https://xxnxx.vercel.app/')).data
  const data2: Array<{
    channel_url: string,
    name: string,
    profilepic: string,
    viwes: string,
    video_count: string,
    rank: string
  }> = await (await axios.get('https://xxnxx.vercel.app/top/list/pornstars/')).data.result

  // console.log(data);

  return { data: data, side: data2 }
}
function splitToChunks(array: any[], parts: any) {
  let result = [];
  for (let i = parts; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}
export default Home