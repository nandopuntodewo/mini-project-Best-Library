import { useCallback } from "react";

const Books = () => {
  const onRectangleImageClick = useCallback(() => {
    // Please sync "Genre" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Search" to the project
  }, []);

  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Loan" to the project
  }, []);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "History" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xl text-white font-poppins">
      <img
        className="absolute top-[512px] left-[391px] rounded-3xs w-[182px] h-[215px] object-cover cursor-pointer"
        alt=""
        src="/rectangle-7@2x.png"
        onClick={onRectangleImageClick}
      />
      <img
        className="absolute top-[757px] left-[391px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-21@2x.png"
      />
      <img
        className="absolute top-[512px] left-[597px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-8@2x.png"
      />
      <img
        className="absolute top-[757px] left-[597px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-22@2x.png"
      />
      <img
        className="absolute top-[512px] left-[803px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <img
        className="absolute top-[757px] left-[803px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-23@2x.png"
      />
      <img
        className="absolute top-[512px] left-[1009px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-10@2x.png"
      />
      <img
        className="absolute top-[757px] left-[1009px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-24@2x.png"
      />
      <img
        className="absolute top-[512px] left-[1214px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute top-[757px] left-[1214px] rounded-3xs w-[182px] h-[215px] object-cover"
        alt=""
        src="/rectangle-25@2x.png"
      />
      <div className="absolute top-[463px] left-[391px] text-[32px] font-semibold text-black inline-block w-[268px] h-10">
        Genre
      </div>
      <div className="absolute top-[-43px] left-[0px] w-[1440px] h-[146px]">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[146px]">
          <div className="absolute top-[43px] left-[0px] bg-dimgray-100 w-[1440px] h-14" />
          <img
            className="absolute top-[43px] left-[11px] w-[158px] h-[146px] object-cover"
            alt=""
            src="/colorful-modern-bookstore-logo-1-1@2x.png"
          />
        </div>
        <div className="absolute top-[57px] left-[1325px] font-medium inline-block w-[105px] h-8">
          10 : 10 PM
        </div>
      </div>
      <div className="absolute top-[687px] left-[391px] w-[1005px] h-[277px] text-center">
        <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[182px] h-8">
          Fiksi
        </div>
        <div className="absolute top-[245px] left-[0px] font-medium inline-block w-[182px] h-8">
          Misteri
        </div>
        <div className="absolute top-[0px] left-[206px] font-medium inline-block w-[182px] h-8">
          Aksi
        </div>
        <div className="absolute top-[245px] left-[206px] font-medium inline-block w-[182px] h-8">
          Fiksi Sejarah
        </div>
        <div className="absolute top-[0px] left-[412px] font-medium inline-block w-[182px] h-8">
          Edukasi
        </div>
        <div className="absolute top-[245px] left-[412px] font-medium inline-block w-[182px] h-8">
          Fiksi Ilmiah
        </div>
        <div className="absolute top-[0px] left-[618px] font-medium inline-block w-[182px] h-8">
          Romansa
        </div>
        <div className="absolute top-[245px] left-[618px] font-medium inline-block w-[182px] h-8">
          Petualangan
        </div>
        <div className="absolute top-[0px] left-[823px] font-medium inline-block w-[182px] h-8">
          Sejarah
        </div>
      </div>
      <div className="absolute top-[932px] left-[1214px] font-medium text-center inline-block w-[182px] h-8">
        Distopia
      </div>
      <div className="absolute top-[103px] left-[391px] w-[1005px] h-[335px] text-5xl">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mini max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div className="absolute h-[43.58%] w-[23.18%] top-[25.97%] left-[10.05%] font-semibold inline-block">
            <p className="m-0">
              “It's not things that trouble us, but our judgement about
              things.(Epictetus)”
            </p>
          </div>
        </div>
        <img
          className="absolute h-[78.51%] w-[18.11%] top-[10.75%] right-[40.9%] bottom-[10.75%] left-[41%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-26@2x.png"
        />
      </div>
      <div className="absolute top-[103px] left-[42px] w-80 h-[869px]">
        <div className="absolute top-[0px] left-[0px] rounded-mini bg-dimgray-200 w-80 h-[869px]" />
        <div className="absolute top-[45px] left-[0px] w-80 h-[339px]">
          <div className="absolute top-[0px] left-[19px] w-[282px] h-20">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray-100 w-[282px] h-20" />
            <img
              className="absolute top-[10px] left-[14px] rounded-[50%] w-[60px] h-[60px] object-cover"
              alt=""
              src="/ellipse-1@2x.png"
            />
            <div className="absolute top-[14px] left-[86px] font-semibold inline-block w-[175px] h-[26px]">
              Itachi Uchiha
            </div>
            <div className="absolute top-[36px] left-[86px] font-light inline-block w-[175px] h-[26px]">
              A325
            </div>
          </div>
          <div
            className="absolute top-[92px] left-[19px] w-[282px] h-[43px] cursor-pointer text-[16px]"
            onClick={onGroupContainer5Click}
          >
            <div className="absolute top-[0px] left-[0px] rounded-[20px] bg-dimgray-100 w-[282px] h-[43px]" />
            <i className="absolute top-[9px] left-[54px] inline-block font-light w-[175px] h-[26px]">
              Search books here
            </i>
            <img
              className="absolute top-[6px] left-[13px] w-[33px] h-[33px] overflow-hidden"
              alt=""
              src="/icroundsearch.svg"
            />
          </div>
          <div className="absolute top-[233px] left-[33px] w-[235px] h-10">
            <div
              className="absolute top-[0px] left-[0px] w-[235px] h-10 cursor-pointer"
              onClick={onGroupContainer6Click}
            >
              <div className="absolute top-[4px] left-[60px] font-medium inline-block w-[175px] h-[31px]">
                Loan
              </div>
              <img
                className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
                alt=""
                src="/materialsymbolsmenubookoutline.svg"
              />
            </div>
          </div>
          <div
            className="absolute top-[299px] left-[32px] w-[233px] h-10 cursor-pointer"
            onClick={onGroupContainer8Click}
          >
            <div className="absolute top-[5px] left-[58px] font-medium inline-block w-[175px] h-8">
              History
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/materialsymbolshistoryrounded.svg"
            />
          </div>
          <div className="absolute top-[143px] left-[0px] bg-dimgray-100 w-80 h-[69px]" />
          <div className="absolute top-[161px] left-[33px] w-[232px] h-10">
            <div className="absolute top-[4px] left-[57px] w-[175px] h-8">
              <div className="absolute top-[0px] left-[0px] font-medium inline-block w-[175px] h-8">
                Books
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
              alt=""
              src="/phbooks.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
