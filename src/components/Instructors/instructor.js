import React from "react";
import "./instructor.css";
import avatar1 from "../../assets/images/demo/unsplash_3JmfENcL24M.png";
import avatar2 from "../../assets/images/demo/unsplash_5n3JP9WAJTs.png";
import avatar3 from "../../assets/images/demo/unsplash_sx1x4lXBrqc.png";
export default function Instructor() {
  return (
    <>
      <div className="container" id="instructor">
        <div className="instructor">
          <h3>Meet our instructors</h3>

          <div className="row">
            <div className="col-md-4">
              <div className="ins-info">
                <div className="ins-image">
                  <img src={avatar1} alt="" />
                </div>
                <div className="ins-content">
                  <img src={avatar1} alt="" />
                  <div className="ins-name">John Mark</div>
                  <div className="ins-role">Senior Developer</div>
                  <div className="ins-des">
                    “Education will be for you what you want it to be”{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ins-info">
                <div className="ins-image">
                  <img
                    src={avatar2}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="ins-content">
                  <img src={avatar2} alt="" />
                  <div className="ins-name">Lora Shrof</div>
                  <div className="ins-role">Marketing Lead</div>
                  <div className="ins-des">
                    “Knowledge has to be improved, challenged, and increased
                    constantly, or it vanishes”{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ins-info">
                <div className="ins-image">
                  <img
                    src={avatar3}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="ins-content">
                  <img src={avatar3} alt="" />
                  <div className="ins-name">Zeng Chin</div>
                  <div className="ins-role">Data analist at Meta</div>
                  <div className="ins-des">
                    “To know that we know what we know, and to know that we do
                    not know what we do not know, that is true knowledge”{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
