const ShinyText = ({ disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
       <span className="  font-[estile1]" style={{
    WebkitTextStroke: "0.5px white", // Black stroke of 2px
    WebkitTextFillColor: "transparent", // Makes text transparent to show stroke
  }}>LaksHay</span>
    </div>
  );
};

export default ShinyText;

