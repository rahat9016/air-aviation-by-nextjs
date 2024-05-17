const Span = ({ className, margin }: { className?: string; margin?: string }) => {
    return (
      <span className={`block w-[40px] h-[3px] bg-secondary rounded-full ${margin ? margin : 'mx-auto'} ${className ? className : ''}`}></span>
    );
  };
  
  export default Span;
  