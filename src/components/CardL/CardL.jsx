import React from "react";
import i2 from "../../assets/images/demo/ci_group.png";
import i3 from "../../assets/images/demo/ant-design_star-outlined.png";
import "./CardL.scss";

const CardL = () => {
  return (
    <div className="easy">
      {/* <div className="learn"> 
        <p className="learnanewskill">Learn A New Skill In Two Hours</p>
       </div> */}
      <h3>Learn a new skill in two hours</h3>
      <div className="listCard">
        <div className="card">
          <img
            className="frame"
            alt="Frame"
            src="https://s3-alpha-sig.figma.com/img/d873/7079/d518ba76a380e2fe7f0ba74fed6eb0b2?Expires=1697414400&Signature=JCITCPpArdF-DwfMHW6S-1XzLYQsqavtgNhuM6LmLXp2VZI5vLki0xgt9~6xJf8wRfVjhSpzFfZUbr3ufKYX7fCBIlcpXx5fR85BE4e0oK1ErF9LQn~~osIu20If165DGvA9INCrypW3DWQSRwTD4EDmU0zk6R2xZr27Il0a6vkzsvxKfRtZpD7dzvjs~TpoHygn6h7QE7qYvjUjPte6KxqsHYSdoXBzr0CXAT-FR~6cgzmLs9pRXBiFBEd0MqXor0VljIVRpaR2uRSD4JYJZQ5nGcPK3tt-wwjjx5i3Xg2TQunzt7~2zxOj29c6vMa6qWmXBcsU5Snd9PR1Ipf9oA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              All You Need In Business Strategy
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="frame"
            alt="Frame"
            src="https://s3-alpha-sig.figma.com/img/4496/3e4c/e2f754391bee9ed9294337aebc833c65?Expires=1697414400&Signature=Ctb~Um45CR1C7KSUyt~0MK0wOaesWzFuWZcZMaS7Tr8aYOJ3f~ij7bG~rSTYeB4iCjrMbZtMTuN813STM24joCUE3XCqHrNC3gLEDl~lnIV18bodmCxxMu4z1erEX~AZfP1STrFk-WlJdLFCN8vtJpQ0lhEgBGyA87LBe~XHFDFIm0fzyOBaGgQikokRtUzW9o3kMeN6Nqgmf4MZ9B91Cqkr72NhEaNm2LPgVHjGAoD3lmzgDWAgTJTYH5H76yeWdt6UaGlIE6zi~4UgGx9KeGKghUgolpRejUFVQimhttSdop-QgWitKMBjaNZElJQxSU8PJS3L-hXiCIu0v4Vo5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              The Amazing Hack In Figma Prototyping
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            className="frame"
            alt="Frame"
            src="https://s3-alpha-sig.figma.com/img/b5d8/eb58/3106a89172809d02085ab33ff8a05b9c?Expires=1697414400&Signature=YYSd2w5cc1uSWW0ZIPA25RBX~zenfceOT2wLKi0UzvqD8bw9JGvcWQggsa6ty0GwY0mEHqaMzWqpNKuor0dqOoxAFzKGnOCIPIUDkjTtGs3fgsCP19OWolOt9SNNVAjJLTE0kcpzsXLKDI1rb0L0RTyiSEPbpr6oQB58XD96RR~qIfreeDa3KS5fIR4BmxW~tcCmR12eKio~GiabRZZ601655hwLX5VdqBRZ4Dr5nF6Me4hI4y1WcKyvnmBHTq1eqtQNbCYXCv0JOn3kkkk9AOJJ9Dk1CQDHeIeVQQ1hs56qH-TruWGuvy1kmpOO0xLaMmystWAwECGZEGNPiSLX~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          />
          <div className="text-wrapper">30.5$</div>
          <div className="div">
            <div className="text-wrapper-2">6 weeks</div>
            <div className="frame-2">
              <img className="ci-group" alt="Ci group" src={i2} />
              <div className="text-wrapper-2">1.5k Students</div>
            </div>
          </div>
          <div className="group">
            <p className="learn-marketing-from">
              Introduction To Basic Game Developement
            </p>
            <div className="frame-3">
              <img className="ant-design-star" alt="Ant design star" src={i3} />
              <div className="text-wrapper-3">4.5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardL;
