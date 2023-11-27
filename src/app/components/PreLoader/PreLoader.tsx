const PreLoader = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#23365a] text-white fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <a href="" className="mb-2 animation3">
          <img src="/images/logo_pma_branco.png" width={100} />
        </a>
        <div className="flex justify-between text-2xl font-extrabold">
          <div className="animation mx-2">PROTEGER A VIDA</div>
          <div className="animation2  mx-2">E</div>
          <div className="animation3  mx-2">CUIDAR DA CIDADE</div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
