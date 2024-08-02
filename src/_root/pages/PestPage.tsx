import { useParams } from 'react-router-dom';
import { insects } from '../../data/pest-data'; // Adjust the path according to your project structure

const InsectPage = () => {
  const { insectName } = useParams();
  const insect = insects.find((insect) => insect.name.toLowerCase() === insectName);

  if (!insect) {
    return <h2 className="text-center text-white">Pest not found</h2>;
  }

  return (
    <section className="py-12 bg-logoDarkGray sm:py-16 lg:py-20">
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj text-center">{insect.name}</h1>
        <p className="text-sm font-normal text-gray-300 font-pj text-center">{insect.latin}</p>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 mt-10 lg:grid-cols-12 lg:mt-24 gap-y-10 lg:gap-x-28">
          <div className="lg:col-span-5">
            <div className="overflow-hidden w-full rounded-2xl lg:h-full max-h-96 lg:max-h-full">
              <img className="object-cover w-full" src={insect.img2} alt={insect.alt} />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-base font-normal leading-7 text-gray-300 font-pj text-left">{insect.description}</p>

            <h2 className="mt-10 text-2xl text-white font-pj font-bold text-left">Interesting Facts</h2>
            <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj text-left">{insect.detail}</p>

            <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc list-outside font-pj text-left">
              {insect.detailsList.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl text-white font-pj font-bold text-left">What you can do</h2>
            <p className="mt-6 text-base font-normal leading-7 text-gray-300 font-pj text-left">{insect.additionalInfo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsectPage;
