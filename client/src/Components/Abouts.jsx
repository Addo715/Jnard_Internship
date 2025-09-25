import React from "react";

const Abouts = () => {
  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      {/* H1 Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 uppercase">About Us</h1>
        <div className="w-20 h-[3px] mx-auto mt-3 rounded-full bg-gradient-to-r from-blue-600 to-[#DDD9FF]"></div>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
        <div className="relative shadow-2xl  rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
            alt=""
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                alt="image"
                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
              />
              <div className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                50+
              </div>
            </div>
            <p className="text-sm font-medium text-slate-800">
              Join our developer community
            </p>
          </div>
        </div>

        <div className="text-sm text-slate-600 max-w-lg">
          <h2 className="text-xl uppercase font-semibold text-slate-700">
            What we do?
          </h2>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-[#DDD9FF]"></div>
          <p className="mt-8">
            Start your career with{" "}
            <span className="font-semibold">Jnard IT Consult</span>. Apply as an
            intern, gain real-world experience, and grow with the guidance of
            expert mentors.
          </p>
          <p className="mt-4">
            Whether you’re a student, graduate, or aspiring professional, our
            internship program is designed to help you build practical skills,
            explore opportunities in tech, and kickstart your career journey.
          </p>
          <p className="mt-4">
            Join us today and take the first step toward becoming part of a
            dynamic and innovative community that values growth, collaboration,
            and success.
          </p>

          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-blue-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
            <span>Read more</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Abouts;
