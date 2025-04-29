import '../components/login-cadastro/pagcadastro.css'
import Arvore from '../components/login-cadastro/Arvore'
import Cadprojeto from '../components/cadastro-projeto/Cadprojeto'

function PagCadProjetos() {
    return(
        <>
           <main className="main-pagcadastro">
                <section className='section-pagcadastro'>
                    <Arvore/>
                    <Cadprojeto/>
                </section>
            </main>
        </>
    )
}

export default PagCadProjetos