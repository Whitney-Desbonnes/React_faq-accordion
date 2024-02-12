import { useState } from 'react';
import '../assets/css/faq.css';
import iconStar from '../assets/images/icon-star.svg';

const data = [
    {
        question:"What is Frontend Mentor, and how will it help me?",
        reponse:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
    },
    {
        question:"Is Frontend Mentor free?",
        reponse:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
    },
    {
        question:"Can I use Frontend Mentor projects in my portfolio?",
        reponse:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
    },
    {
        question:"How can I get help if I'm stuck on a Frontend Mentor challenge?",
        reponse:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    },
];

export default function FAQ() {
    // states, état, données
    const [selected, setSelected] = useState(null);

    // comportements
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    // affichage / render
    return (
        <>
           <div className='faq'>
                <h1>
                    <span>
                        <img src={iconStar} alt="" />
                    </span>
                    FAQs
                </h1>

                <div className="items">
                    {data.map((item, i) => (
                        <div className="item" key={i}>
                            <div className="item_question" onClick={() => toggle(i)}>
                                <span>{item.question}</span> 
                                <span className={selected == i ? 'dark_pink' : 'pink'}>{selected == i ? '-' : '+'}</span>
                            </div>
                            <div className={selected == i ? 'item_dropdown show' : 'item_dropdown'}>
                                {item.reponse}
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </>
    )
}