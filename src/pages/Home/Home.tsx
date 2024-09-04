import { Outlet } from "react-router-dom";
import icon from "../../assets/icon.png";

export default function Home() {
  return (
    <>
      <div className="select-none h-full grid grid-cols-1 grid-rows-[auto,1fr,auto]">
        <div className="p-2 bg-[#27333f] text-[#fcfcfb] flex flex-col justify-center items-center">
          <div>
            <img src={icon} alt="icon" className="size-20 inline-block" />
          </div>
          <div className="font-bold p-2 text-lg">Blitz! Volleyball</div>
        </div>
        <div className="p-5 grid place-content-center text-center text-slate-500 gap-5">
          <div className="text-lg font-bold">Bem-vindo!</div>
          <div className="text-sm">
            Estamos construindo algo grande por aqui!
          </div>
          <div className="text-sm">
            Logo mais, teremos novidades nesta página. <br />⚡ Fique ligado! ⚡
          </div>

          <div className="text-sm">
            Por enquanto, siga-nos no instagram{" "}
            <b
              className="cursor-pointer hover:text-[#eab212]"
              onClick={() =>
                window.open("https://www.instagram.com/blitz_volleyball")
              }
            >
              @blitz_volleyball{" "}
            </b>{" "}
            para você ficar por dentro de tudo.
          </div>

          <div className="text-sm">
            Entre em contato através do email{" "}
            <b>diretoria@blitzvolleyball.com</b>
          </div>
          <div className="text-sm">
            Ou, se preferir, fale conosco pelo WhatsApp
            <br />
            <b
              className="cursor-pointer hover:text-[#eab212]"
              onClick={() =>
                window.open("https://wa.me/556593309179?text=Olá%2C%20Blitz!")
              }
            >
              +55 65 9330-9179
            </b>
          </div>
          <div className="text-sm">Será um prazer atendê-lo!</div>

          <Outlet />
        </div>
        <div className="p-5 grid place-content-center text-center bg-[#27333f] text-[#fcfcfb] gap-1">
          <div className="text-lg font-bold">Blitz! Volleyball</div>
          <div className="text-sm">
            Unidos pelo esporte, inspirados pela fé!
          </div>
        </div>
      </div>
    </>
  );
}
