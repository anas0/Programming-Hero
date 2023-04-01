import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/Blogs/Blogs'
import Read from './components/Read/read'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Question from './components/Question/Question'

function App() {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const [bookMarked, setBookMarked] = useState([]);

  const handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if(previousReadTime){
      const newReadTime = previousReadTime + time;
      localStorage.setItem('readTime', newReadTime);
      setReadTime(newReadTime);
    }
    else{
      localStorage.setItem('readTime', time);
      setReadTime(time);
    }
  }

  const handleBookmarked = (bookmarked) => {
    let newBookMarked = [];
    const exists = JSON.parse(localStorage.getItem('bookMarked'));
    console.log(exists);
    if(exists){
      newBookMarked = JSON.stringify([...exists, bookmarked]);
      localStorage.setItem('bookMarked', newBookMarked);

      const hasRead = exists.find(exist => exist === bookmarked);
      if(hasRead){
        toast("This blog already has been read");
      }
    }
    else{
      newBookMarked = JSON.stringify([bookmarked]);

      localStorage.setItem('bookMarked', newBookMarked);      
    }
    setBookMarked(newBookMarked);
  }

  useEffect( ()=>{
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="App px-5 md:px-10 lg:px-28">
      <header className='border-b-2 border-b-slate-200'>
        <Navbar></Navbar>
      </header>

      <main>
        <section className='grid md:grid-cols-3 gap-4'>
          <div className="blogs md:col-span-2">
            <Blogs 
              blogs={blogs} 
              handleReadTime={handleReadTime} 
              handleBookmarked={handleBookmarked}
            ></Blogs>
          </div>
          <div className="right-side-bar mt-8">
            <Read 
              readTime={readTime} 
              bookMarked={bookMarked}
            ></Read>
          </div>
        </section>

        <section>
          <Question></Question>
        </section>
      </main>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
