import { ArrowRight, Car, ListChecks, MapPin, ShieldCheck, UserCheck } from '@phosphor-icons/react';
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom'


const Initial = () => {
  return (
    <div>
      <main>
        <section className='bghome flex flex-col items-center justify-center'>
          <h1 className='font-semibold text-4xl text-center'>Encontre um destino <br/>e vammo?</h1>
          <p className='text-initial'>Conectando você ao seu próximo destino de forma rápida e segura. <br/>Vammo simplifica sua jornada com caronas acessíveis e confiáveis.</p>

            <form className="flex flex-col gap-5 mt-5 w-80 w-form">
        <section className="p-3 bg-[#D8DFE9] rounded-full flex items-center gap-2 p-input">
          <div className='px-2 flex items-center flex-1 gap-2 resp-init'>
                  <input 
                  type="text" 
                  name='origem' 
                  placeholder='Local de partida'
                  className='bg-transparent text-lg placeholder-[#212121] outline-none flex-1' 
                  />
                  <MapPin id='icon'/>
                </div>
        </section>

        <section className="p-3 bg-[#D8DFE9] rounded-full flex items-center gap-2 p-input">
        <div className='px-2 flex items-center flex-1 gap-2 resp-init'>
                  <input 
                  type="text" 
                  name='origem' 
                  placeholder='Destino'
                  className='bg-transparent text-lg placeholder-[#212121] outline-none flex-1' 
                  />
                  <MapPin id='icon'/>
                </div>
                
                </section>

                <section className="p-2 bg-[var(--yellow)] text-[var(--black)] rounded-full flex items-center gap-2 resp-init-button">
                    <div className='px-2 flex flex-1 gap-2'>
                      Verificar Preços
                    </div>
                <Link to="/login">
                  <button type='submit' className='bg-[#212121] rounded-full px-5 py-2 flex items-center gap-2 cursor-pointer'>
                    <ArrowRight className='size-5 text-[#F6F5FA]' />
                  </button>
                </Link>
                </section>
            </form>
        </section>

        <section className='sec-2 mt-60'>
          <div className='bg-[#D8DFE9] p-30 sec-2-img'>
          <h2 id="service" className='font-semibold text-3xl text-center '>Nossos serviços</h2>
          <p id='card' className='text-center'>Escolha o Vammo perfeito para a sua viagem: </p>
            <div className='flex items-center justify-center gap-20 p-10 resp-icons'>

            <div id='card' className='text-center'>
              <img className='transition duration-0.3 hover:scale-110' src="https://ik.imagekit.io/grupo03/Vammo/assets%20-%20initial%20page/car1.png" alt="" />
              <h3 className='font-semibold text-xl mt-5'>Vammo Easy</h3>
              <p>Mais Promoções</p>
            </div>

            <div id='card' className='text-center'>
              <img className='transition duration-0.3 hover:scale-110' src="https://ik.imagekit.io/grupo03/Vammo/assets%20-%20initial%20page/moto.png" alt="" />
              <h3 className='font-semibold text-xl mt-5'>Vammo Max</h3>
              <p>Mais rapidez</p>
            </div>

            <div id='card' className='text-center'>
              <img className='transition duration-0.3 hover:scale-110' src="https://ik.imagekit.io/grupo03/Vammo/assets%20-%20initial%20page/car3.png" alt="" />
              <h3 className='font-semibold text-xl mt-5'>Vammo Quick</h3>
              <p>Para caber toda a galera</p>
            </div>

            <div id='card' className='text-center'>
              <img className='transition duration-0.3 hover:scale-110'src="https://ik.imagekit.io/grupo03/Vammo/assets%20-%20initial%20page/car2.png" alt="" />
              <h3 className='font-semibold text-xl mt-5'>Vammo Green</h3>
              <p>Carros elétricos</p>
            </div>
            </div>
          </div>

        </section>

        <section>
          
          <div className='flex items-center justify-center gap-10 p-20 resp-icons'>
          <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-4xl text-center'>Na Vammo você encontra: </h2>
          <p id='topicos'className='p-align'>
            <UserCheck /> Motoristas bem avaliados
          </p>

          <p id='topicos' className='p-align'>
            <Car className='p-icon'/> Carros novos, revisados e em estado de conservação excelente
          </p>

          <p id='topicos' className='p-align'>
            <ListChecks /> Histórico de viagens
          </p>

          <p id='topicos' className='p-align'>
            <ShieldCheck /> Segurança do início ao fim
          </p>
          </div>
          
            <img className='img-size w-150' src="https://ik.imagekit.io/grupo03/Vammo/assets%20-%20initial%20page/couple-car.png?updatedAt=1741188804186" alt="Ilustração de um homem de swetter verde e uma mulher moletom amarelo dentro de um carro" />
          
          </div>
        </section>
      </main>
      <Footer />
    </div>
    
  )
}

export default Initial;
