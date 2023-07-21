import "../Content/content.css";

import { AiOutlineCopy } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";

function Content() {
  return (
    <div className="app__content">
      <div className="content">
        <div className="content__">
          <div className="content__detail">
            <span> 1. I will choose a quota of 5000.</span>
            <span className="copy__">
            <TfiReload size="24"  />
              <AiOutlineCopy size="25" color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 2. i participate with 2000.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"   color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 3. quota for 9000.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 4. I am excited to do this 5000.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 5. I will make 2000 investment.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span>
              {" "}
              6. Already contacted my receptionist to book qouta of rs15000.
            </span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>

          <div className="content__detail">
            <span> 7. I do 9000 in this task.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 8. I will choose a quota of 5000.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 9. I will choose 2000 to complete this session.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 10. Kindly reserve me a quota for this task 9000.</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 11. Hello, I want to invest 2000 now</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 12. she give me this quota and i choose Rs5000</span>
            <span className="copy__">
            <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>

          <div className="content__detail">
            <span> 13. I have booked for a mission quota of 15000</span>
            <span className="copy__">
              {" "}
              <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span>
              {" "}
              14. still choosing the quota i want to participate with 2000
            </span>
            <span className="copy__">
              {" "}
              <TfiReload size="24" />
              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
          <div className="content__detail">
            <span> 15. I also upgraded my quota to 9000 receptionist.</span>
            <span className="copy__">
              <TfiReload size="24" />

              <AiOutlineCopy size="25"  color="#871787" />
            </span>
          </div>
        </div>
        <div className="generate__">
          <button className="button__generate">Generate</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
