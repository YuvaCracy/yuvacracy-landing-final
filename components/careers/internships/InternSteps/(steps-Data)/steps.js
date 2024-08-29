import { PiMonitorArrowUp } from "react-icons/pi";
import { PiUserSound } from "react-icons/pi";
import { PiHandshakeLight } from "react-icons/pi";

const stepsData = [
    {
      title: "Submit Your Application",
      desc: "Complete the online form with your details and preferred internship program.",
      icon: <PiMonitorArrowUp className="h-[5rem] w-[5rem] -mt-[0.3rem] text-[#f64b4b]" />,
    },
    {
      title: "Interview",
      desc: "If shortlisted, you'll be invited for an interview with our team.",
      icon: <PiUserSound className="h-[5rem] w-[5rem] -mt-[0.3rem] text-[#68d585]" />,
    },
    {
      title: "Offer",
      desc: "Successful candidates will receive an offer to join the program.",
      icon: <PiHandshakeLight className="h-[5rem] w-[5rem] -mt-[0.3rem] text-[#473bf0]" />,
    },
  ];

export default stepsData;