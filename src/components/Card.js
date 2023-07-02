import {
  FaPhoneFlip,
  FaPaperPlane,
  FaRegEnvelope,
  FaMapPin,
  FaBriefcase,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";
import { useQRCode } from "next-qrcode";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Card() {
  const { Canvas } = useQRCode();
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(id);
    const fetchUser = async function fetchUser() {
      setTimeout(() => {
        setUserData({
          firstName: "Nedhir",
          lastName: "Boudeli",
          email: "nedhirboudeli@gmail.com",
          title: "Software engineer",
          phone: "+216 00 000 000",
          mobile: "+216 52098686",
          company: "Google",
          companyAddress: "street somewhere, city, Country",
          linkedin: "https://linkedin/nedhir",
        });
      }, 800);
    };
    fetchUser();
  }, []);

  return (
    <div>
      {userData && (
        <div className="w-full ">
          <div
            className=" md:pt-16 flex justify-center"
            style={{
              background:
                "linear-gradient(45deg, rgb(133, 133, 132) 0%, rgb(133, 133, 132) 1%, rgb(31, 37, 102) 100%)",
            }}
          >
            <div
              className="md:max-w-lg w-full text-gray-100"
              style={{ boxShadow: "0 -5px 40px 7px rgba(0,0,0,0.08)" }}
            >
              <div className="py-2 mt-16 text-gray-100 flex justify-center text-xl">
                <h2 className="font-500">
                  {userData.firstName} {userData.lastName}
                </h2>
              </div>
              <div className="py-2 mb-4 text-gray-300 flex justify-center text-sm">
                <h4>{userData.title}</h4>
              </div>
              <div className="border-t  border-white/20 f flex text-sm">
                <div className="w-1/2  border-r border-white/20  hover:cursor-pointer hover:bg-slate-200/10">
                  <a
                    className="py-2 gap-1 flex flex-col justify-center items-center"
                    href={"tel:+" + userData.mobile}
                  >
                    <IconContext.Provider
                      value={{ size: "18px", className: "text-gray-100" }}
                    >
                      <FaPhoneFlip />
                    </IconContext.Provider>
                    <h5 className="text-sm">Call</h5>
                  </a>
                </div>
                <div className="w-1/2 hover:cursor-pointer hover:bg-slate-200/10">
                  <a
                    href={"mailto:+" + userData.email}
                    className="py-2 gap-1 flex flex-col justify-center items-center"
                  >
                    <IconContext.Provider
                      value={{ size: "18px", className: "text-gray-100" }}
                    >
                      <FaPaperPlane />
                    </IconContext.Provider>
                    <h5 className="text-sm">Email</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-16">
            <div
              className="max-w-lg w-full text-gray-100 flex flex-col p-8"
              style={{ boxShadow: "0 -5px 40px 7px rgba(0,0,0,0.08)" }}
            >
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-6 pb-4 px-2">
                  <IconContext.Provider
                    value={{ size: "18px", className: "text-gray-600" }}
                  >
                    <FaPhoneFlip />
                  </IconContext.Provider>
                </div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6">
                    <span className="text-sm block">{userData.mobile}</span>
                    <span className="text-gray-400 block text-sm font-500">
                      Mobile
                    </span>
                  </div>
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-sm">{userData.phone}</span>
                    <span className="text-gray-400 block text-sm font-500">
                      Phone
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-6 pb-4 px-2">
                  <IconContext.Provider
                    value={{ size: "18px", className: "text-gray-600" }}
                  >
                    <FaRegEnvelope />
                  </IconContext.Provider>
                </div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-sm">{userData.email}</span>
                    <span className="text-gray-400 block text-sm font-500">
                      Email
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-6 pb-4 px-2">
                  <IconContext.Provider
                    value={{ size: "18px", className: "text-gray-600" }}
                  >
                    <FaBriefcase />
                  </IconContext.Provider>
                </div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-sm">{userData.company} </span>
                    <span className="text-gray-400 block text-sm font-500">
                      {userData.title}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-4 pb-4 px-2">
                  <IconContext.Provider
                    value={{ size: "18px", className: "text-gray-600" }}
                  >
                    <FaMapPin />
                  </IconContext.Provider>
                </div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-sm">
                      {userData.companyAddress}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-6 pb-4 px-2"></div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-md text-pink-500">
                      Social Media
                    </span>
                    <div className="flex gap-6 mt-4">
                      {userData.linkedin && (
                        <a href={userData.linkedin}>
                          <IconContext.Provider
                            value={{ size: "30px", className: "text-gray-600" }}
                          >
                            <FaLinkedin />
                          </IconContext.Provider>
                        </a>
                      )}
                      {userData.facebook && (
                        <a href="https://Facebook.com">
                          {" "}
                          <IconContext.Provider
                            value={{ size: "30px", className: "text-gray-600" }}
                          >
                            <FaSquareFacebook />
                          </IconContext.Provider>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-12 mb-8 justify-center items-center">
                <span className="text-gray-600">
                  For Android wallet Scan this QR code
                </span>

                <Canvas
                  text={"https://github.com/bunlong/next-qrcode"}
                  options={{
                    type: "image/png",
                    quality: 0.3,
                    level: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                  }}
                />
                <span className="text-gray-600"> Or you can </span>
                <a href="https://goolge.com">
                  <img
                    style={{ maxWidth: "250px" }}
                    alt="Google Wallet add button"
                    src="/wallet-button.png"
                  />
                </a>
                <span className="text-gray-600"> Or </span>
                <button
                  className="w-4/5 p-4 text-gray-100 bg-blue-500
            "
                >
                  Download Vcard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
