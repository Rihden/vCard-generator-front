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
      firstname: "Amine",
      lastname: "Bouzazi",
      title: "Developer",
      email: "bouzazihamma2000@gmail.com",
      companyname: "Eskills",
      companyaddress: "21 Rue la residance, Ariana",
      phone: "50147078",
      mobile: "27700078",
      companywebsite: "https://eskills.agency",
    },
  });

  const alphabetic = /^[A-Za-z\s]*$/;
  const alphanumeric = /^[\w\-\s]+$/;
  const numeric = /^\+?[0-9\s]*$/;
  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

  const form = useRef(null);
  const [logoSRC, setLogoSRC] = useState("");
  const [loading, setLoading] = useState(false);
  const [showingOverlay, setShowingOverlay] = useState(false);
  const [userLink, setUserLink] = useState(null);
  const [insertError, setInsertError] = useState(null);
  const [addingLogo, setAddingLogo] = useState(false);
  const canvasRef = useRef(null);

  const onSubmit = async () => {
    setLoading(true);
    const formData = new FormData(form.current);
    if (logoSRC) formData.append("logo", logoSRC);
    const response = await fetch(process.env.REACT_APP_DOMAIN + `/api/users`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.success) {
      setUserLink(`${process.env.REACT_APP_DOMAIN}/vCard/${result.user_id}`);
      setLoading(false);
      setShowingOverlay(true);
      // navigateToCard(result.user_id);
    } else {
      setLoading(false);
      setInsertError(result.errors);
    }
  };

  const downloadQRPNG = function () {
    const canvasParent = canvasRef.current;
    let link = document.createElement("a");
    link.download = "QR code.png";
    if (canvasParent.children[0]) {
      link.href = canvasParent.children[0].toDataURL();
      link.click();
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
                      className={`${inputDefaultStateClasses} ${
                        errors.firstname ? inputErrorStateClasses : " "
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
                      className={`${inputDefaultStateClasses} ${
                        errors.lastname ? inputErrorStateClasses : " "
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
                    className={`${inputDefaultStateClasses} ${
                      errors.title ? inputErrorStateClasses : " "
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
                    className={`${inputDefaultStateClasses} ${
                      errors.email ? inputErrorStateClasses : " "
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
                      className={`${inputDefaultStateClasses} ${
                        errors.companyname ? inputErrorStateClasses : " "
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
                      className={`${inputDefaultStateClasses} ${
                        errors.companyaddress ? inputErrorStateClasses : " "
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
                    className={`${inputDefaultStateClasses} ${
                      errors.companywebsite ? inputErrorStateClasses : " "
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
                      className={`${inputDefaultStateClasses} ${
                        errors.phone ? inputErrorStateClasses : " "
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
                      className={`${inputDefaultStateClasses} ${
                        errors.mobile ? inputErrorStateClasses : " "
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
                  <span className="text-gray-400">
                    {" "}
                    https://linkedin.com/in/{" "}
                  </span>
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

              <div className="flex gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={addingLogo}
                  onChange={(e) => setAddingLogo(e.target.checked)}
                  id="logo-checkbox"
                />
                <label htmlFor="logo-checkbox" className="text-gray-500">
                  Add a logo to the QR code
                </label>
              </div>
              {addingLogo && (
                <div className="mt-1">
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
              )}
            </div>

            <div className="mt-12 flex justify-center items-end gap-3">
              <button
                className={`${
                  !loading ? "bg-blue-600 cursor-pointer" : "bg-slate-600"
                } text-center  border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 w-1/2`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Loading..." : "Generate VCard"}
              </button>
            </div>

            {userLink && showingOverlay && (
              <div
                className="hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                style={{ backgroundColor: "#00000066" }}
              >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center justify-center">
                  <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                      <h3 className="font-bold text-gray-800 dark:text-white">
                        Vcard link and QR code
                      </h3>
                      <button
                        type="button"
                        className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#hs-vertically-centered-modal"
                        onClick={() => setShowingOverlay(false)}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="w-3.5 h-3.5"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="p-4 overflow-y-auto flex flex-col items-center justify-center text-center gap-4 md:flex-col">
                      <div className="flex text-sm">
                        <a className="mr-2" target={"_blank"} href={userLink}>
                          {userLink}
                        </a>
                        <CopyIcon link={userLink} />
                      </div>
                      <div className="text-sm my-4">
                        - OR Scan the following QR code -
                      </div>

                      <div ref={canvasRef}>
                        <Canvas
                          logo={{
                            src: logoSRC,
                            options: {
                              width: 80,
                            },
                          }}
                          text={userLink}
                          options={{
                            type: "image/png",
                            quality: 1,
                            level: "M",
                            margin: 2,
                            scale: 5,
                            width: 350,
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                      <button
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                        onClick={() => {
                          downloadQRPNG();
                        }}
                      >
                        Download
                      </button>
                      <button
                        type="button"
                        className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#hs-vertically-centered-modal"
                        onClick={() => setShowingOverlay(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center text-red-400 mt-8">{insertError}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
