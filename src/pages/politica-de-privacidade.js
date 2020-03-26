import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'

const Politica = () => {
  const pClass = 'p-4'
  return (
    <div className='container mx-auto my-6'>
      <Seo title='Política de Privacidade ' />
      <span className='text-base text-purple-500 font-bold'>&laquo;</span> <Link to='/' className='text-base md:text-sm text-purple-500 font-bold no-underline hover:underline'>Voltar</Link>
      <h2 className='font-bold'>
        Política de privacidade para o site 
        <a href='https://vaidarcerto.org'>VaiDarCerto.org</a>
      </h2>
      <p className={pClass}>
        Todas as suas informações pessoais recolhidas, serão usadas para o
        ajudar a tornar a sua visita no nosso site o mais produtiva e agradável
        possível.
      </p>
      <p className={pClass}>
        A garantia da confidencialidade dos dados pessoais dos utilizadores do
        nosso site é importante para o VaiDarCerto.org.
      </p>
      <p className={pClass}>
        Todas as informações pessoais relativas a membros, assinantes, clientes
        ou visitantes que usem o VaiDarCerto.org serão tratadas em concordância
        com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei
        n.º 67/98).
      </p>
      <p className={pClass}>
        A informação pessoal recolhida pode incluir o seu nome, e-mail, número
        de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.
      </p>
      <p className={pClass}>
        O uso do VaiDarCerto.org pressupõe a aceitação deste
          <Link to='/politica-de-privacidade'>Acordo de privacidade</Link>.
        A equipe do VaiDarCerto.org reserva-se ao direito de alterar este
        acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa
        política de privacidade com regularidade de forma a estar sempre
        atualizado.
      </p>
      <h2 className='font-bold'>Os anúncios</h2>
      <p className={pClass}>
        Tal como outros websites, coletamos e utilizamos informação contida nos
        anúncios. A informação contida nos anúncios, inclui o seu endereço IP
        (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo,
        Clix, ou outro), o browser que utilizou ao visitar o nosso website (como
        o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas
        visitou dentro do nosso website.
      </p>
      <h2 className='font-bold'>Cookie DoubleClick Dart</h2>
      <p className={pClass}>
        O Google, como fornecedor de terceiros, utiliza cookies para exibir
        anúncios no nosso website;
      </p>
      <p className={pClass}>
        Com o cookie DART, o Google pode exibir anúncios com base nas visitas
        que o leitor fez a outros websites na Internet;
      </p>
      <p className={pClass}>
        Os utilizadores podem desativar o cookie DART visitando a Política de
        privacidade da rede de conteúdo e dos anúncios do Google.
      </p>
      <h2 className='font-bold'>Os Cookies e Web Beacons</h2>
      <p className={pClass}>
        Utilizamos cookies para armazenar informação, tais como as suas
        preferências pessoas quando visita o nosso website. Isto poderá incluir
        um simples popup, ou uma ligação em vários serviços que providenciamos,
        tais como fóruns.
      </p>
      <p className={pClass}>
        Em adição também utilizamos publicidade de terceiros no nosso website
        para suportar os custos de manutenção. Alguns destes publicitários,
        poderão utilizar tecnologias como os cookies e/ou web beacons quando
        publicitam no nosso website, o que fará com que esses publicitários
        (como o Google através do Google AdSense) também recebam a sua
        informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc.
        Esta função é geralmente utilizada para geotargeting (mostrar
        publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou
        apresentar publicidade direcionada a um tipo de utilizador (como mostrar
        publicidade de restaurante a um utilizador que visita sites de culinária
        regularmente, por ex.).
      </p>
      <p className={pClass}>
        Você detém o poder de desligar os seus cookies, nas opções do seu
        browser, ou efetuando alterações nas ferramentas de programas
        Anti-Virus, como o Norton Internet Security. No entanto, isso poderá
        alterar a forma como interage com o nosso website, ou outros websites.
        Isso poderá afetar ou não permitir que faça logins em programas, sites
        ou fóruns da nossa e de outras redes.
      </p>
      <h2 className='font-bold'>Ligações a Sites de terceiros</h2>
      <p className={pClass}>
        O VaiDarCerto.org possui ligações para outros sites, os quais, a nosso
        ver, podem conter informações / ferramentas úteis para os nossos
        visitantes. A nossa política de privacidade não é aplicada a sites de
        terceiros, pelo que, caso visite outro site a partir do nosso deverá ler
        a politica de privacidade do mesmo.
      </p>
      <p className={pClass}>
        Não nos responsabilizamos pela política de privacidade ou conteúdo
        presente nesses mesmos sites.
      </p>
    </div>
  )
}
export default Politica
