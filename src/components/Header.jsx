import headerbg from '../assets/images/banner.png'

const Header = () => {
    return (
        <div className='bg-no-repeat h-screen -mt-28 pt-28' style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),url(${headerbg})` }}>
            <h3 className='text-4xl text-center font-bold uppercase mt-4'>I grow by helping people in need.</h3>
            <form className='text-center mt-10'>
                <input
                    type="text"
                    placeholder='search'
                    className='bg-[#FBFBFB] rounded-sm outline-0 border py-2.5 md:w-1/4 pl-4'
                />
                <button className='btn btn-primary rounded-l-none px-8' type='submit'>Search</button>
            </form>
        </div>
    );
};

export default Header;