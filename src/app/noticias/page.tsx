const Noticias = () => {
  return (
    <>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4 ">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <div
              className="z-50 flex flex-col items-center justify-center space-y-2 relative"
              style={{opacity: '1', transform: 'none'}}
            >


            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <div
              className="z-50 flex flex-col items-center justify-center space-y-2 relative"
              style={{opacity: '1', transform: 'none'}}
            >
              <div className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-lg border border-secondary-700 bg-background shadow-inner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="h-6 w-6 font-effect-hero tracking-wide font-display font-gradient"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <div
                  aria-hidden="true"
                  className="left-1/2 top-0 w-12 user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'}}
                ></div>
                <div
                  aria-hidden="true"
                  className="-top-1 left-1/2 h-12 w-full max-w-12 md:max-w-12 user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)'}}
                ></div>
              </div>
              <div className="hidden rounded-md px-2 py-1 md:block">
                <div className="text-center text-xs font-effect-hero tracking-wide font-display font-gradient">
                  ProRes files
                </div>
              </div>
            </div>
            <div
              className="z-50 flex flex-col items-center justify-center space-y-2 relative"
              style={{opacity: '1', transform: 'none'}}
            >
              <div className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-lg border border-secondary-700 bg-background shadow-inner">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 font-effect-hero tracking-wide font-display font-gradient"
                >
                  <path
                    d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div
                  aria-hidden="true"
                  className="left-1/2 top-0 w-12 user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'}}
                ></div>
                <div
                  aria-hidden="true"
                  className="-top-1 left-1/2 h-12 w-full max-w-12 md:max-w-12 user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)'}}
                ></div>
              </div>
              <div className="hidden rounded-md px-2 py-1 md:block">
                <div className="text-center text-xs font-effect-hero tracking-wide font-display font-gradient">
                  Render videos as gifs
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <div
              className="z-50 flex flex-col items-center justify-center space-y-2 relative"
              style={{opacity: '1', transform: 'none'}}
            >
              <div className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-lg border border-secondary-700 bg-background shadow-inner">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 font-effect-hero tracking-wide font-display font-gradient"
                >
                  <path
                    d="M5 1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5L4 7C4 7.01671 4.00082 7.03323 4.00242 7.04952C2.86009 7.28022 2 8.28967 2 9.5C2 10.7103 2.86009 11.7198 4.00242 11.9505C4.00082 11.9668 4 11.9833 4 12V13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V12C5 11.9833 4.99918 11.9668 4.99758 11.9505C6.1399 11.7198 7 10.7103 7 9.5C7 8.28967 6.1399 7.28022 4.99758 7.04952C4.99918 7.03323 5 7.01671 5 7L5 1.5ZM11 1.5C11 1.22386 10.7761 1 10.5 1C10.2239 1 10 1.22386 10 1.5V3C10 3.01671 10.0008 3.03323 10.0024 3.04952C8.8601 3.28022 8 4.28967 8 5.5C8 6.71033 8.8601 7.71978 10.0024 7.95048C10.0008 7.96677 10 7.98329 10 8V13.5C10 13.7761 10.2239 14 10.5 14C10.7761 14 11 13.7761 11 13.5V8C11 7.98329 10.9992 7.96677 10.9976 7.95048C12.1399 7.71978 13 6.71033 13 5.5C13 4.28967 12.1399 3.28022 10.9976 3.04952C10.9992 3.03323 11 3.01671 11 3V1.5ZM4.5 8C3.67157 8 3 8.67157 3 9.5C3 10.3284 3.67157 11 4.5 11C5.32843 11 6 10.3284 6 9.5C6 8.67157 5.32843 8 4.5 8ZM9 5.5C9 4.67157 9.67157 4 10.5 4C11.3284 4 12 4.67157 12 5.5C12 6.32843 11.3284 7 10.5 7C9.67157 7 9 6.32843 9 5.5Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div
                  aria-hidden="true"
                  className="left-1/2 top-0 w-12 user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'}}
                ></div>
                <div
                  aria-hidden="true"
                  className="-top-1 left-1/2 h-12 w-full max-w-12 md:max-w-12 user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)'}}
                ></div>
              </div>
              <div className="hidden rounded-md px-2 py-1 md:block">
                <div className="text-center text-xs font-effect-hero tracking-wide font-display font-gradient">
                  Compression level
                </div>
              </div>
            </div>
            <div
              className="z-50 flex flex-col items-center justify-center space-y-2 relative"
              style={{opacity: '1', transform: 'none'}}
            >
              <div className="relative overflow-hidden flex h-12 w-12 items-center justify-center rounded-lg border border-secondary-700 bg-background shadow-inner">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 font-effect-hero tracking-wide font-display font-gradient"
                >
                  <path
                    d="M3 9C3 6.5 4.5 4.25 7.5 1.5C10.5 4.25 12 6.5 12 9C12 11.4853 9.98528 13.5 7.5 13.5C5.01472 13.5 3 11.4853 3 9ZM10.9524 8.30307C9.67347 7.82121 8.2879 8.46208 6.98956 9.06259C5.9327 9.55142 4.93365 10.0135 4.09695 9.82153C4.03357 9.55804 4 9.28294 4 9C4 7.11203 5.02686 5.27195 7.5 2.87357C9.66837 4.97639 10.725 6.65004 10.9524 8.30307Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <div
                  aria-hidden="true"
                  className="left-1/2 top-0 w-12 user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)'}}
                ></div>
                <div
                  aria-hidden="true"
                  className="-top-1 left-1/2 h-12 w-full max-w-12 md:max-w-12 user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
                  style={{background: 'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)'}}
                ></div>
              </div>
              <div className="hidden rounded-md px-2 py-1 md:block">
                <div className="text-center text-xs font-effect-hero tracking-wide font-display font-gradient">
                  Custom gradients
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-20 w-20 items-center justify-center rounded-full absolute -bottom-12">
          <div
            className="absolute right-1/2 top-1/2  z-40 flex h-[5px] overflow-hidden animate-radar-spin w-[400px]  items-end justify-center bg-transparent"
            style={{transformOrigin: 'right center'}}
          >
            <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-transparent  via-primary to-transparent"></div>
          </div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '5rem', width: '5rem', border: '1px solid rgba(71, 150, 105, 0.9)', opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '10rem', width: '10rem', border: '1px solid rgba(71, 150, 105, 0.8)' ,opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '15rem', width: '15rem', border: '1px solid rgba(71, 150, 105, 0.7)' ,opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '20rem', width: '20rem', border: '1px solid rgba(71, 150, 105, 0.6)' ,opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '25rem', width: '25rem', border: '1px solid rgba(71, 150, 105, 0.5)' ,opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '30rem', width: '30rem', border: '1px solid rgba(71, 150, 105, 0.4)' ,opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '35rem', width: '35rem', border: '1px solid rgba(71, 150, 105, 0.29' , opacity: '1'}}
          ></div>
          <div
            className="absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full"
            style={{height: '40rem', width: '40rem', border: '1px solid rgba(71, 150, 105, 0.2)' ,opacity: '1'}}
          ></div>
        </div>
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      </div>
    </>
  );
};

export default Noticias;
