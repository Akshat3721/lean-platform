import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import LearningExperience from './components/LearningExperience';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Professors from './components/Professors';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div className="pt-16 bg-[#FDF8EE]">
      <Navbar />
      <Hero />
      <Courses />
      <LearningExperience />
      <Testimonials />
      <Professors />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
