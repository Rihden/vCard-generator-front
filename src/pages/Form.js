import { useState, useRef } from "react";
import { useQRCode } from "next-qrcode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ErrorIcon from "../components/ErrorIcon";
import CopyIcon from "../components/CopyIcon";


const inputDefaultStateClasses =
  "py-3 px-4 block w-full border-gray-200 border-solid border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
const inputSocialMediaClasses =
  "py-3 px-4 grow border-gray-200 border-solid border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
const inputErrorStateClasses = "border-red-400 border-2";

function Form() {
  const { Canvas } = useQRCode();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({
    values: {
      "firstname": "Amine",
      "lastname": "Bouzazi",
      "title": "Developer",
      "email": "bouzazihamma2000@gmail.com",
      "companyname": "Eskills",
      "companyaddress": "21 Rue la residance, Ariana",
      "phone": "50147078",
      "mobile": "27700078",
      "companywebsite": "https://eskills.agency"
    }
  });

  const alphabetic = /^[A-Za-z\s]*$/;
  const alphanumeric = /^[\w\-\s]+$/;
  const numeric = /^\+?[0-9\s]*$/;
  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

  const form = useRef(null)
  const [logoSRC, setLogoSRC] = useState("")
  const [loading, setLoading] = useState(false)
  const [userLink, setUserLink] = useState(null)
  const [insertError, setInsertError] = useState(null)

  const onSubmit = async () => {
    setLoading(true)
    const formData = new FormData(form.current)
    if (logoSRC) formData.append("logo", logoSRC)
    const response = await fetch(`/api/users`, {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      setUserLink(`${process.env.REACT_APP_DOMAIN}/vCard/${result.user_id}`)
      setLoading(false)
      // navigateToCard(result.user_id);
    } else {
      setLoading(false)
      setInsertError(result.errors)
    }
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Generate Virtual Business Card
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Add your card info
          </p>
        </div>

        <div className="mt-12">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 lg:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-firstname-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    First Name*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-firstname-hire-us-2"
                      id="hs-firstname-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.firstname ? inputErrorStateClasses : " "
                        }`}
                      {...register("firstname", {
                        required: true,
                        pattern: alphabetic,
                      })}
                      aria-invalid={errors.firstname ? "true" : "false"}
                    />
                    {errors.firstname && <ErrorIcon />}
                  </div>
                  {errors.firstname?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.firstname?.type === "pattern" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field can only containt alphabetic characters.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hs-lastname-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Last Name*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-lastname-hire-us-2"
                      id="hs-lastname-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.lastname ? inputErrorStateClasses : " "
                        }`}
                      {...register("lastname", {
                        required: true,
                        pattern: alphabetic,
                      })}
                      aria-invalid={errors.lastname ? "true" : "false"}
                    />
                    {errors.lastname && <ErrorIcon />}
                  </div>
                  {errors.lastname?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.lastname?.type === "pattern" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field can only containt alphabetic characters.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="hs-work-title-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Title*
                </label>

                <div className="relative">
                  <input
                    type="text"
                    name="hs-work-title-hire-us-2"
                    id="hs-work-title-hire-us-2"
                    className={`${inputDefaultStateClasses} ${errors.title ? inputErrorStateClasses : " "
                      }`}
                    {...register("title", {
                      required: true,
                    })}
                    aria-invalid={errors.title ? "true" : "false"}
                  />
                  {errors.title && <ErrorIcon />}
                </div>
                {errors.title?.type === "required" && (
                  <p
                    className="text-sm text-red-500 mt-2"
                    id="hs-input-helper-text"
                  >
                    This field is required.
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Work Email*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    autoComplete="email"
                    className={`${inputDefaultStateClasses} ${errors.email ? inputErrorStateClasses : " "
                      }`}
                    {...register("email", {
                      required: true,
                      pattern: emailRegex,
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <ErrorIcon />}
                </div>
                {errors.email?.type === "required" && (
                  <p
                    className="text-sm text-red-500 mt-2"
                    id="hs-input-helper-text"
                  >
                    This field is required.
                  </p>
                )}
                {errors.email?.type === "pattern" && (
                  <p
                    className="text-sm text-red-500 mt-2"
                    id="hs-input-helper-text"
                  >
                    Please enter a valid email.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-company-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Company*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-company-hire-us-2"
                      id="hs-company-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.companyname ? inputErrorStateClasses : " "
                        }`}
                      {...register("companyname", {
                        required: true,
                      })}
                      aria-invalid={errors.companyname ? "true" : "false"}
                    />
                    {errors.companyname && <ErrorIcon />}
                  </div>
                  {errors.companyname?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hs-company-address-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Company Address*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-company-address-hire-us-2"
                      id="hs-company-address-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.companyaddress ? inputErrorStateClasses : " "
                        }`}
                      {...register("companyaddress", {
                        required: true,
                      })}
                      aria-invalid={errors.companyaddress ? "true" : "false"}
                    />
                    {errors.companyaddress && <ErrorIcon />}
                  </div>
                  {errors.companyaddress?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="hs-company-website-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Company Website*
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="hs-company-website-hire-us-2"
                    id="hs-company-website-hire-us-2"
                    className={`${inputDefaultStateClasses} ${errors.companywebsite ? inputErrorStateClasses : " "
                      }`}
                    {...register("companywebsite", {
                      required: true,
                    })}
                    aria-invalid={errors.companywebsite ? "true" : "false"}
                  />
                  {errors.companywebsite && <ErrorIcon />}
                </div>
                {errors.companywebsite?.type === "required" && (
                  <p
                    className="text-sm text-red-500 mt-2"
                    id="hs-input-helper-text"
                  >
                    This field is required.
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-phone-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Phone Number*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-phone-hire-us-2"
                      id="hs-phone-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.phone ? inputErrorStateClasses : " "
                        }`}
                      {...register("phone", {
                        required: true,
                        pattern: numeric,
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone && <ErrorIcon />}
                  </div>
                  {errors.phone?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      Please enter a valid phone number.
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="hs-mobile-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Mobile Number*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-mobile-hire-us-2"
                      id="hs-mobile-hire-us-2"
                      className={`${inputDefaultStateClasses} ${errors.mobile ? inputErrorStateClasses : " "
                        }`}
                      {...register("mobile", {
                        required: true,
                        pattern: numeric,
                      })}
                      aria-invalid={errors.mobile ? "true" : "false"}
                    />
                    {errors.mobile && <ErrorIcon />}
                  </div>
                  {errors.mobile?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.mobile?.type === "pattern" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      Please enter a valid mobile number.
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-linkedin-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Linkedin
                </label>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400"> https://linkedin.com/in/ </span>
                  <input
                    type="text"
                    name="hs-linkedin-hire-us-2"
                    id="hs-linkedin-hire-us-2"
                    {...register("linkedin")}
                    className={inputSocialMediaClasses}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-facebook-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Facebook
                </label>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400"> https://facebook.com/ </span>
                  <input
                    type="text"
                    name="hs-facebook-hire-us-2"
                    id="hs-facebook-hire-us-2"
                    {...register("facebook")}
                    className={inputDefaultStateClasses}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="hs-logo-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Select Logo image
                </label>
                <label className="mt-2 flex flex-row items-end justify-center">
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setLogoSRC(e.target.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-2 file:border-solid file:text-sm file:font-semiboldfile:bg-white file:border-blue-500 file:text-blue-500 hover:file:bg-blue-500 hover:file:text-white hover:cursor-pointer
                  "
                  />
                  {logoSRC && (
                    <img
                      src={logoSRC}
                      style={{ width: "50px", height: "50px" }}
                    />
                  )}
                </label>
              </div>

              {logoSRC && (
                <div className="flex items-center flex-col">
                  <p className="text-grey-400">QR code preview</p>
                  <Canvas
                    logo={{
                      src: logoSRC,
                      options: {
                        width: 80
                      }
                    }}
                    text={getValues("companywebsite")}
                    options={{
                      type: "image/png",
                      quality: 0.4,
                      level: "M",
                      margin: 2,
                      scale: 5,
                      width: 350,
                    }}
                  />
                </div>
              )}
            </div>

            <div className="mt-12 flex justify-center items-end gap-3">
              <button
                className={`${!loading ? "bg-blue-600 cursor-pointer" : "bg-slate-600"} text-center  border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 w-1/2`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Generate VCard"}
              </button>
            </div>


            {userLink && <div className="flex flex-col items-center mt-12">
              <div className="flex text-sm"><a className="mr-2" target={"_blank"} href={userLink}>{userLink}</a><CopyIcon link={userLink} /></div>
              <div className="text-sm my-4">- OR Scan the following QR code -</div>
              <Canvas
                text={userLink}
                options={{
                  type: "image/png",
                  quality: 0.4,
                  level: "M",
                  margin: 3,
                  scale: 4,
                  width: 250,
                }}
              />
            </div>}


            <div className="text-center text-red-400 mt-8">
              {insertError}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
