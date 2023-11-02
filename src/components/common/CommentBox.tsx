import { Button } from "./Button";

export default function CommentBox({title, desc, className} : {title: string; desc: string; buttonRef?: string | undefined; className?: string | undefined}) {
  return (
    <div className={` w-11/12 xlg:w-10/12 mx-auto lg:mx-0 lg:w-[50%] xl:w-[50%] py-9 px-2 lg:px-14 bg-[#3b5c77f5] text-center rounded-2xl ${className}`}>
        <h1 className="text-xl xl:text-3xl mb-2 xl:mb-6 font-bold ">{title}</h1>
        <p className="text-xs xl:text-base mb-2 xl:mb-6">{desc}</p>
        <Button className="bg-secondary text-white py-2 px-3 xl:px-5 rounded-full text-sm xl:text-base">Learn More</Button>
    </div>
  )
}
