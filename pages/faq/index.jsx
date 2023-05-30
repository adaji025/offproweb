import React from "react";
import { CiSearch } from "react-icons/ci";
import Question from "@/components/Home/Question";

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
    <>
      <div className="bg-[#F3FAF7] relative">
        <div
          className="min-h-[263px] sm:min-h-[363px] xl:min-h-[463px] max-w-[1220px] mx-auto mt-[102px] flex justify-center items-center"
          data-aos="zoom-in"
        >
          <div className="px-4 lg:px-0 ">
            <p className="text-green text-2xl lg:text-[36px] font-bold text-center mb-7 lg:mb-10">
              Frequently asked question
            </p>
            <div class="flex items-center gap-3 bg-white-100 square-full border border-gray px-4 py-2 max-w-md mx-auto mb-7 lg:mb-20">
              <CiSearch />
              <input
                type="text"
                placeholder="Search anything OffPro"
                class="flex-1 bg-transparent outline-none text-gray-800"
              />
            </div>
          </div>
        </div>
        <img src="/svgs/tee.svg" alt="" className="absolute bottom-0" />
      </div>

      <div className="max-w-[1220px] mx-auto flex gap-2 lg:gap-8 translate-y-[36px] text-[#6B7280] overflow-auto">
        {cat.map((item, idx) => (
          <span className="flex items-center hover:bg-green rounded-3xl px-4 py-2 hover:text-white  text-sm whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
      <main className="max-w-[1220px] mx-auto" data-aos="fade-up">
        <div className="px-10 mx-auto pb-20 md:py-20 mt-16 lg:mt-2">
          <section className="">
            {questions.map((question) => {
              return <Question key={question.id} {...question}></Question>;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default Faq;
