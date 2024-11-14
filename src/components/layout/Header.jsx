import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-4 gap-3 mt-4'>
            <img src={logo} alt="" />
            <p className='text-gray-500 text-lg'>Journalism Without Fear or Fevour</p>
            <p className='text-lg font-bold'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;