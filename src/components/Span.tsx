const Span = ({margin}:{margin?:string}) => {
    return (
        <span className={`block w-[40px] h-[3px] bg-secondary rounded-full ${margin ? margin :"mx-auto"}`}></span>
    );
};

export default Span;