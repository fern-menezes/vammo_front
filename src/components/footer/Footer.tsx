import { FacebookLogo, InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";

function FooterInitial(){
    return(
        <footer className='bg-[#212121] text-[#F6F5FA] flex items-center justify-around gap-5 py-10 px-20 resp-footer'>
                <div className='flex flex-col'>
                    <a href="#">
                    <img className='w-15 resp-footer-img' src="https://ik.imagekit.io/grupo03/Vammo/VAMMO%20(1)%201.png?updatedAt=1741183646285" alt="" />
                    </a>
                    
                    <p> Escolha um destino e vammo?</p>
                </div>

                <div>
                    <p><a href="" className='hover:underline'>Termos e Condições</a></p>
                    <p><a href="" className='hover:underline'>Política de Privacidade</a></p>
                    <p><a href="" className='hover:underline'>Trabalhe Conosco</a></p>
                </div>

                <div className='flex gap-5 resp-footer-icons'>
                    <FacebookLogo className='size-6 cursor-pointer transition duration-0.3 hover:scale-115'/>
                    <InstagramLogo className='size-6 cursor-pointer transition duration-0.3 hover:scale-115'/>
                    <LinkedinLogo className='size-6 cursor-pointer transition duration-0.3 hover:scale-115'/>
                    <YoutubeLogo className='size-6 cursor-pointer transition duration-0.3 hover:scale-115'/>
                </div>
            </footer>
    )
}
export default FooterInitial;