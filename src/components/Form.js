import { useState } from "react";
import { useQRCode } from "next-qrcode";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Form() {
  const { Canvas } = useQRCode();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const inputDefaultStateClasses =
    "py-3 px-4 block w-full border-gray-200 border-solid border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
  const inputSocialMediaClasses =
    "py-3 px-4 grow border-gray-200 border-solid border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
  const inputErrorStateClasses = "border-red-400 border-2";
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [logoSRC, setLogoSRC] = useState(null);
  const [logoFile, setFile] = useState(null);

  const navigateToCard = () => {
    navigate("/vcard/nedhir");
  };

  const alphabetic = /^[A-Za-z\s]*$/;
  const alphanumeric = /^[\w\-\s]+$/;
  const numeric = /^\+?[0-9\s]*$/;
  const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

  const onSubmit = function () {
    console.log({
      firstName,
      lastName,
      title,
      email,
      company,
      companyAddress,
      phone,
      mobile,
      linkedin,
      facebook,
    });
    navigateToCard();
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                        errors.firstName ? inputErrorStateClasses : " "
                      }`}
                      {...register("firstName", {
                        required: true,
                        pattern: alphabetic,
                      })}
                      aria-invalid={errors.firstName ? "true" : "false"}
                      onInput={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                    {errors.firstName && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.firstName?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.firstName?.type === "pattern" && (
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
                        errors.lastName ? inputErrorStateClasses : " "
                      }`}
                      {...register("lastName", {
                        required: true,
                        pattern: alphabetic,
                      })}
                      aria-invalid={errors.lastName ? "true" : "false"}
                      onInput={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                    {errors.lastName && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.lastName?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                  {errors.lastName?.type === "pattern" && (
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
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Title*
                </label>

                <div className="relative">
                  <input
                    type="text"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    className={`${inputDefaultStateClasses} ${
                      errors.title ? inputErrorStateClasses : " "
                    }`}
                    {...register("title", {
                      required: true,
                    })}
                    aria-invalid={errors.title ? "true" : "false"}
                    onInput={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  {errors.title && (
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  )}
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
                    onInput={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  )}
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
                        errors.company ? inputErrorStateClasses : " "
                      }`}
                      {...register("company", {
                        required: true,
                      })}
                      aria-invalid={errors.company ? "true" : "false"}
                      onInput={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                    {errors.company && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.company?.type === "required" && (
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
                    htmlFor="hs-company-website-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Company Address*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-company-website-hire-us-2"
                      id="hs-company-website-hire-us-2"
                      className={`${inputDefaultStateClasses} ${
                        errors.companyAddress ? inputErrorStateClasses : " "
                      }`}
                      {...register("companyAddress", {
                        required: true,
                      })}
                      aria-invalid={errors.companyAddress ? "true" : "false"}
                      onInput={(e) => setCompanyAddress(e.target.value)}
                      value={companyAddress}
                    />
                    {errors.companyAddress && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.companyAddress?.type === "required" && (
                    <p
                      className="text-sm text-red-500 mt-2"
                      id="hs-input-helper-text"
                    >
                      This field is required.
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="hs-company-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Phone Number*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-company-hire-us-2"
                      id="hs-company-hire-us-2"
                      className={`${inputDefaultStateClasses} ${
                        errors.phone ? inputErrorStateClasses : " "
                      }`}
                      {...register("phone", {
                        required: true,
                        pattern: numeric,
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                      onInput={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                    {errors.phone && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
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
                    htmlFor="hs-company-website-hire-us-2"
                    className="block text-sm text-gray-500 font-medium dark:text-white"
                  >
                    Mobile Number*
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="hs-company-website-hire-us-2"
                      id="hs-company-website-hire-us-2"
                      className={`${inputDefaultStateClasses} ${
                        errors.mobile ? inputErrorStateClasses : " "
                      }`}
                      {...register("mobile", {
                        required: true,
                        pattern: numeric,
                      })}
                      aria-invalid={errors.mobile ? "true" : "false"}
                      onInput={(e) => setMobile(e.target.value)}
                      value={mobile}
                    />
                    {errors.mobile && (
                      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    )}
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
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Lindekin
                </label>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400"> https://linkedin.com/ </span>
                  <input
                    type="text"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    className={inputSocialMediaClasses}
                    onInput={(e) =>
                      setLinkedin("https://linkedin.com/" + e.target.value)
                    }
                    value={linkedin.substring(
                      linkedin.indexOf("https://linkedin.com/") > -1 ? 21 : 0
                    )}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Facebook
                </label>
                <div className="flex gap-2 items-center">
                  <span className="text-gray-400"> https://facebook.com/ </span>
                  <input
                    type="text"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    className={inputDefaultStateClasses}
                    onInput={(e) =>
                      setFacebook("https://facebooks.com/" + e.target.value)
                    }
                    value={facebook.substring(
                      facebook.indexOf("https://facebooks.com/") > -1 ? 22 : 0
                    )}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="hs-company-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Logo image
                </label>
                <label className="mt-2 flex flex-row items-end justify-center">
                  <input
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setLogoSRC(e.target.result);
                      };
                      reader.readAsDataURL(file);
                    }}
                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-2 file:border-solid
                    file:text-sm file:font-semibold
                    file:bg-white file:border-blue-500 file:text-blue-500
                    hover:file:bg-blue-500 hover:file:text-white hover:cursor-pointer
                  "
                  />
                  {logoSRC && (
                    <img
                      src={logoSRC}
                      style={{ width: "40px", height: "40px" }}
                    />
                  )}
                </label>
              </div>

              {logoSRC && (
                <div className="flex items-center flex-col">
                  <p className="text-grey-400">QR code preview :</p>
                  <Canvas
                    logo={{
                      src: logoSRC,
                      options: {
                        x: undefined,
                        y: undefined,
                      },
                    }}
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
                </div>
              )}
            </div>

            <div className="mt-12 flex justify-center items-end gap-3">
              <button
                className="text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800 w-1/2"
                type="submit"
              >
                Generate VCard
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* <div
        className="hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
        style={{ backgroundColor: "#00000066" }}
        v-if="isShowingOverlay"
      >
        <div
          className="hs-overlay-open:mt-7 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
          v-if="isShowingPDF"
        >
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Business card
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick="hidePDF()"
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
            <div className="p-4 overflow-y-auto">
              <iframe width="420px" height="640px"></iframe>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick="hidePDF()"
              >
                Close
              </button>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href={`${pdfFile}`}
                download="business card.pdf"
                target="_blank"
              >
                Download
              </a>
            </div>
          </div>
        </div>
        <div
          className="hs-overlay-open:mt-7 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center justify-center"
          v-if="isShowingQROptions"
        >
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                Wallet pass
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick="hideQROptions()"
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
            <div className="p-4 overflow-y-auto flex flex-col items-center justify-center text-center gap-4 md:flex-row">
              <a href={`${passUrl}`}>
                <img style={{ maxWidth: "250px" }} src="/wallet-button.png" />
              </a>
              <p>or</p>
              <img
                src={QRurl}
                alt="QR Code for wallet pass"
                style={{ maxWidth: "200px" }}
              />
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                type="button"
                className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-vertically-centered-modal"
                onClick="hideQROptions()"
              >
                Close
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center h-full flex-col"
          v-if="isLoading"
        >
          <span className="loader"></span>
          <p className="text-white">Generating Pdf...</p>
        </div>
      </div> */}
    </div>
  );
}

export default Form;
