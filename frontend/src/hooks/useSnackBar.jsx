import React from "react";

export default function useSnackBar(){
    const [showSnackBar, setShowSnackBar] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const  setMessageHandler =(msg)=>{
        setMessage(msg)
    }

  //Show and Hide SnackBar, user messgae
  const toggleShowSnackBar = (show) => {
    setShowSnackBar(show);
    setTimeout(() => {
      setShowSnackBar(false); //Close SnackBar after 2seconds
     setMessageHandler("");//Reset Error Message
    }, 2000);
  };

  return [showSnackBar, message, setMessageHandler, toggleShowSnackBar];
}
