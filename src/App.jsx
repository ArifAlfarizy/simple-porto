import Hero from "./Hero";
import Resume from "./Resume";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";
import catTyping from './assets/images/cat-typing.gif'
import arifBasketball from './assets/images/bball-img.svg'

const App = () => {
  return (
    <div>
      <Hero />
      <Resume />
      <Skill
        imgClass="cat-typing"
        imgSource={catTyping}
        imgAlt="cat-typing"
        unit="Web Development"
        detail=" I began coding during my college years as an Informatics
              undergraduate at UPNVJ because I wanted to understand how web
              applications are built. Since then, I have developed strong
              full-stack web development skills across both the client and
              server side."
      />
      <Skill
        imgClass="bball-img"
        imgSource={arifBasketball}
        imgAlt="arif holding his basketball trophy"
        unit="Playing Basketball"
        detail="I’m basically so good at basketball that if Kyrie Irving saw me play, he’d probably take notes.
              Haha just kidding."
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
