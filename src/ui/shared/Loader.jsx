const Loader = ({ size = "md", color = "border-primary" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-16 h-16",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full border-4 ${color} border-t-transparent ${sizeClasses[size]}`}
      />
    </div>
  );
};

export default Loader;
