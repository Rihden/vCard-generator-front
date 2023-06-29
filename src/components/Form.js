import { useState } from "react";
import { useQRCode } from "next-qrcode";

function Form() {
  const { Canvas } = useQRCode();
  const inputDefaultStateClasses =
    "py-3 px-4 block w-full border-gray-200 border-solid border rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400";
  const inputErrorStateClasses = "border-red-400 border-2";
  const [firstNameClasses, setFirstNameClasses] = useState(
    inputDefaultStateClasses
  );
  const [lastNameClasses, setLastNameClasses] = useState(
    inputDefaultStateClasses
  );
  const [emailClasses, setEmailClasses] = useState(inputDefaultStateClasses);
  const [titleClasses, setTitleClasses] = useState(inputDefaultStateClasses);
  const [companyClasses, setCompanyClasses] = useState(
    inputDefaultStateClasses
  );

  const [companyAddressClasses, setComapanyAddress] = useState(
    inputDefaultStateClasses
  );

  const [phoneClasses, setPhoneClasses] = useState(inputDefaultStateClasses);
  const [mobileClasses, setMobileClasses] = useState(inputDefaultStateClasses);

  const [errorMessage, setErrorMessage] = useState("");
  const [passUrl, setPassUrl] = useState("");
  const [pdfFile, setPdfFile] = useState("");
  const [QRurl, setQRurl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [companyAddressError, setCompanyAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [formError, setFormError] = useState(false);
  const [logoSRC, setLogoSRC] = useState(null);
  const [logoFile, setFile] = useState(null);

  const resetFormErrors = function () {
    setFirstNameClasses(inputDefaultStateClasses);
    setLastNameClasses(inputDefaultStateClasses);
    setEmailClasses(inputDefaultStateClasses);
    setCompanyClasses(inputDefaultStateClasses);
    setComapanyAddress(inputDefaultStateClasses);
    setPhoneClasses(inputDefaultStateClasses);
    setTitleClasses(inputDefaultStateClasses);
    setMobileClasses(inputDefaultStateClasses);
    setErrorMessage("");
    setFormError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setTitleError(false);
    setEmailError(false);
    setCompanyError(false);
    setCompanyAddressError(false);
    setPhoneError(false);
    setMobileError(false);
  };

  const validateFields = function () {
    const alphabetic = /^[A-Za-z\s]*$/;
    const alphanumeric = /^[\w\-\s]+$/;
    const numeric = /^\+?[0-9\s]*$/;
    const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;

    resetFormErrors();

    if (mobile === "") {
      setFormError(true);
      setMobileError(true);

      setMobileClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Mobile number is required.");
    } else if (!numeric.test(mobile)) {
      setFormError(true);
      setMobileError(true);
      setMobileClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Please enter a valid mobile number.");
    }

    if (phone === "") {
      setFormError(true);
      setPhoneError(true);

      setPhoneClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Phone number is required.");
    } else if (!numeric.test(phone)) {
      setFormError(true);
      setPhoneError(true);
      setPhoneClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Please enter a valid phone number.");
    }

    if (companyAddress === "") {
      setCompanyAddressError(true);
      setFormError(true);
      setComapanyAddress(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("Company address is required.");
    }

    if (company === "") {
      setFormError(true);
      setCompanyError(true);
      setCompanyClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("Company is required.");
    } else if (!alphanumeric.test(company)) {
      setFormError(true);
      setCompanyError(true);
      setCompanyClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("Company may only contain alphanumeric characters.");
    }

    if (email === "") {
      setFormError(true);
      setEmailError(true);

      setEmailClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Email is required.");
    } else if (!emailRegex.test(email)) {
      setFormError(true);
      setEmailError(true);
      setEmailClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Please enter a valid email.");
    }

    if (title === "") {
      setFormError(true);
      setTitleError(true);
      setTitleClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Title is required.");
    } else if (!alphabetic.test(title)) {
      setFormError(true);
      setTitleError(true);
      setTitleClasses(inputDefaultStateClasses + " " + inputErrorStateClasses);
      setErrorMessage("Title may only contain alphabetic characters.");
    }

    if (lastName === "") {
      setFormError(true);
      setLastNameError(true);
      setLastNameClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("Last name is required.");
    } else if (!alphabetic.test(lastName)) {
      setFormError(true);
      setLastNameError(true);
      setLastNameClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("Last name may only contain alphabetic characters.");
    }

    if (firstName === "") {
      setFormError(true);
      setFirstNameError(true);
      setFirstNameClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("First name is required.");
    } else if (!alphabetic.test(firstName)) {
      setFormError(true);
      setFirstNameError(true);
      setFirstNameClasses(
        inputDefaultStateClasses + " " + inputErrorStateClasses
      );
      setErrorMessage("First name may only contain alphabetic characters.");
    }
  };
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <Canvas
        logo={{
          src: logoSRC,
          options: {
            width: 40,
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
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Generate your business card
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Add your business card info
          </p>
        </div>

        <div className="mt-12">
          <form>
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
                      className={firstNameClasses}
                      onInput={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                    {firstNameError && (
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
                      className={lastNameClasses}
                      onInput={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                    {lastNameError && (
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
                    className={titleClasses}
                    onInput={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  {titleError && (
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
                    className={emailClasses}
                    onInput={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  {emailError && (
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
                      className={companyClasses}
                      onInput={(e) => setCompany(e.target.value)}
                      value={company}
                    />
                    {companyError && (
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
                      className={companyAddressClasses}
                      onInput={(e) => setCompanyAddress(e.target.value)}
                      value={companyAddress}
                    />
                    {companyAddressError && (
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
                      className={phoneClasses}
                      onInput={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                    {phoneError && (
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
                      className={mobileClasses}
                      onInput={(e) => setMobile(e.target.value)}
                      value={mobile}
                    />
                    {mobileError && (
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
                </div>
              </div>
              <div>
                <label
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Lindekin
                </label>
                <input
                  type="text"
                  name="hs-work-email-hire-us-2"
                  id="hs-work-email-hire-us-2"
                  className={inputDefaultStateClasses}
                  onInput={(e) => setLinkedin(e.target.value)}
                  value={linkedin}
                />
              </div>
              <div>
                <label
                  htmlFor="hs-work-email-hire-us-2"
                  className="block text-sm text-gray-500 font-medium dark:text-white"
                >
                  Facebook
                </label>
                <input
                  type="text"
                  name="hs-work-email-hire-us-2"
                  id="hs-work-email-hire-us-2"
                  className={inputDefaultStateClasses}
                  onInput={(e) => setFacebook(e.target.value)}
                  value={facebook}
                />
              </div>

              <label className="mt-6 flex flex-row items-end justify-center">
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
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600
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
            <div className="text-center mt-6">
              <p className="font-bold text-red-500 dark:text-red-300">
                {errorMessage ? errorMessage : " "}
              </p>
            </div>
            <div className="mt-6 flex justify-center items-end gap-3">
              <button
                className="text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                onClick={(e) => {
                  validateFields();
                }}
                type="button"
              >
                Generate QR
              </button>
              <button
                className="text-center bg-gray-400 hover:bg-gray-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                type="button"
              >
                Generate Card
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                Scan the QR code to add your business card to your wallet.
              </p>
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
