import "../Content/content.css";
import { AiOutlineCopy } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { useEffect, useState } from "react";
import editor5 from "../../data/editor5.json";

function Content() {
  const [current, setCurrent] = useState<number[]>([]);

  const toggleSelection = (index: number) => {
    if (current.includes(index)) {
      setCurrent((prev) => prev.filter((item) => item !== index));
    } else {
      setCurrent((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
  }, [current]);

  return (
    <div className="app__content">
      <div className="content">
        <div className="content__">
          {editor5.map((item, index) => (
            <div
              className={`content__detail ${
                current.includes(index) ? "__background" : ""
              }`}
              key={index}
            >
              <span className="">
                {index + 1}) {item.script}
              </span>
              <span className="copy__">
                <div>
                  <TfiReload size="24" />
                </div>
                <div onClick={() => toggleSelection(index)}>
                  {" "}
                  <AiOutlineCopy size="25" color="#871787" />
                </div>
              </span>
            </div>
          ))}
        </div>
        <div className="generate__">
          <button className="button__generate">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
