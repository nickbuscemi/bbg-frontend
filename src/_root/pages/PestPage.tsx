import { useParams } from 'react-router-dom';
import { insects } from '../../data/pest-data'; // Adjust the path according to your project structure

const InsectPage = () => {
  const { insectName } = useParams();
  const insect = insects.find((insect) => insect.name.toLowerCase() === insectName);

  if (!insect) {
    return <h2>Pest not found</h2>;
  }

  return (
    <section className="py-12 bg-logoDarkGray sm:py-16 lg:py-20 font-helvetica-bold-condensed">
      
      <h1 className='text-7xl text-gray-50'>{insect.name}</h1>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
   

        <div className="grid grid-cols-1 mt-10 lg:grid-cols-12 lg:mt-24 gap-y-10 lg:gap-x-32">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl lg:h-full max-h-96 lg:max-h-full">
              <img className="object-cover lg:h-full" src={insect.img} alt={insect.alt} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base font-normal leading-7 text-gray-300 font-pj">{insect.description}</p>

            <h2 className="mt-10 text-2xl text-white font-pj font-bold">Interesting Facts</h2>
            <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj">{insect.detail}</p>

            <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc list-outside font-pj">
              {insect.detailsList.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl text-white font-pj font-bold">What you can do</h2>
            <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj">{insect.additionalInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsectPage;
