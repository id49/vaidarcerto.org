import React from 'react'
import { Link } from 'gatsby'
const Footer = () => {
  return(
    <footer className="bg-white border-t border-gray-400 shadow">
      <div className="container mx-auto flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full lg:w-1/2 ">
              <div>
                  <h3 className="font-bold text-gray-900">Sobre o VaiDarCerto.org</h3>
                  <p className="py-4 text-gray-600 text-sm">
                    O VaiDarCerto é uma iniciativa para ajudar o pequeno empresário e profissionais liberais a superarem este momento de turbulência, seja por meio de transformar e divulgar seu negócio, como preparar-se para voltar as atividades no futuro breve.
                  </p>
                  <p className="py-4 text-gray-600 text-sm">Versão inicial por: <a className='underline' href='https://instagram.com/tuliomfaria'>@tuliomfaria</a> <a className='underline' href='https://instagram.com/devpleno'>@devpleno</a> <a className='underline' href='https://instagram.com/id49.digital'>@id49.digital</a></p>
              </div>
            </div>
            <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div>
                  <h3 className="font-bold text-gray-900">Siga-nos</h3>
                  <ul className="list-reset items-center text-sm pt-3">
                    <li>
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1" href="https://instagram.com/simvaidarcerto">instagram.com/simvaidarcerto</a>
                    </li>
                    <li>
                        <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1" href="https://github.com/id49/vaidarcerto.org">Contribua: github.com/id49/vaidarcerto.org</a>
                    </li>
                  </ul>
                  <ul className="list-reset items-center text-sm pt-3">
                    <li>
                        <Link to='/politica-de-privacidade' className='inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1'>Política de Privacidade</Link>
                    </li>
                  </ul>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
