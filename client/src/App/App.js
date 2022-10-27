import './App.css';
import Header from './sections/Header/Header';
import IntroSection from './sections/IntroSection/IntroSection';
import CourseSection from './sections/CourseSection/CourseSection';
import img from '../img/librogif.gif'
import Footer from './sections/Footer/Footer';

function App() {
    return (
        <div className='app'>
            <Header/>
            <IntroSection/>
            <div className='break'><img className='break_img' src={img} alt='img'/></div>
            <CourseSection/>
            <div className='break'><img className='break_img' src={img} alt='img'/></div>
            <Footer/>
        </div>
    )
}
export default App;