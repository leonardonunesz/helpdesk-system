import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
         <h1>Helpdesk - O Sistema de chamados simples</h1>
         <div className="my-10">
          <div>
            <p>Titulo</p>
            <input type="text" className="bg-white border-2 border-black rounded-xs p-1" />
          </div>
          <div>
            <p>Descrição</p>
            <input type="text" className="bg-white border-2 border-black rounded-xs p-1" />
          </div>
          <div>
            <p>Código</p>
            <input type="text" className="bg-white border-2 border-black rounded-xs p-1" />
          </div>

          <button className="duration-200 ease-in bg-black text-white my-5 p-2 px-6 hover:bg-gray-800 hover:scale-110">Enviar chamado</button>
         </div>         

        </div>
      </main>
    </div>
  );
}
