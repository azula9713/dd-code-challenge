import NotFoundBg from "../assets/404.jpg";

const NotFound = () => {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-[calc(100vh-4rem)]">
      <img
        src={NotFoundBg}
        className="absolute h-full w-full object-cover"
        alt="404"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            Are you lost adventurer?
          </h1>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
