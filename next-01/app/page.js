import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#fec7fe] flex flex-col justify-center items-center">
      
      <div className="w-[80%] h-[75vh] bg-[#d797e7] rounded-xl shadow-lg p-12 flex flex-col gap-20">

           <div className="flex justify-center items-center gap-2">
              <Image className="rounded-full object-cover border-2 border-white"
                src="/photo.jpg"
                alt="profile photo"
                width={100}
                height={100}/>
              <div className="mr-auto">
                 <h1 className="text-1xl font-bold text-gray-800 leading-tight">Lettycia Vitória</h1>
                 <p className="text-sm text-purple-900 font-medium">Dev Back-end</p>
              </div>
               <Image className="" 
                src="/plant.png"
                alt="decoração de planta"
                width={60}
                height={60}/>
          </div>

          <div className="flex justify-center text-gray-800 leading-relaxed">
            <p className="w-3/4">Olá, me chamo Lettycia Vitória, tenho 19 anos, sou entusiasta de tecnologia e estudante de ciência da computação. 
              Sou cristã praticante. Amo cultivar plantas, práticar esportes, assistir filmes e séries. Estou sempre disponível 
              a aprender algo novo, e estou iniciando minha carreira profissional como desenvolvedora back-end</p>
          </div>  

      </div>
    </div>
  );
}

   