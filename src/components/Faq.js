import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { FaDiscord, FaTwitter, FaInstagram, FaCopyright } from "react-icons/fa";

const Faqs = () => {
  const [currentFaq, setCurrentFaq] = useState(0);
  const [faqQuestions, setFaqQuestions] = useState([
    {
      id: 0,
      name: "When will be the public mint release?",
      details:
        "7th April at 5PM UTC for the whitelist. 8th April at 5PM UTC for the public.",
      isActive: false
    },
    {
      id: 1,
      name: "How much a Cowbots cost at mint price and what will be the benefit to be Whitelist?",
      details:
        "Mint price is set to 1 SOL and Whitelist members will have a x3 guarantee NFT to mint.",
      isActive: false
    },
    {
      id: 2,
      name: "How can i buy Cowbots if I wasn’t able to mint one?",
      details:
        "You will have access to buy on the secondary market : MagicEden and potentially other marketplace.",
      isActive: false
    },
    {
      id: 3,
      name: "What extra utilities have the Legendaries NeoCowbots?",
      details:
        "The Legendaries NeoCowbots will allow you to stack 30 $COWBOY during the first 30 days.",
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
