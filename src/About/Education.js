import FadeSlide from '../components/FadeSlide';

const Education = () => {
  return (
    <div className="flex-1 py-20 max-w-7xl mx-auto px-4">
        <div>
            <FadeSlide delay={0.2} direction="up">
                <p className="text-yellow-500 text-sm mb-2">— Education</p>
            </FadeSlide>
            <FadeSlide delay={0.4} direction="up">
                <h2 className="text-3xl font-bold text-white mb-8">SSC & HSC <span className="text-yellow-400">Education</span></h2>
            </FadeSlide>

            <FadeSlide delay={0.6} direction="up">
                <div className="mb-8 p-6 bg-[#3D5240] rounded-lg shadow-lg">
                    <p className="text-yellow-400 mb-2 text-lg font-semibold">2020</p>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Secondary School Certificate (SSC)</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Completed 10th Standard from Shri Amrutba Madhyamik Shala, Amreli.
                    </p>
                </div>
            </FadeSlide>

            <FadeSlide delay={0.8} direction="up">
                <div className="p-6 bg-[#3D5240] rounded-lg shadow-lg">
                    <p className="text-yellow-400 mb-2 text-lg font-semibold">2022</p>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-3">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-gray-300 leading-relaxed">
                        Completed 12th Standard from Oxford School of Science - Amreli. Built a strong foundation in Mathematics, Physics, and Computer Science, developing analytical and problem-solving skills essential for engineering studies.
                    </p>
                </div>
            </FadeSlide>
        </div>
    </div>
  );
};

export default Education