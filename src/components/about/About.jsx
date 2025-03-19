// import CV from "/Web-CV.pdf";
// import myImage from "/profile-img-square.jpg";
import { data } from "../../data/data.jsx";

const cards = data.about.cards;
const CV = data.about.CV;
const myImage = data.about.aboutImage;

export const About = () => {
  return (
    <section
      id="about"
      className="section container w-full flex-col-center my-18 max-w-5xl mx-auto py-4"
    >
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16 justify-center items-center">
        {/* image container */}
        <div className="flex-col-center  lg:items-end ">
          <img
            className="h-[20rem] rounded-2xl shadow-2xl"
            src={myImage}
            alt="mubarak-azad"
          />
        </div>

        {/* about contents */}
        <div className="flex-col-center lg:justify-start lg:items-start gap-y-4">
          {/* cards */}
          <div className="flex-row-center gap-3 md:gap-4 ">
            {cards.map((item) => (
              <div
                key={item.id}
                className="flex-col-center gap-1 rounded-lg shadow-xl p-2 md:p-3 px-5 md:px-5 w-24 md:w-32 h-28 text-center bg-white mt-10 lg:mt-2"
              >
                <box-icon name={item.icon}></box-icon>
                <h3 className="text-sm">{item.title}</h3>
                <p className="text-xs">{item.text}</p>
              </div>
            ))}
          </div>

          {/* text */}
          <p className="text-md w-full px-4 lg:px-0  text-center md:text-left mt-4 lg:mt-3">
            {data.about.bio}
          </p>

          {/* download cv button */}
          <a href={CV} download="" className="button flex gap-2 mt-4 lg:mt-3">
            <span>Download CV</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              id="folder"
            >
              <path
                fill="#fff"
                d="M19.2351648,10.6772248 C19.6575716,10.6772248 20,10.334646 20,9.91205367 L20,8.89182545 C20,4.84609283 18.1978022,2.87599695 14.5054945,2.87599695 L11.7802198,2.87599695 C11.3365661,2.87810205 10.9172736,2.67324132 10.6461538,2.32190748 L9.76703297,1.15216305 C9.19910638,0.423105508 8.32609921,-0.0022260158 7.4021978,0 L5.48571429,0 C1.84615385,0 0,2.10203071 0,6.25330418 L0,13.7554997 C0,17.6077407 2.39120879,20 6.25054945,20 L13.7406593,20 C17.5912088,20 19.9912088,17.6077407 19.9912088,13.7554997 C19.9491205,13.3621883 19.6173632,13.0639212 19.221978,13.0639212 C18.8265928,13.0639212 18.4948355,13.3621883 18.4527473,13.7554997 C18.4527473,16.7897991 16.7824176,18.4696577 13.7406593,18.4696577 L6.24175824,18.4696577 C3.2,18.4696577 1.52967033,16.7985942 1.52967033,13.7554997 L1.52967033,13.0255088 L13.8373626,13.0255088 C14.2597694,13.0255088 14.6021978,12.68293 14.6021978,12.2603376 C14.6021978,11.8377452 14.2597694,11.4951664 13.8373626,11.4951664 L1.52967033,11.4951664 L1.52967033,6.21812389 C1.52967033,2.91117723 2.70769231,1.49517082 5.47692308,1.49517082 L7.41098901,1.49517082 C7.854606,1.50172958 8.27146542,1.70863441 8.54505495,2.05805535 L9.42417582,3.21900471 C9.98216939,3.95874311 10.8538928,4.39479629 11.7802198,4.39754422 L14.4967033,4.39754422 C17.3538462,4.39754422 18.4615385,5.6728295 18.4615385,8.89182545 L18.4615385,9.91205367 C18.461525,10.1165228 18.5433112,10.3124919 18.6886527,10.4562448 C18.8339941,10.5999978 19.030799,10.6795751 19.2351648,10.6772248 Z"
                transform="translate(2 2)"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
