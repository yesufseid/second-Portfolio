
   
type Props={
    title:string,
    des:string
}


export default function Title({title,des}:Props) {
  return (
    <div className="flex flex-col gap-5 font-titleFont my-14 ">
    <h2 className="text-sm text-designColor tracking-wide font-light uppercase">{title}</h2>
    <h4  className="text-5xl text-gray-200 capitalize font-bold">{des}</h4>
    </div>
  )
}
