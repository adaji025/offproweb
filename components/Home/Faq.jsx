import React from "react";

import SingleQuestion from "./Question";

const data = [
  {
    id: 1,
    title: "What is Tappr?",
    info: (
      <p>
        Tappr is a revolutionary cashless payment solution that allows you to
        make transactions using a Tappr device or smartphone, providing a
        convenient and secure way to pay for purchases or transfer funds.
      </p>
    ),
  },
  {
    id: 2,
    title: "How does Tappr work?",
    info: (
      <p>
        Tappr utilizes NFC technology and a secure blockchain infrastructure.
        Simply tap your Tappr device or smartphone, confirm the transaction
        details, and complete the payment or fund transfer.
      </p>
    ),
  },
  {
    id: 3,
    title: "Is Tappr safe to use?",
    info: (
      <p>
        Yes, Tappr prioritizes the security of your transactions. It
        incorporates robust encryption protocols, multi-factor authentication,
        and blockchain technology to ensure the safety of your financial data.
      </p>
    ),
  },
  {
    id: 4,
    title: "Where can I use Tappr?",
    info: (
      <p>
        Tappr can be used at a wide range of merchants, including retail stores,
        restaurants, online platforms, and more. Look for the Tappr logo or NFC
        payment acceptance signs to identify participating locations.
      </p>
    ),
  },
  {
    id: 5,
    title: "Can I track my transactions with Tappr?",
    info: (
      <p>
        Absolutely! Tappr provides transaction history and receipts within the
        Tappr app, allowing you to easily track and manage your payments.
      </p>
    ),
  },
  {
    id: 6,
    title: "How do I get a Tappr device?",
    info: (
      <p>
        Tappr devices are available for purchase through our official website
        and authorized retailers. You can also use the Tappr app on your
        smartphone if it supports NFC technology.
      </p>
    ),
  },
  {
    id: 7,
    title: "What if my Tappr device or smartphone gets lost or stolen?",
    info: (
      <p>
        Don't worry! Tappr offers advanced security features, including remote
        device deactivation. You can immediately disable your Tappr account and
        contact our support team for assistance.
      </p>
    ),
  },
  {
    id: 8,
    title: "Can I link multiple bank accounts or payment cards to Tappr?",
    info: (
      <p>
        Yes, Tappr supports the linking of multiple bank accounts or payment
        cards, providing you with flexibility and convenience in managing your
        finances.
      </p>
    ),
  },
  {
    id: 9,
    title: "Is Tappr compatible with other payment methods?",
    info: (
      <p>
        Tappr is designed to be compatible with various payment methods,
        including NFC, QR codes, and mobile wallets, ensuring compatibility with
        a wide range of payment options.
      </p>
    ),
  },
  {
    id: 10,
    title: " How do I get customer support for Tappr?",
    info: (
      <p>
        For any inquiries or assistance, you can reach out to our dedicated
        customer support team through our website or the Tappr app. We are here
        to help you with any questions or concerns you may have.
      </p>
    ),
  },
];

const cat = [
  "All",
  "Dump",
  "Load",
  "Connect",
  "Security",
  "Policy",
  "Terms & Condition",
];

function Faq() {
  const [questions] = React.useState(data);
  return (
    <div
      className="max-w-[1220px] mx-auto -translate-y-6  lg:-translate-y-20 px-4 lg:px-8 mt-10"
      data-aos="fade-up"
    >
      <p className="text-green text-2xl lg:text-[36px] font-bold text-center">
        Frequently asked question
      </p>
      <div className="flex gap-2 lg:gap-8 translate-y-[36px] text-[#6B7280] overflow-auto">
        {cat.map((item, idx) => (
          <span className="flex items-center hover:bg-green rounded-3xl px-4 py-2 hover:text-white  text-sm whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
      <main>
        <div className="px-3 mx-auto pb-20 md:py-20 mt-16 lg:mt-2">
          <section className="">
            {questions.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Faq;
