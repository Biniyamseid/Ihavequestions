// import '@styles/globals.css';
import Feed from "@components/feed";
const Home = () =>  (
  <section className="w-full flex-center flex-col">
    
    <h1 className="text-center head_text">Ask any question 
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">and get answers</span>
    </h1>
    <p className="flex text-center desc">  ank anyquestion and get answers is a website that lets you bring question and get answer from peers</p>
      <Feed/>
  </section>
  )

export default Home;