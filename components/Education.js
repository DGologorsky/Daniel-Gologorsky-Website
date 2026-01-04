
import { education, affiliations } from "../const/data";
import { IoBookSharp } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";
import parse from 'html-react-parser';

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
      </div>
    
  )
}
