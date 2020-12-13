import React,{useState} from "react";
import "./styles.css";

const creators_headers = 
{
  "Kunal Shah":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/profileimg.jpg",

  "Luke Coutinho":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/profileimg.jpg",

  "Prashant Mahajan":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/profileimg.jpg",

  "Ranveer Allahbadia":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/profileimg.jpg",

  "Swapnil Aggarwal":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/profileimg.jpg",

  "Tanay Pratap":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/profileimg.jpg"
}

const creators = {

  "Kunal Shah" :[
    {
      "Author":"Al Ramdan",
         "BookName":"Play Bigger: How Pirates, Dreamers and Innovators Create and Dominate ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/bookscover/rangehow_davidespstein.jpg"

    },
    {
      "Author":"David Epstein",
       "BookName":"Range-Generalists-Triumph-Specialized-World",
  
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/kunalshah/bookscover/playbigger_alramdan.jpg"
    }
  ],

  "Luke Coutinho":[
    {
      "Author":"Luke Coutinho",
      "BookName":"The Magic Weight-Loss Pill: 62 Lifestyle Changes ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/62lifestylechanges.jpg"
    },
    {
      "Author":"Luke Coutinho",
      "BookName":"The Dry Fasting Miracle: From Deprive to Thrive",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/dryfasting.jpg"
    },
    {
      "Author":"George Samuel Clason",
      "BookName":"The Richest Man in Babylon",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/lukecoutinho/bookscover/richestman.jpg"
    },
    // {
    //   "Author":"Luke Coutinho",
    //   "BookName":"The Magic Immunity Pill",
    //   "BookcoverURL":"creators/lukecoutinho/bookscover/shilpa-luke-book-cover.png"
    // },
  ],

  "Prashant Mahajan":[
    {
      "Author":"Peter Theil",
      "BookName":"Zero to One: Notes on Startups, or How to Build the Future",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/zero.jpg"
    },
    {
      "Author":"George Orwell",
      "BookName":"Animal Farm",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/animalfarm.jpg"
    },
    {
      "Author":"Kai-Fu Lee",
      "BookName":"AI Superpowers: China, Silicon Valley, and the New World",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/ai.jpg"
    },
    {
      "Author":"T N Hari",
      "BookName":"Saying No to Jugaad: The Making of Bigbasket",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/juggad.jpg"
    },
    {
      "Author":"Jason Fried",
      "BookName":"It Doesn’t Have to Be Crazy at Work",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/prashantmahajan/bookscover/work.jpg"
    },
  ],

  "Ranveer Allahbadia":[
    {
      "Author":"Paramahansa Yogananda",
      "BookName":"Autobiography of a Yogi",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/yogi.jpg"
    },
    {
      "Author":"Yuval Noah Harari",
      "BookName":"21 Lessons for the 21st Century",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/21.jpg"
    },
    {
      "Author":"Sourav Ganguly",
      "BookName":"A Century is not Enough: My Roller-coaster Ride to Success ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/beerbiceps/bookscover/dada.jpg"
    },
  ],

  "Swapnil Aggarwal":[
    {
      "Author":"James Clear",
      "BookName":"Atomic Habits: The life-changing",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/atomic.jpg"
    },
    {
      "Author":"Carl Newport",
      "BookName":"Deep Work: Rules for Focused Success in a Distracted World",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/deepwork.jpg"
    },
    {
      "Author":"Carl Newport",
      "BookName":"So Good They Can't Ignore You ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/sogood.jpg"
    },
    {
      "Author":"Allie Brosh",
      "BookName":"Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/hyperbola.jpg"
    },
    {
      "Author":"Sccot McCloud",
      "BookName":"Understanding Comics: The Invisible Art",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/comics.jpg"
    },
    {
      "Author":"Don Norman",
      "BookName":"The Design of Everyday Things",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/design.jpg"
    },
    {
      "Author":"Mihaly Csikszentmihalyi",
      "BookName":"Flow: The Psychology of Optimal Experience (Harper Perennial Modern Classics)",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/swapnilaggarwal/bookscover/flow.jpg"
    },
  ],

  "Tanay Pratap":[
    {
      "Author":"Carl Newport",
      "BookName":"So Good They Can't Ignore You ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/sogood.jpg"
    },
    {
      "Author":"Eric Meyer",
      "BookName":"CSS: The Definitive Guide- Visual Presentation for the Web",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/css.jpg"
    },
    {
      "Author":"Kyle Simpson",
      "BookName":"You Don`t Know JS (This & Object Prototypes)",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/know.jpg"
    },
    {
      "Author":"Safi Bahcall",
      "BookName":"Loonshots",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/loon.jpg"
    },
    {
      "Author":"Carl Newport",
      "BookName":"Deep Work: Rules for Focused Success in a Distracted World",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/deepwork.jpg"
    },
    {
      "Author":"Adam Grant",
      "BookName":"Originals: How Non-Conformists Change the World",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/originals.jpg"
    },
    {
      "Author":"Camille Fournier",
      "BookName":"The Manager's Path: A Guide for Tech Leaders Navigating Growth and Change ",
      "BookcoverURL":"https://raw.githubusercontent.com/bajajshubham/files-hosted/master/goodreads-by-wiseman/creators/tanaypratap/bookscover/manager.jpg"
    },

  ],

}

const creatorsNames = Object.keys(creators_headers);

export default function App() {

  const [creator,setCreator] = useState("Kunal Shah");

  function creatorClickEventHandler(item)
{
  
  var divMB = document.querySelector(".main-books");
  divMB.style.visibility="hidden";
   
  var divLoader = document.querySelector("#loader");
  divLoader.style.visibility="visible";
  setCreator(item);

  console.log("creator-avatar clicked");
  
  setTimeout(function() {
    divLoader.style.visibility="hidden";
    divMB.style.visibility="visible"; 
   
  },3000);

}

function onAppLoad()
{
  var divLoader = "";
 
  console.log("inside onAppLoad()..");
  
  setTimeout(function(){
    divLoader = document.querySelector("#loader");
    divLoader.style.visibility="visible";
  },1000);  

  setTimeout(function(){
    var divApp = document.querySelector(".App");
    console.log(divApp,divLoader);  
    divLoader.style.visibility="hidden";
    divApp.style.visibility="visible"; 
  },3000);

}

  return (
    <div className="App"  style={{visibility:"hidden"}} onLoad={onAppLoad()} >
      
      <div id="loader"></div>

      <div className="header-intro">

<h1 style={{marginBottom:".5rem"}}>Goodread By Wise Mans</h1>
<span > Checkout books recommended by wise-mans. 
  Select a wise man to get started.</span>
 
</div>

<div className="main-creator">
    {/* // backgroundImage:`url(${creators_headers[item]})` */}
        {
          creatorsNames.map(
            
            (item) =>{
              
              return (
                
                <div className="creator-display"
                
                onClick={() => creatorClickEventHandler(item)}
                >
                <img className="creator-img"
                src={creators_headers[item]}
                alt="NA"
                loading="eager"
                />
                <h3>{item}</ h3>
                </ div>
               
                ); 
              })
              }

      </div>

      <div className="main-books">

<ul  className="main-books-lists">

  {
       creators[creator].map((item) => {
        return (
          <li className="main-book-lists-style"
            key={item}
          >

          <img id="main-book-lists-style-head-image"
          src={item["BookcoverURL"]} 
          alt="NA" 
          loading="eager"
          // loading="eager"
          >
          </img>
                                                                                
<div className="main-books-lists-bottom-div">

<img id="main-book-lists-style-creator-image"
    src={creators_headers[creator]}
    alt="NA"
    />
<h4 id="main-book-lists-style-book-details">{item["Author"]}</h4>
<h5 id="main-book-lists-style-book-details">{item["BookName"]}</h5>  

</div>

  </li>
        );
      })
  }

  </ul>
  
</div>
<hr style={{border:"10px solid #facf5a"}} />


    </div>
  );
}
