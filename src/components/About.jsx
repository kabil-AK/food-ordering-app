
import aboutImage from '../pages/Food 1.jpeg';


 export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-24 grid grid-cols-2">
        <div>
          <h2 className="text-2xl font-medium">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit iure
            eligendi consequatur commodi praesentium, odit cum deleniti
            accusantium hic similique, sunt sed. Explicabo eligendi, rem
                      cupiditate ab non reiciendis sed Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium et sed non, explicabo ad ea quas natus quae, in ut nemo
                      , fugit fugiat temporibus voluptatibus? Minima voluptatibus quibusdam fugit.
          </p>
              </div>
              <div className='flex items-center justify-center'>
                  <img src={aboutImage} alt="" className='w-[400px] h-[400px] object-cover' />
              </div>
      </div>
    </div>
  );
}

export default About;