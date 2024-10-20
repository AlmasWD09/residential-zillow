import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const EstatesCard = ({ categorie }) => {
    const {id, image, title, name, description, price, location, status, facility } = categorie || {};

    
    return (
        <div className="card bg-gray-100 rounded-none shadow">
            <div className='relative'>

                <figure className="h-52 w-full ">
                    <img className='hover:scale-110 duration-200' src={image} alt={name} loading='lazy' />
                </figure>
                <p className='absolute top-0 right-0 px-4 py-2 bg-emerald-900 text-white rounded-tl rounded-bl lowercase'>{status}</p>
            </div>
            <div className="px-3 space-y-3">
                <h2 className="card-title pt-2">{title}</h2>
                <p>{description}</p>
                <p className="font-semibold">Price: {price}</p>
                <small>{location}</small>
                <div>
                    <p className="font-semibold">Facilitys:</p>
                    {facility.map((item, idx) => {
                        return (
                            <li className="list-decimal" key={idx}>{item}</li>
                        )
                    })}
                </div>
            </div>
            
            {/* View Details button */}
            <div className="card-actions pt-2">
                <Link to={`/viewDetails/${id}`} className='w-full'>
                    <button className="w-full rounded relative inline-flex group items-center justify-center  py-2 cursor-pointer  border-l-2 active:border-lime-700 active:shadow-none shadow-lg bg-gradient-to-tr from-lime-700 to-lime-700 border-lime-700 text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                        <span className="relative">View Details</span>
                    </button>
                </Link>
            </div>
        </div>

    );
};

EstatesCard.propTypes = {
    categorie: PropTypes.string,
};
export default EstatesCard;
