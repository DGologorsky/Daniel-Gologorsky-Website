
import { education, affiliations } from "../const/data";
import { IoBookSharp } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import parse from 'html-react-parser';

const educationLogos = [
  {
    src: "/assets/img/asrs.png",
    alt: "American Society of Retina Specialists",
  },
  {
    src: "/assets/img/academy.png",
    alt: "American Academy of Ophthalmology",
  },
  {
    src: "/assets/img/cornell.jpg",
    alt: "Cornell University",
  },
  {
    src: "/assets/img/bascom.png",
    alt: "Bascom Palmer Eye Institute",
  },
  {
    src: "/assets/img/dart.png",
    alt: "Dartmouth College",
  },
];

export default function Education() {
    return (
      <div>
        {/* <header>
	        <h2 className="h2 article-title">Education</h2>
        </header> */}
        <h3 className="colorlib-heading mb-3">Education</h3>
        <section className="timeline">

            <div className="title-wrapper">
            <div className="icon-box">
                <IoBookSharp />
            </div>

            <h3 className="colorlib-heading">Education & Training</h3>
            </div>

            <ol className="timeline-list">
                { education.map((item,index) => <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{item.college}</h4>
                    <p className="timeline-text"> {parse(item.study)} </p></li>)
                }
            </ol>

        </section>

        <section className="timeline">

            <div className="title-wrapper">
            <div className="icon-box">
                <GiTrophyCup />

            </div>

            <h3 className="colorlib-heading">Professional Affiliations</h3>
            </div>

            <ol className="timeline-list">
                { affiliations.map((item,index) => <li className="timeline-item" key={index}>
                    <h4 className="h4 timeline-item-title">{item.name}</h4>
                    {item.desc && <p className="timeline-text"> {item.desc} </p>}
                    </li>)
                }
            </ol>

        </section>

        <section className="affiliations-marquee" aria-label="Educational affiliations">
          <div className="affiliations-marquee__track">
            {[...educationLogos, ...educationLogos].map((logo, index) => (
              <div className="affiliations-marquee__logo" key={`${logo.alt}-${index}`}>
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </div>

  )
}
