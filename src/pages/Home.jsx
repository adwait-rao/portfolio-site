import adwait_img from "../assets/adwait_img.jpg";

const Home = () => {
  return (
    <section id="home" className="flex h-[100vh] bg-colbase pt-24 items-center justify-center">
      <div className="flex-col text-center">
        <img src={adwait_img} className="inline rounded-full w-52 h-52" />
        <p className="font-display mt-5 text-colwhite font-bold text-5xl">
          Hello! i'm{" "}
          <span className="inline font-display font-bold text-5xl text-transparent bg-gradient-to-r from-violet-600 via-teal-400 to-green-400 bg-clip-text bg-300% animate-gradient">
            Adwait
          </span>
        </p>
        <p className="font-body text-lg max-w-xl mx-auto">
          <span className="block italic text-slate-400 my-2">
            Aspiring Web Developer | Creative Thinker
          </span>
          <span className="block my-0 text-slate-200">
            Welcome to my corner of the web! i'm a passionate and dedicated beginner web developer
            with a knack of turning ideas into immersive digital experiences.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Home;
