import Span from "../Span";

export default function CommentBox({title, desc, className} : {title: string; desc: string; buttonRef?: string | undefined; className?: string | undefined}) {
  return (
    <div className={`space-y-5  w-11/12 xlg:w-10/12 mx-auto lg:mx-0 lg:w-[50%] xl:w-[50%] py-14 px-2 lg:px-14 bg-[#3b5c77f5] text-center rounded-2xl ${className}`}>
        <h1 className="text-xl xl:text-3xl  font-bold  font-poppins xl:w-[450px] mx-auto">{title}</h1>
        <Span/>
        <p className="text-xs xl:text-base mb-2 xl:mb-6  font-inter">{desc}</p>
    </div>
  )
}
