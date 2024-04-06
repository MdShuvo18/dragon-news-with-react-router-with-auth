import logo from '../../../src/assets/logo.png'
import moment from 'moment'
const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;