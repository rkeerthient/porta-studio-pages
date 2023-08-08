import { Disclosure } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import RTF from "./RTF";

export interface AccProps {
  title?: string;
  faqs?: FAQ[];
}

// export const initialProps: AccProps = {
//   title: "Button Title",
//   faqs: [],
// };
export interface FAQ {
  question: string;
  answer: string;
}
const FAQsAccordion = ({ title, faqs }: AccProps) => {
  return (
    <>
      {faqs && <div className="text-xl font-bold text-center">{title}</div>}
      {faqs &&
        faqs.map((item, index) => (
          <div className="mx-auto w-full rounded-2xl  p-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between  border border-black bg-white px-8 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75 shadow-md">
                    <span className="text-2xl font-light">{item.question}</span>
                    <PlusIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5  `}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className=" px-8 pt-4 pb-2  flex flex-col text-lg font-normal">
                    <RTF>{item.answer}</RTF>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
    </>
  );
};

export default FAQsAccordion;
