import React from "react";

import SingleQuestion from "./Question";

const data = [
  {
    id: 1,
    title: "Can I use FlowBite in open-source projects?",
    info: (
      <>
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Where can I access my download files?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Can I use FlowBite for commercial purposes?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "What about browser support?",
    info: (
      <>
        {" "}
        <p>
          Generally, it is accepted to use FlowBite in open-source projects, as
          long as it is not a UI library, a theme, a template, a page-builder
          that would be considered as an alternative to FlowBite itself.
        </p>
        <p className="pt-2">
          With that being said, feel free to use this design kit for your
          open-source projects.
        </p>
      </>
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
    <div className="max-w-[1220px] mx-auto -translate-y-6  lg:-translate-y-20 px-4 lg:px-0 mt-10"
    data-aos="fade-up">
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
