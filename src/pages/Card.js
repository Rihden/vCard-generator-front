import {
  FaPhoneFlip,
  FaPaperPlane,
  FaRegEnvelope,
  FaMapPin,
  FaChrome,
  FaBriefcase,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";
import { useQRCode } from "next-qrcode";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function exportUserInfoVCard(userInfo) {
  const fileData = JSON.stringify(userInfo);
  const blob = new Blob([fileData], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = `${userInfo.user_id}.vcf`;
  link.href = url;
  link.click();
}

export default function Card() {
  const { Canvas } = useQRCode();
  const navigate = useNavigate();

  const { uuid } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!uuid) navigate('/')
    const fetchUser = async () => {
      const response = await (
        await fetch(
          `/api/users/${uuid}`
        )
      ).json();

      if (!response.data.firstname) navigate('/')

      setLoading(false)
      setUserData(response.data)
    };
    fetchUser();
  }, []);

  return (
    <div>
      {loading && <div>Loading ...</div>}
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
                  {userData.firstname} {userData.lastname}
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
                    <span className="block text-sm">{userData.companyname} </span>
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
                      {userData.companyaddress}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-4 pb-4 px-2">
                  <IconContext.Provider
                    value={{ size: "18px", className: "text-gray-600" }}
                  >
                    <FaChrome />
                  </IconContext.Provider>
                </div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <a target={"_blank"} href={userData.companywebsite} className="block text-sm">
                      {userData.companywebsite}
                    </a>
                  </div>
                </div>
              </div>
              {(userData.linkedin || userData.facebook) && <div className="flex gap-4 text-gray-600">
                <div className="w-1/6 flex justify-end pt-6 pb-4 px-2"></div>
                <div className="py-4 px-2 flex flex-col w-full">
                  <div className="pb-6 border-b border-gray-200">
                    <span className="block text-md text-pink-500">
                      Social Media
                    </span>
                    <div className="flex gap-6 mt-4">
                      {userData.linkedin && (
                        <a target={"_blank"} href={`https://linkedin.com/in/${userData.linkedin}`}>
                          <IconContext.Provider
                            value={{ size: "30px", className: "text-gray-600" }}
                          >
                            <FaLinkedin />
                          </IconContext.Provider>
                        </a>
                      )}
                      {userData.facebook && (
                        <a target={"_blank"} href={`https://facebook.com/${userData.facebook}`}>
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
              </div>}
              <div className="flex flex-col gap-6 mt-12 mb-8 justify-center items-center">
                <span className="text-gray-600">
                  Scan QR Code with Android Wallet to add
                </span>

                <Canvas
                  logo={{
                    src: userData.logo,
                    options: {
                      width: 70
                    }
                  }
                  }
                  text={`${process.env.REACT_APP_DOMAIN}/redirect/${userData.user_id}`}
                  options={{
                    type: "image/png",
                    quality: 0.6,
                    level: "M",
                    margin: 2,
                    scale: 2,
                    width: 300,
                  }}
                />
                <span className="text-gray-600"> Or you can use the button down below </span>
                <a href={`${process.env.REACT_APP_DOMAIN}/redirect/${userData.user_id}`}>
                  <img
                    style={{ maxWidth: "250px" }}
                    alt="Google Wallet add button"
                    src="/wallet-button.png"
                  />
                </a>
                <span className="text-gray-600"> Or </span>
                <button
                  onClick={() => exportUserInfoVCard(userData)}
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

