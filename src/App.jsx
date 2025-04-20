import React, { useRef, useState } from "react";
import "./App.css";
import logo from "./assets/logo.jpeg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Alert } from "@mui/material";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import emailjs from "@emailjs/browser";
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
  const location = "Suez, Ain Sokhna";
  const phoneNumber = " +201090196335\n +201222271310\n +201226881314";
  const dataList = [
    {
      title: "Buildings Repair and maintenance\n",
      description:
        "Revitalize your industrial buildings and factories affordably with our expert repair services. we're committed to optimizing your spaces while minimizing costs. Our tailored solutions are designed to ensure that your infrastructure remains robust and functional without straining your budget,\
            With a focus on efficiency and quality, our experienced team employs advanced techniques and industry best practices to deliver exceptional results. Whether it's routine maintenance or major repairs, we\re dedicated to providing cost-effective solutions that meet your needs and exceed your expectations\
            Don't let repair expenses hold you back. Trust in our reliable services to enhance the longevity and performance of your industrial facilities while keeping costs down. Contact us today to discover how we can help you achieve your goals without breaking the bank.",
      image:
        "https://lh3.googleusercontent.com/p/AF1QipMUyz_47U1j3mpsKkoUOA7TDgLmalrZh2lig-M8=w1080-h608-p-no-v0",
    },
    {
      title: "Labor And Tools\n Procurement",
      description:
        "Acquire a skilled labor force affordably through our services, where we take immense pride in our teams. we specialize in delivering cost-effective solutions tailored to your workforce needs. Our commitment to excellence ensures that you receive top-notch personnel without overspending.\
            With a focus on efficiency and quality, our dedicated teams are equipped with the expertise and resources to meet your requirements. Whether it's staffing for short-term projects or long-term placements, we strive to minimize costs while maximizing the caliber of our workforce.\
            Rely on us to procure the talent you need without compromising on quality. Explore how our services can help you achieve your staffing goals while maintaining your budget. Connect with us today to experience the difference.",
      image: require("./assets/images/teams/teamimg.jpg"),
    },
    {
      title: "Air Conditioning system\n Repair and maintenance\n",
      description:
        "Efficiently repair and maintain your air conditioning system while minimizing costs with our services. we prioritize affordability without compromising on quality. Our team is dedicated to providing cost-effective solutions tailored to your HVAC needs.\
            With years of experience and expertise, we ensure that your air conditioning system operates at peak performance without breaking the bank. Whether it's routine maintenance or emergency repairs, we're committed to delivering high-quality service at a competitive price.\
            Trust us to keep your space comfortable while saving you money. Contact us today to learn more about how our services can benefit you and your budget.",
      image:
        "https://www.thegenaugroup.com/wp-content/uploads/2021/08/commercial-property-maintenance.jpg",
    },
  ];
  return (
    <div className="website-body">
      <div className="h-14 w-full flex flex-start items-center justify-between  shadow-md pl-5 pr-5 " >
        <p className="m-3 p-2 font-serif font-semibold text-center flex-row flex items-center justify-center font-black text-sm md:text-xl ">
          <img alt="logo" className="h-10 w-10 rounded-full mr-3" src={logo} />
          Pioneer for maintenance <br />
          and building services
        </p>
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
                Services
              </a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <a
                href="#contact"
                className="hover:bg-slate-300 h-10 p-2 justify-center items-center cursor-pointer rounded-md"
              >
                Contact us
              </a>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div
        className="h-[35rem] w-full flex flex-col justify-start items-center relative "
        id="heroslide"
      ></div>
      <p
        style={{ fontFamily: "Poppins" }}
        className=" text-center leading-normal p-2 font-black text-xl md:text-2xl lg:text-4xl text-white absolute top-[12rem] left-0 right-0 shadow-sm"
      >
        Welcome to Pioneer for maintenance and building services, <br /> your
        partner in building maintenance and repair <br /> Specializing in
        factories and businesses.
      </p>
      <div
        className="flex flex-col w-full justify-center items-center"
        id="services"
      >
        <strong
          className="font-bold text-4xl lg:text-6xl mb-10 mt-5"
          style={{ fontFamily: "Poppins" }}
        >
          Services
        </strong>
        <div className="flex flex-wrap   items-center content-center  p-1 min-h-[35rem] ">
          {dataList.map((value) => {
            return (
              <Card
                sx={{
                  minWidth: 300,
                  minHeight: 300,
                  maxWidth: 500,
                  maxHeight: 500,
                  aspectRatio: 1 / 1,
                }}
                key={value.title}
                className="p-2 m-5 hover:scale-105 transition-all duration-300 ease-in-out shadow-md"
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={value.image}
                  alt={value.title}
                  className="w-1/2 h-42 rounded-md mx-auto"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {value.title.slice(0, 1).toUpperCase() +
                      value.title.slice(1)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description + "..."}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div
        className="h-auto w-full  shadow-full p-2 "
        style={{ fontFamily: "Poppins", backgroundColor: "white" }}
        id="contact"
      >
        <p className="m-2 p-2 font-semibold text-center flex-row flex items-center justify-start ">
          <img alt="logo" className="h-10 w-10 rounded-full mr-3" src={logo} />
          Pioneer for maintenance <br />
          and building services
        </p>
        <div className="w-full">
          <p className="text-2xl  font-bold mb-5">Contact us using Email</p>
          <form
            className="flex flex-col space-y-6 w-full md:w-5/6"
            ref={form}
            onSubmit={sendEmail}
          >
            <TextField
              id="outlined-basic"
              type="text"
              label="Name"
              variant="outlined"
              name="user_name"
              required
            />
            <TextField
              id="outlined-basic"
              type="email"
              label="Email"
              variant="outlined"
              name="user_email"
              required
            />
            <textarea
              className="flex p-2.5 w-full text-sm  rounded-lg "
              placeholder="Write your thoughts here..."
              name="description"
              required
              style={{
                resize: "none",
                height: "10rem",
                borderRadius: "1rem",
                backgroundColor: "transparent",
                border: "0.5px solid rgba(69,98,120,255)",
                fontFamily: "Poppins",
                fontSize: "1rem",
                color: "white",
                outline: "none",
                padding: "0.5rem",
              }}
            />
            <div className="justify-end items-end">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "black" }}
              >
                Send
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
              sent.
            </Alert>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-5">
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
            <FaSquarePhone size={60} /> {phoneNumber}
          </a>
          <a
            className="flex flex-row items-center text-xl"
            style={{ fontFamily: "Poppins" }}
            href={`https://maps.google.com?q=${location}`}
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
