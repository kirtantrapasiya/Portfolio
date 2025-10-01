import Cards from './Cards';
import Button from '../Button/Button';
import { useState } from 'react';
import FadeSlide from '../components/FadeSlide';

const Skills = ({skills}) => {

  const firstThree = skills.slice(0, 4);

  const [viewAll, setViewAll] = useState(false);


  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <FadeSlide delay={0.2} direction="up">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              <span className="text-yellow-500">Skills </span>
              <span>& Technologies</span>
            </h2>
          </div>
        </FadeSlide>
        <FadeSlide delay={0.4} direction="up">
          <Button onView={setViewAll} sectionName="Skills" />
        </FadeSlide>
      </div>

      <FadeSlide delay={0.6} direction="up">
        <Cards skills={viewAll ? skills : firstThree} />
      </FadeSlide>
    </section>
  );
};

export default Skills;
