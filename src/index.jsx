import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { Stack, Button } from 'react-bootstrap';
import logo from "./img/logo.png";
import post1 from "./img/post1.jpg";
import post2 from "./img/post2.jpg";
import post3 from "./img/post3.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {HandThumbsUp, ChatLeftText, Share } from "react-bootstrap-icons";



function Hi() {
  return <div><b>  Hello Hamza  </b> Kiya

    <ul className="list">
      <li>
        1 blal faisal

      </li>
      <li>
        2 blal faisal

      </li>
      <li>
        3 blal faisal {10 * 5}

      </li>

    </ul>

    haal hai!</div>;
}

function Post(props) {
  return (
    <div className="post">
      <div className="postHead">
        <img src={props.logo} width={65} height={65} alt="Reload Page" />
        <div>
          <h1> {props.name} </h1>
          <div className="date"> {props.date}</div>
        </div>
      </div>

      <p> {props.text}</p>
      {/* <img post="post" src={props.img} alt="" />= */}

      <img src={props.post} className="postImg" width={65} height={65} alt="Reload Page" />

      <div className="postFooter">
        <div className="button">
          <HandThumbsUp />
          Like
        </div>
        <div className="button">
          <ChatLeftText /> Comment
        </div>
        <div className="button">
          <Share /> Share
        </div>
      </div>
    </div>
  );
}



ReactDOM.render(
  <div>
    <Post
      logo={logo}
      name="Sirat Ul Jinan Al-Quran With Tafseer"
      date="3-Jan-2013 4:30 pm"
      // img="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/353004991_634970768655599_1562410547950250051_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iP5CdkXBKeQAX9MAERQ&_nc_ht=scontent.fkhi22-1.fna&oh=00_AfCABLXGN6tiaYzYUK_yrCcQnWdrn0KxbFjCjy0ZTlGWSw&oe=64EDD6B0"

      post={post1}

      text="The last of all revelations and the final word of Allah Quran Majeed is the ultimate guide for everyone. The Holy Quran is Allah’s guidance for all of humanity. All the holy books that were revealed before Quran Sharif have been altered but the Quran is still in its pure form which is a miracle itself. Being a Muslim, Quran recitation (tilawat) is our duty and we should strive to understand the holy verses as much as we can. To make understanding the Quran easier the I.T. department of Dawat-e-Islami has introduced a Quran app named ‘Sirat Ul Jinan Al-Quran with Tafseer’ for android users. This amazing app can enlighten your heart with its Quran translation (Quran Tarjuma) and Interpretation (Quran Tafsir). It is a brilliant Islamic android app with an eye-catching user interface."
    />
    <Post
      logo={logo}
      name="Prayer Times"
      date="20-Jan-2013 5:00 pm"
      // img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"

      post={post2}

      text="Namaz is the second pillar of Islam and the most significant act of worship which has to be performed by every sensible male and female Muslim five times a day. Keeping in mind the importance of this supreme act of worship and to make Muslim Ummah aware of the timings of each Prayer the Tauqeet and I.T. department of Dawat-e-Islami put in all their efforts to launch the Prayer Times mobile application. This amazing Salah time app will help you to perform Namaz on time. The Namaz app is based on the research of Ala Hazrat Imam Ahmad Raza Khan رَحْمَۃُ اللہِ تَعَالٰی عَلَیْہ on Azan time and Qibla direction. Moreover, the app has been designed beautifully with an eye-catching UI. So, download it right away."
    />
    <Post
      logo={logo}
      name="Dar-Ul-Ifta Ahlesunnat App"
      date="20-Jan-2013 5:00 pm"
      // img="https://i.brecorder.com/primary/2021/06/60d4868b13ca7.jpg"
      post={post3}
      text="Dawat-e-Islami is a non-profit Islamic organization with a mission to propagate Islamic teachings across the world. It’s centered in Karachi but has a worldwide presence. The org has many departments and among the most important is Darulifta DawateIslami, which deals with sharia laws. The IT Department of Dawat-e-Islami has launched a very informative fatwa app named ‘Darul Ifta Ahlesunnat’. This app provides fatawa on various sharia issues, namaz ke masail, roze ke masail, qurbani ke masail, deeni masail, sharai masail, and other Islamic problems. This online fatwa Ahle Sunnat app can guide you whenever you're stuck and need a learned Islamic scholar to help you out. The app has an attractive UI and it's easy to use. So, with the Darul Ifta Ahle Sunnat application resolve your life problems easily."
    />
  </div>,
  document.querySelector("#root")
);