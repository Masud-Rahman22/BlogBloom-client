import swal from 'sweetalert';
import backgroundImg from '../../public/newsletter image/v915-wit-011-l.jpg'
import axios from 'axios';

const Newsletter = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const userEmail = {email}
        axios.post('http://localhost:5000/newsletter',userEmail)
        .then(res=>{
            console.log(res.data);
            if(res.data.insertedId){
                swal("Welcome","thank you for subscribing to our newsletter", "success");
            }
        })
        
    }
    return (
        <div className='md:mt-32'>
            <img className='absolute w-full h-[50vh]' src={backgroundImg} alt="" />
            <div className=' relative md:ml-96'>
            <form onSubmit={handleSubmit} className='flex flex-col'>
            <input className="border-b-2 font-bold text-sm w-[300px] md:w-[700px] mt-10 p-2 rounded-lg" type="email" name="email" id="" placeholder="Enter Your Email" required />
            <button className="bg-blue-500 text-white w-[100px] h-[50px] mt-10 rounded-md p-3">Subscribe</button>
            </form>
            </div>
            <div className='relative md:ml-96 mt-12'>
                <h1 className='text-black text-xl mb-5'>Keep up our latest news and events.</h1>
                <h1 className=' text-3xl'> Subscribe our <span className='text-blue-500 font-merienda'>NEWSLETTER</span></h1>
            </div>
        </div>
    );
};

export default Newsletter;