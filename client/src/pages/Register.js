// import { useState } from "react";
// import { useSignup } from "../hooks/useSignup";
// import axios from 'axios';
// const Signup = () => {
//   const { signup, error, isLoading } = useSignup();

//   const [branch, setBranch] = useState("");
//   const [category, setCategory] = useState("");
//   const [address, setAddress] = useState("");
//   const [gender, setGender] = useState("");
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [year, setYear] = useState("");
//   const [merit, setMerit] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [image, setImage] = useState(" ");

//   const imageUpload = (e) => {
//     const file = e.target.files[0];
//     setFileToBase(file);
//     console.log(file);
//   };

//   const setFileToBase = (file) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       setImage(reader.result);
//     };
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // console.log(name,number,branch,category,year,merit,address,gender,email,password)
//     await signup(
//       name,
//       number,
//       branch,
//       category,
//       year,
//       merit,
//       address,
//       gender,
//       email,
//       password,
//       image
//     );
//   };

//   console.log(name);

//   return (
//     <>
//       <div className="registration">
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Document</title>
//         <link
//           href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.1/flowbite.min.css"
//           rel="stylesheet"
//         />

//         <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-white-800 dark:border-gray-700 mt-6">
//           <h1 className="text-center">Admit Form</h1>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid gap-6 mb-6 mt-6 md:grid-cols-2">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   value={name}
//                   type="text"
//                   onChange={(e) => setName(e.target.value)}
//                   id="name"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="John Doe"
//                   required=""
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Phone number
//                 </label>
//                 <input
//                   value={number}
//                   onChange={(e) => setNumber(e.target.value)}
//                   type="number"
//                   id="phone"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="123-45-678"
//                   required=""
//                 />
//               </div>

//               <>
//                 <label
//                   htmlFor="branches"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select your branch
//                 </label>
//                 <select
//                   value={branch}
//                   onChange={(e) => setBranch(e.target.value)}
//                   id="branches"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option selected="">Choose your branch</option>
//                   <option value="cs">cs</option>
//                   <option value="mech">mech</option>
//                   <option value="civil">civil</option>
//                   <option value="electrinics">electronics</option>
//                   console.log("hi");
//                 </select>
//               </>

//               <>
//                 <label
//                   htmlFor="categories"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                 >
//                   Select your category
//                 </label>
//                 <select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   id="branch"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 >
//                   <option selected="">Choose your category</option>
//                   <option value="open">open</option>
//                   <option value="obc">obc</option>
//                   <option value="sc">st</option>
//                   <option value="nt">nt</option>
//                 </select>
//               </>

//               <div>
//                 <label
//                   htmlFor="year"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Academic Year
//                 </label>
//                 <input
//                   value={year}
//                   onChange={(e) => setYear(e.target.value)}
//                   type="text"
//                   id="year"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Branch"
//                   required=""
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="merit"
//                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Merit Number
//                 </label>
//                 <input
//                   value={merit}
//                   onChange={(e) => setMerit(e.target.value)}
//                   type="text"
//                   id="merit"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Branch"
//                   required=""
//                 />
//               </div>
//             </div>
//             <>
//               <label
//                 htmlFor="branches"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Select your address
//               </label>
//               <select
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 id="branches"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected="">Choose </option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Outside Mumbai">Outside Mumbai</option>
//               </select>
//             </>
//             <>
//               <label
//                 htmlFor="branches"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//               >
//                 Select your gender
//               </label>
//               <select
//                 value={gender}
//                 onChange={(e) => setGender(e.target.value)}
//                 id="branches"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//               >
//                 <option selected="">Choose your gender</option>
//                 <option value="M">M</option>
//                 <option value="F">F</option>
//               </select>
//             </>

//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//               >
//                 Email address
//               </label>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="jjdoe@gmail.com"
//                 required=""
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="Password"
//                 className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//               >
//                 Password
//               </label>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 id="email"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 placeholder="**"
//                 required=""
//               />
//             </div>
//             <div className="mb-3">
//               <div className="form-file custom-file">
//                 <label
//                   htmlFor="image"
//                   className="form-file-text custom-file-label block mb-2 text-sm font-medium text-gray-900 dark:text-black"
//                 >
//                   Choose Image...
//                 </label>
//                 <input
//                   type="file"
//                   className="form-file-input  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   id="image"
//                   name="image"
//                   placeholder="Choose Image"
//                   required=""
//                   onChange={imageUpload}
//                 />
//                 <label for="image" class="btn btn-primary">
//                   Browse
//                 </label>
//                 /
//               </div>
// //             </div>
//             <div className="flex items-start mb-6">
//               <div className="flex items-center h-5">
//                 <input
//                   id="remember"
//                   type="checkbox"
//                   defaultValue=""
//                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
//                   required=""
//                 />
//               </div>
//               <label
//                 htmlFor="remember"
//                 className="ml-2 text-sm font-medium text-black-900 dark:text-black-300"
//               >
//                 I agree with the{" "}
//                 <a
//                   href="#"
//                   className="text-blue-600 hover:underline dark:text-blue-500"
//                 >
//                   terms and conditions
//                 </a>
//               </label>
//             </div>
//             <button
//               onSubmit={handleSubmit}
//               type="submit"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;








import React, { useEffect, useRef, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import { useToast } from "@chakra-ui/react";
import Paper from "@mui/material/Paper";
import { Box, TextField } from "@mui/material";
import { ShareLink } from "social-media-sharing";
// import { useState } from "react";
// import  {useRegister} from "../hooks/useRegister"

const Register = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [response3, setResponse3] = useState("");
  const [loading, setLoading] = useState(false);

  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const shareHandler = () => {
    const socialMediaLinks = new ShareLink("twitter");
    socialMediaLinks.get({ url: "https://google.com" });
    socialMediaLinks.open();
    console.log(socialMediaLinks);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("The entered data is ", userInput);

    // userInput is null
    // if (!userInput) {
    //   console.log("Inside if");
    //   toast({
    //     title: "Invalid Input",
    //     position: "bottom-right",
    //     description: "Please fill the input field",
    //     status: "success",
    //     duration: 9000,
    //     isClosable: true,
    //   });
    // }

    setLoading(true);
    console.log("About to send a post request");
    try {
      const res = await fetch("http://localhost:5000/factcheck", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: userInput,
      });
      const data = await res.json();
      console.log("After the request");
      console.log("The data is ", data);
      console.log("Printing the object");
      console.log(data.result[0]);
      console.log(data.result[1]);
      console.log(data.result[2]);

      setResponse1(data.result[0]);
      setResponse2(data.result[1]);
      setResponse3(data.result[2]);
    } catch (err) {
      console.error(err.message);
    }
    console.log("Reponse returned");
    setLoading(false);
    setUserInput("");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome /> */}
        <section className="mt-36">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">
              {/* CTA box */}
              <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
                {/* Background illustration */}
                <div
                  className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
                  aria-hidden="true"
                >
                  <svg
                    width="428"
                    height="328"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient
                        cx="35.542%"
                        cy="34.553%"
                        fx="35.542%"
                        fy="34.553%"
                        r="96.031%"
                        id="ni-a"
                      >
                        <stop stopColor="#DFDFDF" offset="0%" />
                        <stop stopColor="#4C4C4C" offset="44.317%" />
                        <stop stopColor="#333" offset="100%" />
                      </radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g fill="#FFF">
                        <ellipse
                          fillOpacity=".04"
                          cx="185"
                          cy="15.576"
                          rx="16"
                          ry="15.576"
                        />
                        <ellipse
                          fillOpacity=".24"
                          cx="100"
                          cy="68.402"
                          rx="24"
                          ry="23.364"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="29"
                          cy="251.231"
                          rx="29"
                          ry="28.231"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="29"
                          cy="251.231"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="342"
                          cy="31.303"
                          rx="8"
                          ry="7.788"
                        />
                        <ellipse
                          fillOpacity=".48"
                          cx="62"
                          cy="126.811"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".12"
                          cx="78"
                          cy="7.072"
                          rx="2"
                          ry="1.947"
                        />
                        <ellipse
                          fillOpacity=".64"
                          cx="185"
                          cy="15.576"
                          rx="6"
                          ry="5.841"
                        />
                      </g>
                      <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">
                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">
                      Enter URL or Text Query
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      You will be provided with accurate information as well as
                      the percentage accuracy of the input article will be
                      highlighted
                    </p>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto">
                      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500 focus:outline-none active:outline-none"
                          placeholder="Query..."
                          aria-label="Query..."
                        />
                        {!loading ? (
                          <button
                            onClick={submitHandler}
                            className="btn text-white bg-blue-600 hover:bg-blue-700 shadow"
                          >
                            Submit
                          </button>
                        ) : (
                          <button
                            disabled
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                          >
                            <svg
                              aria-hidden="true"
                              role="status"
                              class="inline w-4 h-4 mr-3 text-white animate-spin"
                              viewBox="0 0 100 101"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                              />
                              <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                              />
                            </svg>
                            Loading...
                          </button>
                        )}
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                      <p className="text-sm text-gray-400 mt-3">Start Now!</p>
                    </form>
                    {/* Empty input toast */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}

        <section className="relative">
          {/* Section background (needs .relative class on parent and next sibling elements) */}
          <div
            className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
            aria-hidden="true"
          ></div>
          <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-12 md:pt-20">
              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 flex flex-col items-center">
                <h1 className="h2 mb-4">Explore the solutions</h1>
                <p className="text-xl text-gray-600 mb-7">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
                  cupidatat.
                </p>
                {response1 && response2 && response3 && (
                  <Box
                    className="mt-9 min-h-[1000px] w-[1000px] "
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      "& > :not(style)": {
                        m: 1,
                        // width: 1000,
                        // height: 1000,
                      },
                    }}
                  >
                    <Paper elevation={3} className="">
                      <div className="p-10 text-2xl ">{response1}</div>
                      <div className="p-10 text-2xl ">{response2}</div>
                      <div className="p-10 text-2xl ">{response3}</div>
                    </Paper>
                  </Box>
                )}
                {/* 
                <button
                  className="-mt-[950px] h-12 w-14 flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                  onClick={shareHandler}
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </button> */}
              </div>

              {/* Displaying the Response */}

              {/* Section content */}
            </div>
          </div>
        </section>
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
};


export default Register ;











