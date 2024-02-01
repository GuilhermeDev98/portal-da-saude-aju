'use client'
import { useEffect, useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const AcceptCookies = () => {
  const [showDiv, setShowDiv] = useState(localStorage.getItem("accept-cookies") ? false : true);

  const HandleDefineAcceptCookies = (value: string) => {
    localStorage.setItem("accept-cookies", value);
    setShowDiv(false)
  };

  if (showDiv)
    return (
      <div className="fixed bottom-0 w-full text-center z-10">
        <div className="bg-gray-200 rounded-t-xl lg:flex lg:justify-between lg:items-center lg:px-10">
          <div className="">
            Ao Clicar em &quot;Aceitar Todos Os Cookies&quot; concorda com o
            armazenamento de cookies no seu dispositivo para melhorar a
            navegação no site e analisar a utilização do site.
          </div>
          <div className="py-2 lg:flex lg:justify-between lg:items-center">
            <div className="">
              <a href="" className="underline">
                Definições De Cookies
              </a>
            </div>
            <div className="flex justify-center mt-2 lg:mx-2">
              <button
                className="border-2 border-[#23365a] rounded bg-white px-5 py-1 hover:cursor-pointer"
                onClick={() => HandleDefineAcceptCookies("false")}
              >
                Rejeitar Todos
              </button>
            </div>
            <div className="flex justify-center mt-2 lg:mx-2">
              <button
                className="border-2 border-[#23365a] rounded bg-[#23365a] text-white px-5 py-1 hover:cursor-pointer"
                onClick={() => HandleDefineAcceptCookies("true")}
              >
                Aceitar Todos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AcceptCookies;
