import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa";
import Navbar from './Navbar';


const Faqs = () => {
  const [currentFaq, setCurrentFaq] = useState(0);
  const [faqQuestions, setFaqQuestions] = useState([
    {
      id: 0,
      name:
        <p className="faqDetail-q">What is an NFT<span>?</span></p>,
      details:
        <p className="faqDetail-a">NFTs are non<span>-</span>fungible tokens which are digital assets that links property to unique physical or digital items such as artwork<span>,</span> music or videos<span>.</span> These tokens can be used to represent ownership of unique items<span>,</span> as only one owner of an image can have one at a time<span>,</span> no one can change the ownership record or copy a new NFT<span>.</span></p>,
      isActive: false
    },
    {
      id: 1,
      name:
        <p className="faqDetail-q">Where can I buy Superior Robots<span>?</span></p>,
      details:
        <p className="faqDetail-a">You can mint the Superior Robots ONLY on our website and please be careful for all kind of scams<span>.</span> We also provide secondary market right after the public mint done<span>.</span></p>,
      isActive: false
    },
    {
      id: 2,
      name:
        <p className="faqDetail-q">How much is the supply<span>?</span></p>,
      details:
        <p className="faqDetail-a">5<span>,</span>555 is the total supply of Superior Robots to be minted<span>.</span> The first 1<span>,</span>000 will be for our pre<span>-</span>sale via whitelist and the rest will be for public mint<span>.</span></p>,
      isActive: false
    },
    {
      id: 3,
      name:
        <p className="faqDetail-q">Will there be a pre-sale<span>?</span></p>,
      details:
        <p className="faqDetail-a">Yes<span>,</span> we<span>'</span>ll conduct a pre-sale to reward early supporters with guaranteed access to mint up to 3 Superior Robots before the public sale<span>.</span> You must have a Superior Robots WL token to participate in pre<span>-</span>sale<span>.</span></p>,
      isActive: false
    },
    {
      id: 4,
      name:
        <p className="faqDetail-q">How do I get a Superior Robots WL token<span>?</span></p>,
      details:
        <p className="faqDetail-a">The first 500 Discord members will automatically become OG<span>.</span> The remaining 500  WL tokens can be earned via giveaways<span>,</span> participating in our invite contest<span>,</span> or by levelling up as an active community member<span>.</span></p>,
      isActive: false
    },
    {
      id: 5,
      name:
        <p className="faqDetail-q">When is the mint date<span>?</span></p>,
      details:
        <p className="faqDetail-a">TBD<span>.</span></p>,
      isActive: false
    },
    {
      id: 6,
      name:
        <p className="faqDetail-q">What is the price of the Superior Robots<span>?</span></p>,
      details:
        <p className="faqDetail-a">TBD<span>.</span></p>,
      isActive: false
    },
    {
      id: 7,
      name:
        <p className="faqDetail-q">Who is the team behind Superior Robots<span>?</span></p>,
      details:
        <p className="faqDetail-a">The Superior Robots consists of talented artists and devs who all want to build a great community in the Metaverse<span>.</span> Our team is passionate about engineering<span>,</span> game development and design<span>.</span></p>,
      isActive: false
    }
  ]);

  const [accordionVisiblily, setAccordionVisiblily] = useState(false);
  const [activeList, setActiveList] = useState([])
  const toggleAccordionVisibility = (e, id) => {
    const clicked = faqQuestions.filter((faq) => faq.id === id)[0]
    if (!activeList.includes(clicked.id)) {
      setActiveList(
        [...activeList, clicked.id]
      )
    } else {
      setActiveList(
        (active) => active.filter((activeID) => activeID !== clicked.id)
      )
    }
    clicked.isActive = !clicked.isActive

  };
  console.log(faqQuestions)
  const faqTab = faqQuestions.map((faq) => {
    const detailsDisplay = faq.isActive ? "block" : "hidden";

    return (

      <div className="w-full mx-auto container justify-center items-center p-8 faq-bg">
        <div className="items-center justify-center mx-auto">
          <div className="faq mt-2" key={faqQuestions.id} >
            <h2>
              <button type="button" class="flex items-center justify-between  w-full text-fontw text-left text-white" onClick={(e) => toggleAccordionVisibility(e, faq.id)}>
                <span>{faq.name}</span>
                <i className="text-white" >{activeList.includes(faq.id) ? <FiX size={"40px"} /> : <FiPlus size={"40px"} />}</i>
              </button>
            </h2>
            <div>
              <div className={"py-5 overflow-hidden bg-all Accordion-content " + detailsDisplay}>
                <p className="mb-2 text-white faqDetail">{faq.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const filterAccordion = (faqId) => {
    let updatedFaqs = faqQuestions.map(faq => {
      console.log(faq.isActive)
      if (faq.id === faqId) {
        (faq.isActive) ? faq.isActive = false : faq.isActive = true
      }
      return faq;
    });
    setCurrentFaq(updatedFaqs);
  };

  return (
    <div>
      <Navbar />
      <div className="" name="faq" id="faq">
        <h1 className="text-6xl md:text-6xl text-fonto text-center py-5 mt-20">
          FAQ
        </h1>
        <div className="py-10">{faqTab}</div>

        <div className="py-10 mt-20 mx-auto text-center">
          <h1 className="text-center text-fonto md:text-5xl pb-5 ml-2">FOLLOW US!</h1>
          <div className="flex text-center justify-center text-center text-white items-center mx-auto">
            <a className="pr-5 hover:text-cyan-400" href="https://twitter.com/home" target="_blank">
              <FaTwitter size={"32px"} />
            </a>
            <a className="hover:text-orange-400" href="https://www.instagram.com/" target="_blank">
              <FaInstagram size={"32px"} />
            </a>
            <a className="pl-5 hover:text-sky-600" href="">
              <FaDiscord size={"32px"} />
            </a>
          </div>
          <div className="text-white pt-2 flex justify-center items-center allrights-faq mt-3"><span><FaCopyright size={"20px"} /></span>&nbsp;2022<span>,&nbsp;</span>Superior Robots</div>
          <div className="text-white pt-2 flex justify-center items-center allrights-faq">All rights reserved<span>.</span></div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
