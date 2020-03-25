import React from 'react'

const Footer = () => {
  return(
    <footer class="bg-white border-t border-gray-400 shadow">
      <div class="container mx-auto flex py-8">
        <div class="w-full mx-auto flex flex-wrap">
            <div class="flex w-full lg:w-1/2 ">
              <div class="px-8">
                  <h3 class="font-bold text-gray-900">Sobre o VaiDarCerto.org</h3>
                  <p class="py-4 text-gray-600 text-sm">
                    O VaiDarCerto é uma iniciativa para ajudar o pequeno empresário e profissionais liberais a superarem este momente de turbulência, seja por meio de transformar e divulgar seu negócio, como preparar-se para voltar as atividades no futuro breve.
                  </p>
                  <p class="py-4 text-gray-600 text-sm">Versão inicial por: <a className='underline' href='https://instagram/tuliomfaria'>@tuliomfaria</a> <a className='underline' href='https://instagram/devpleno'>@devpleno</a> <a className='underline' href='https://instagram/id49.digital'>@id49.digital</a></p>
              </div>
            </div>
            <div class="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
              <div class="px-8">
                  <h3 class="font-bold text-gray-900">Siga-nos</h3>
                  <ul class="list-reset items-center text-sm pt-3">
                    <li>
                        <a class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:underline py-1" href="https://instagram.com/simvaidarcerto">instagram.com/simvaidarcerto</a>
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
