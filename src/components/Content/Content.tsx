import "../Content/content.css";
import { AiOutlineCopy } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { useEffect, useState } from "react";
import editor5 from "../../data/editor5.json";

function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates (Knuth) Shuffle Algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Content() {
  const [current, setCurrent] = useState<number[]>([]);
  const [shuffledEditor, setShuffledEditor] = useState(editor5);

  const toggleSelection = (index: number) => {
    if (current.includes(index)) {
      setCurrent((prev) => prev.filter((item) => item !== index));
    } else {
      setCurrent((prev) => [...prev, index]);
    }
  };

  const handleGenerate = () => {
    // Shuffle the editor5 array
    const shuffledArray = shuffleArray([...editor5]);
    setShuffledEditor(shuffledArray);
  };

  const copyText = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      // Success message or other actions if needed
    } catch (err) {
      console.error("Failed to copy text: ", err);
      // Handle error or provide alternative method for copying
    }
  };

  useEffect(() => {}, [current]);

  return (
    <div className="app__content">
      <div className="content">
        <div className="content__">
          {shuffledEditor.map((item, index) => (
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
                <div>
                  <AiOutlineCopy
                    size="25"
                    color="#871787"
                    onClick={(e:MouseEvent) => {
                      toggleSelection(index);
                      e.stopPropagation();
                      copyText(item.script);
                    }}
                  />
                </div>
              </span>
            </div>
          ))}
        </div>
        <div className="generate__">
          <button className="button__generate" onClick={() => handleGenerate()}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
