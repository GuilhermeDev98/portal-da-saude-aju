"use client";
import { PiCookieDuotone } from "react-icons/pi";
import { FaPlus, FaMinus, FaSearch, FaArrowLeft } from "react-icons/fa";
import { BiAdjust, BiKey } from "react-icons/bi";
import "react-calendar/dist/Calendar.css";
import { IoMdPin } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { PiKeyFill } from "react-icons/pi";
import { GrDocumentPdf } from "react-icons/gr";
import { BiSolidDownload } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { GiEmptyHourglass } from "react-icons/gi";
import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FaRegNewspaper } from "react-icons/fa";
import { GiArchiveResearch } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import { MdPushPin } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import PreLoader from "./components/PreLoader/PreLoader";

export default function Home() {
  const [showPreLoad, setSshowPreLoad] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setSshowPreLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      {showPreLoad && <PreLoader />}
      <main>
        <header className="mx-[25vh]">
          <div className="bg-[#379cf4] text-white flex justify-end items-center text-sm px-2 h-[3vh]">
            <div className="">Acessibilidade:</div>
            <div className="flex justify-between items-center px-5">
              <div className="cursor-pointer">
                <FaPlus />
              </div>
              <span className="px-2">Fonte</span>
              <div className="cursor-pointer">
                <FaMinus />
              </div>
            </div>
            <div className="px-2 cursor-pointer">
              <PiCookieDuotone />
            </div>
            <div className="px-2 cursor-pointer">
              <BiAdjust />
            </div>
          </div>
          <div className="flex items-center bg-[#23365a] pr-10 justify-between py-5">
            <div className="px-10 text-center flex items-center">
              <a href="">
                <img src="/images/logo_pma_branco.png" width={100} />
              </a>
              <div className="text-white font-bold text-4xl ml-2">
                Portal Da Saúde
              </div>
            </div>
            <div className="">
              <div className="flex justify-end">
                <div className="h-10 flex items-center bg-white px-2 rounded text-sm font-bold mr-2 cursor-pointer">
                  CADASTRO
                </div>
                <div className="h-10 flex items-center bg-white px-2 rounded text-sm font-bold cursor-pointer">
                  ÁREA LOGADA <PiKeyFill className={"ml-2"} />
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[50vh] flex justify-between items-center mt-5">
            <div className="w-[50vw] h-full mx-5">
              <div className="text-center text-2xl font-extrabold">
                O que você está procurando ?
              </div>
              <div className="w-full flex items-center mt-2 justify-center">
                <input
                  type="text"
                  className="w-[40vw] rounded h-10 border-2 hover:border-[#23365a] px-2"
                  placeholder="Digite sua dúvida"
                />
                <div className="mx-2 cursor-pointer w-10 h-10 flex justify-center items-center">
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[50vh] rounded-l-full flex justify-center items-center">
              <img
                src="/images/medical.png"
                loading="lazy"
                width={250}
                height={250}
                className="transition-transform transform-gpu hover:scale-150 duration-700"
              />
            </div>
          </div>
        </header>

        {/* Acesso Rápido */}
        <section className="mx-[25vh]">
          <div className="mt-2 flex items-center text-[#23365a]">
            <div className="ml-2 text-8xl font-bold">
              <MdPushPin />
            </div>
            <div className="mr-5 text-2xl font-bold ">Acesso Rápido</div>
            <div className="border-2 border-[#23365a] w-full flex-1 rounded-full"></div>
          </div>

          <div className="flex justify-around">
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl">
              <div className="text-center text-xl font-bold my-5 text-[#379cf4] flex justify-center items-center">
                <GiEmptyHourglass className="text-2xl mr-2" /> Acessados
                Recentemente
              </div>
              <ul className="px-5 flex flex-col justify-center items-center">
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
              </ul>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl">
              <div className="text-center text-xl font-bold my-5 text-[#379cf4] flex justify-center items-center">
                <FaRankingStar className="text-2xl mr-2" /> Mais Acessados
              </div>
              <ul className="px-5 flex flex-col justify-center items-center">
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
              </ul>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl">
              <div className="text-center text-xl font-bold my-5 text-[#379cf4] flex justify-center items-center">
                <FaStar className="text-2xl mr-2" /> Destaques
              </div>
              <ul className="px-5 flex flex-col justify-center items-center">
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
                <li className="text-xl font-light cursor-pointer mt-5 border-b-2 border-[#23365a] flex items-center px-5 pb-2 ">
                  Resultado De Exames
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Categoria De Serviços */}
        <section className="mx-[25vh] my-[15vh]">
          <div className="mt-2 flex items-center text-[#23365a]">
            <div className="border-2 border-[#23365a] w-full flex-1 rounded-full"></div>
            <div className="ml-2 text-8xl font-bold">
              <TbCategory />
            </div>
            <div className="ml-5 text-2xl font-bold ">
              Categorias De Serviços
            </div>
          </div>
          <div className="flex justify-around">
            <div className="border-2 mx-2 mb-2 my-5 px-2 rounded max-h-[50vh] flex items-center text-[#ff5555] text-xl">
              <div className="transition-transform transform-gpu hover:scale-150 hover:cursor-pointer">
                <FaArrowLeft />
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center text-center items-center flex-col cursor-pointer group">
              <div className="duration-700">
                <img
                  src="/images/familia.png"
                  width={150}
                  height={150}
                  className="transition-transform transform-gpu group-hover:scale-110 "
                />
              </div>
              <div className="text-[#23365a] font-extrabold text-xl mt-2">
                Saúde Da Família
              </div>
            </div>
            {/* div com bg azul
          
          <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center items-center flex-col cursor-pointer group  hover:bg-[#23365a]">
            <div className="transition-transform transform-gpu group-hover:scale-110 duration-700">
              <img src="/images/familia.png" width={150} height={150} />
            </div>
            <div className="text-[#23365a] group-hover:text-white font-extrabold text-xl transition-transform transform-gpu group-hover:scale-110 duration-700">
              Saúde da Família
            </div>
  </div>*/}
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center text-center items-center flex-col cursor-pointer group">
              <div className="duration-700">
                <img
                  src="/images/criancas.png"
                  width={150}
                  height={150}
                  className="transition-transform transform-gpu group-hover:scale-110 "
                />
              </div>
              <div className="text-[#23365a] font-extrabold text-xl mt-2">
                Saúde da Criança e do Adolescente
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center items-center flex-col cursor-pointer group">
              <div className="duration-700">
                <img
                  src="/images/mulher.png"
                  width={150}
                  height={150}
                  className="transition-transform transform-gpu group-hover:scale-110 "
                />
              </div>
              <div className="text-[#23365a] font-extrabold text-xl mt-2">
                Saúde da Mulher
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center items-center text-center flex-col cursor-pointer group">
              <div className="duration-700">
                <img
                  src="/images/homem.png"
                  width={150}
                  height={150}
                  className="transition-transform transform-gpu group-hover:scale-110 "
                />
              </div>
              <div className="text-[#23365a] font-extrabold text-xl mt-2">
                Saúde do Homem, Adulto e Idoso
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded min-h-[50vh] hover:shadow-2xl flex justify-center items-center flex-col cursor-pointer group">
              <div className="duration-700">
                <img
                  src="/images/dente.png"
                  width={150}
                  height={150}
                  className="transition-transform transform-gpu group-hover:scale-110 "
                />
              </div>
              <div className="text-[#23365a] font-extrabold text-xl mt-2">
                Saúde Bucal
              </div>
            </div>
            <div className="border-2 mx-2 mb-2 my-5 px-2 rounded max-h-[50vh] flex items-center text-[#ff5555] text-xl">
              <div className="transition-transform transform-gpu hover:scale-150 hover:cursor-pointer">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </section>

        {/* Notícias */}
        <section className="mx-[25vh] ">
          <div className="mt-2 flex items-center text-[#23365a]">
            <div className="mr-2 text-8xl font-bold ">
              <FaRegNewspaper />
            </div>
            <div className="mr-5 text-2xl font-bold ">Notícias</div>
            <div className="border-2 border-[#23365a] w-full flex-1 rounded-full"></div>
          </div>
          <div className="flex justify-between">
            <div className="min-h-[40vh] w-full mx-2 hover:shadow-2xl bg-white transition-transform transform-gpu hover:scale-105">
              <div className="">
                <img
                  src="/images/noticia2.jfif"
                  className="h-[30vh] w-full hover:cursor-pointer"
                  alt="imagem da notícia"
                />
              </div>
              <div className="p-2 text-center font-extrabold text-xl text-[#23365a]">
                Prefeitura dá continuidade à Semana de Mobilização contra o
                Aedes com ação na Emei Maria Givalda
              </div>
            </div>
            <div className="min-h-[40vh] w-full mx-2 hover:shadow-2xl bg-white transition-transform transform-gpu hover:scale-105">
              <div className="">
                <img
                  src="/images/noticia.jpg"
                  className="h-[30vh] w-full"
                  alt="imagem da notícia"
                />
              </div>
              <div className="p-2 text-center font-extrabold text-xl text-[#23365a]">
                BOLETIM DO CORONAVÍRUS EM ARACAJU: Foram registrados oito novos
                casos
              </div>
            </div>
            <div className="min-h-[40vh] w-full mx-2 hover:shadow-2xl bg-white transition-transform transform-gpu hover:scale-105">
              <div className="">
                <img
                  src="/images/noticia1.jpg"
                  className="h-[30vh] w-full"
                  alt="imagem da notícia"
                />
              </div>
              <div className="p-2 text-center font-extrabold text-xl text-[#23365a]">
                Saúde Mental: com ritmo de vida acelerado é preciso cuidar do
                fator psicológico
              </div>
            </div>
          </div>
          <div className="text-center my-10 flex justify-center items-center">
            <div className=" py-3 px-10 rounded cursor-pointer bg-[#23365a] text-white">
              Acessar Todas As Notícias
            </div>
          </div>
        </section>

        {/* Manuais */}
        <section className="mx-[25vh] my-[15vh]">
          <div className="mt-2 flex items-center text-[#23365a]">
            <div className="border-2 border-[#23365a] w-full flex-1 rounded-full"></div>
            <div className="ml-5 text-2xl font-bold">Manuais</div>
            <div className="ml-2 text-8xl font-bold">
              <GiArchiveResearch />
            </div>
          </div>

          <div className="flex justify-around">
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded max-h-[50vh] hover:shadow-2xl">
              <div className=" text-center m-2 font-bold text-xl text-[#379cf4]">
                Enfermagem
              </div>
              <ul className="max-h-[37vh] overflow-y-auto">
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
              </ul>
              <div className="flex justify-center items-center mt-5 mb-2">
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowBack />
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  1 de 100
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded max-h-[50vh] hover:shadow-2xl">
              <div className=" text-center m-2 font-bold text-xl text-[#379cf4]">
                Saúde da Mulher
              </div>
              <ul className="max-h-[37vh] overflow-y-auto">
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
              </ul>
              <div className="flex justify-center items-center mt-5 mb-2">
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowBack />
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  1 de 100
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
            <div className="border-2 w-full mx-2 mb-2 my-5 rounded max-h-[50vh] hover:shadow-2xl">
              <div className=" text-center m-2 font-bold text-xl text-[#379cf4]">
                Saúde Bucal
              </div>
              <ul className="max-h-[37vh] overflow-y-auto">
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
                <li className="flex justify-between items-center x-2 hover:bg-red-100 hover:text-[#23365a]  hover:cursor-pointer">
                  <div className="m-5">
                    <GrDocumentPdf />
                  </div>
                  <div className="text-xs text-center">
                    Procedimentos Operacionais Padrões De Enfermagem
                  </div>
                  <div className="m-5 hover:cursor-pointer">
                    <BiSolidDownload />
                  </div>
                </li>
              </ul>
              <div className="flex justify-center items-center mt-5 mb-2">
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowBack />
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  1 de 100
                </div>
                <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
            <div className="border-2 mx-2 mb-2 my-5 px-2 rounded max-h-[50vh] flex items-center text-[#ff5555] text-xl">
              <div className="transition-transform transform-gpu hover:scale-150 hover:cursor-pointer">
                <FaPlus />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-[25vh] flex justify-between mt-5">
          <div className="w-full min-h-[40vh]">
            <div className="mr-5 text-2xl font-bold text-center">
              <div className="flex justify-center items-center">
                <div className="flex-1 border-2 rounded border-[#23365a] mr-2"></div>
                <div className="flex flex-col items-center text-[#23365a]">
                  <FaCalendarAlt />
                  <div className="">Calendário da Saúde</div>
                </div>
                <div className="flex-1 border-2 rounded border-[#23365a] ml-2"></div>
              </div>
            </div>
            <div className="w-full border-r-2 pr-5 py-5">
              <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={[
                  { title: "event 1", date: "2019-04-01" },
                  { title: "event 2", date: "2019-04-02" },
                ]}
                height={500}
              />
            </div>
          </div>
          <div className="w-full min-h-[40vh]">
            <div className="ml-5 text-2xl font-bold text-center">
              <div className="flex justify-center items-center">
                <div className="flex-1 border-2 rounded border-[#23365a] mr-2"></div>
                <div className="flex flex-col items-center text-[#23365a]">
                  <FaMapMarkedAlt />
                  <div className="">Mapa Unidades de Saúde</div>
                </div>
                <div className="flex-1 border-2 rounded border-[#23365a] ml-2"></div>
              </div>
            </div>
            <div className="pl-5 pt-5">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1QCarU9lf5y7nAOqNp66GQriAvPW5iYQ&ehbc=2E312F&noprof=1"
                className="w-full"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <footer className="border-t-2 border-[#23365a] bg-[#23365a] min-h-[30vh] mt-5 text-white flex justify-around items-center mb-20">
          <div className="flex flex-col justify-center items-center text-center">
            <img src="/images/logo_pma_branco.png" width="100" height={200} />
            Prefeitura Municipal De Aracaju <br />
            Secretária Municipal De Saúde
            <div className="flex items-center">
              R. Nely Correia de Andrade, 50 - Coroa do Meio - Aracaju - SE -
              49036-245{" "}
              <IoMdPin
                className={"mr-2 text-3xl cursor-pointer hover:text-[#ff5555]"}
              />
            </div>
          </div>
        </footer>

        <section className="flex justify-between items-center fixed bottom-0 bg-[#F2F2F2] px-[20vh] py-2">
          <div className="flex justify-center text-xs items-center">
            <div className="">
              <IoIosInformationCircleOutline className="text-2xl mx-2" />
            </div>
            <div className="">
              Utilizamos cookies opcionais para melhorar a sua experiência nos
              nossos websites, como através de ligações às redes sociais, e para
              exibir publicidade personalizada com base na sua atividade online.
              Se rejeitar os cookies opcionais, apenas serão utilizados os
              cookies necessários para lhe fornecer os serviços. Você pode
              alterar sua seleção clicando em “Gerenciar Cookies” na parte
              inferior da página. Declaração de privacidade Cookies de terceiro
            </div>
          </div>
          <div className="flex items-center flex-1">
            <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
              Aceitar
            </div>
            <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
              Rejeitar
            </div>
            <div className="mx-1 p-2 text-center text-white text-xs bg-[#23365a] rounded cursor-pointer">
              Gerenciar
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
