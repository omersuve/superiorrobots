import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa";

const Faqs = () => {
  const [currentFaq, setCurrentFaq] = useState(0);
  const [faqQuestions, setFaqQuestions] = useState([
    {
      id: 0,
      name: "What is an NFT?",
      details:
        "NFTs are non-fungible tokens which are digital assets that links property to unique physical or digital items such as artwork, music or videos. These tokens can be used to represent ownership of unique items, as only one owner of an image can have one at a time, no one can change the ownership record or copy a new NFT.",
      isActive: false
    },
    {
      id: 1,
      name: "Where can I buy Superior Robots?",
      details:
        "You can mint the Superior Robots ONLY on our website and please be careful for all kind of scams. We also provide secondary market right after the public mint done.",
      isActive: false
    },
    {
      id: 2,
      name: "How much is the supply?",
      details:
        "3,333 is the total supply of Superior Robots to be minted. The first 1,000 will be for our pre-sale via whitelist and the rest will be for public mint.",
      isActive: false
    },
    {
      id: 3,
      name: "Will there be a pre-sale?",
      details:
        "Yes, we'll conduct a pre-sale to reward early supporters with guaranteed access to mint up to 3 Superior Robots before the public sale. You must have a Superior Robots WL token to participate in pre-sale.",
      isActive: false
    },
    {
      id: 4,
      name: "How do I get a Superior Robots WL token?",
      details:
        "The first 500 Discord members will automatically become OG. The remaining 500  WL tokens can be earned via giveaways, participating in our invite contest, or by levelling up as an active community member.",
      isActive: false
    },
    {
      id: 5,
      name: "When is the mint date?",
      details:
        "TBD",
      isActive: false
    },
    {
      id: 6,
      name: "What is the price of the Superior Robots?",
      details:
        "TBD",
      isActive: false
    },
    {
      id: 7,
      name: "Who is the team behind Superior Robots?",
      details:
        "The Superior Robots consists of talented artists and devs who all want to build a great community in the Metaverse. Our team is passionate about engineering, game development, design and product marketing.",
      isActive: false
    }
  ]);

  const [accordionVisiblily, setAccordionVisiblily] = useState(false);
  const changeIcon = accordionVisiblily ? <FiX size={"40px"} /> : <FiPlus size={"40px"} />;
  const toggleAccordionVisibility = () => {
    setAccordionVisiblily(prevVisibility => !prevVisibility);
  };
  const faqTab = faqQuestions.map((faq) => {
    const detailsDisplay = faq.isActive ? "block" : "hidden";

    return (<div className="w-full mx-auto container justify-center items-center p-8">
      <div className="items-center justify-center mx-auto">
        <div className="faq mt-2" key={faqQuestions.id} onClick={() => filterAccordion(faq.id)}>
          <h2>
            <button type="button" class="flex items-center justify-between  w-full text-fontw text-left text-white">
              <span>{faq.name}</span>
              <i className="text-white" onClick={() => toggleAccordionVisibility(faq.id)}>{changeIcon}</i>
            </button>
          </h2>
          <div>
            <div className={"py-5 overflow-hidden bg-all Accordion-content " + detailsDisplay}>
              <p className="mb-2 text-white faqDetail">{faq.details}</p>
            </div>
          </div>

        </div>
      </div>
    </div>);
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
    <div className="bg-all bg-sett" name="faq" id="faq">
      <h1 className="text-6xl md:text-8xl text-fonto text-center py-5">
        FAQ
      </h1>
      <div className="py-10">{faqTab}</div>

      <div className="py-10 mt-20 mx-auto text-center">
        <h1 className="text-center text-fonto text-2xl md:text-4xl pb-5">FOLLOW US!</h1>
        <div className="flex text-center justify-center text-center text-white items-center mx-auto">
          <a className="pr-5 hover:text-cyan-400" href="">
            <FaTwitter size={"32px"} />
          </a>
          <a className="hover:text-orange-400" href="">
            <FaInstagram size={"32px"} />
          </a>
          <a className="pl-5 hover:text-sky-600" href="">
            <FaDiscord size={"32px"} />
          </a>
        </div>
        <div className="text-white pt-5 flex justify-center items-center gap-2">Copyright <span><FaCopyright size={"16px"} /></span> 2022, Superior Robots NFT Collection</div>
        <div className="text-white pt-5 flex justify-center items-center gap-2">All rights reserved.</div>
      </div>
    </div>
  );
};

export default Faqs;
