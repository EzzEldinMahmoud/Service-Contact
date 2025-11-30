import React, { useRef, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import logoblack from "./assets/logoblack.png";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Alert } from "@mui/material";
import { FaFacebookSquare, FaGoogle, FaGooglePlusSquare, FaVoicemail } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import emailjs from "@emailjs/browser";
import ProductListingPreview from "./ProductList";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl',
});
function App() {
  const form = useRef();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h9vrh1p", "template_6pg3266", form.current, {
        publicKey: "GkXg11axyk3Ers9JG",
      })
      .then(() => {
        setshowSuccess(true);
        setTimeout(() => {
          setshowSuccess(false);
        }, 4000);
      });
  };
  const [show, setshow] = useState(false);
  const [showSuccess, setshowSuccess] = useState(false);
  const fblink =
    "https://www.facebook.com/share/vyzzTCB3uvXmQ7fY/?mibextid=qi2Omg";
  const whatsapplink = "https://wa.me/message/2YD7UFDJCRXTE1";
  const location = "Suez, Alarbeen mosque Serag ElMoneer";
  const locationUrl = "https://maps.app.goo.gl/oLq3UbXd1DhPu5Qw6";
  const phoneNumber = "+201226881314 / +201222762576";
  const emails = "mahmoudgazi2020@gmail.com / Eng_nors67@yahoo.com"
  return (
    <div className="website-body " dir="rtl">
      <div className="h-22 w-full flex flex-start items-center justify-between  shadow-md pl-5 pr-5 " >
        
          <img
  alt="logo"
  className="h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-16 lg:w-16 xl:h-16 xl:w-16"
  src={logoblack}
/>


       
        <div className="flex flex-row space-x-10 font-serif font-semibold ">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <RxHamburgerMenu size={35} color="black" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <a
                href="#services"
                className="hover:bg-slate-300 h-10 p-2 justify-center items-center cursor-pointer rounded-md"
              >
                خدامات
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="#contact"
                className="hover:bg-slate-300 h-10 p-2 justify-center items-center cursor-pointer rounded-md"
              >
                تواصل معنا
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div
        className="flex flex-col w-full justify-center items-center"
        id="services"
      >
        <strong
          className="font-bold text-4xl lg:text-6xl mb-10 mt-5"
          style={{ fontFamily: "Poppins" }}
        >
          خدامات
        </strong>

        <ProductListingPreview></ProductListingPreview>


      </div>
<div className="w-full h-auto flex flex-col md:flex-row p-2 m-2">


        <div
          className="h-auto w-full md:w-1/2 p-2 rounded-lg"
          style={{ fontFamily: "Poppins", backgroundColor: "#1F1F1F", color: "white" }}
          id="contact"
        >
          <p className="m-2 p-2 font-semibold text-center flex-row flex items-center justify-start ">
            <img alt="logo" className="h-22 w-26" src={logo} />
          </p>
          <div className="w-full" dir="rtl">
            <p className="text-2xl  font-bold mb-5 text-rtl">تواصل معنا </p>
            <form
              className="flex flex-col gap-y-6 w-full max-w-3xl  px-4"
              ref={form}
              onSubmit={sendEmail}
            >
              <TextField
                id="outlined-basic"
                type="text"
                label="الاسم"
                variant="outlined"
                name="user_name"
                className="w-full rounded-lg"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",direction:"rtl",
                  textAlign:"right"
                }}
                required
              />
              <TextField
                id="outlined-basic"
                type="email"
                label="ايميل"
                variant="outlined"
                name="user_email"
                className="w-full rounded-lg"
                style={{
                  backgroundColor: "white",
                  color: "black",
                  borderColor: "white",direction:"rtl",
                  textAlign:"right"
                }}

                required
              />
              <textarea
                className="w-full  p-2.5 text-sm rounded-lg"

                placeholder="اشرح افكارك..."
                name="description"
                required
                style={{
                  resize: "none",
                  height: "10rem",
                  borderRadius: "1rem",
                  backgroundColor: "white",
                  border: "0.5px solid rgba(69,98,120,255)",
                  borderBlockColor: "blue",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  color: "black",
                  outline: "none",
                  padding: "0.5rem",direction:"rtl",
                  textAlign:"right"
                }}
              />
              <div className="justify-end items-end">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  ارسل
                </Button>
              </div>
            </form>
            {show ? (
              <Alert severity="error" className="mt-5">
                Please Enter valid Information.
              </Alert>
            ) : (
              <></>
            )}
            {showSuccess ? (
              <Alert severity="success" className="mt-5">
                تم الارسال.
              </Alert>
            ) : (
              <></>
            )}
          </div>

        </div>
        <div className="h-auto w-full md:w-1/2">
          <a
            href={fblink}
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare size={60} /> Facebook
          </a>
          <a
            href={whatsapplink}
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsappSquare size={60} />
            whatsapp
          </a>
          <a
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
          >
            <FaGooglePlusSquare size={60} /><p>{emails}</p>
          </a>
          <a
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
          >
            <FaSquarePhone size={60} /> {phoneNumber}
          </a>
          <a
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
            href={`${locationUrl}`}
            target="_blank"
            rel="noreferrer"
          >
            <MdLocationCity size={60} /> {location}
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
