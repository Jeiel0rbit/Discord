import Image from "next/image"
import { InViewAnimate } from "@/components/ui/in-view-animate"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { VisitCounter } from "@/components/visit-counter" // Import the new component
import { DonationSection } from "@/components/donation-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>

      <div className="relative z-10">
        {/* Header / Profile Section */}
        <header className="pt-20 pb-12">
          <div className="container mx-auto px-4 text-center">
            <InViewAnimate delay={0}>
              {/* Profile Avatar */}
              <div className="mb-10">
                <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-800 flex items-center justify-center">
                  <Image
                    src="/images/profile-avatar.png"
                    alt="Avatar do Perfil"
                    width={176}
                    height={176}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </InViewAnimate>

            <InViewAnimate delay={200}>
              {/* Title */}
              <div className="mb-6">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Square News
                </h1>
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <i className="fas fa-newspaper text-xl"></i>
                  <span className="text-xl font-medium">Notícias de Tecnologia</span>
                </div>
              </div>
            </InViewAnimate>
          </div>
        </header>

        {/* Main Content */}
        <main className="pb-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            {/* Institutional Text Section */}
            <InViewAnimate delay={400}>
              <div className="bg-white text-black rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <i className="fas fa-info-circle text-3xl text-gray-600 mt-1 flex-shrink-0"></i>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Sobre o Projeto</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                      <span className="font-bold">Square News</span> é um projeto voluntário que publico na{" "}
                      <span className="font-bold text-black">Square Cloud</span>, sem vínculo com empresa no momento.
                      <span className="font-bold text-black"> Meu objetivo</span> é trazer notícias compactas e
                      relevantes do mundo da tecnologia. Este trabalho é feito{" "}
                      <span className="font-bold text-black">apenas por mim</span>.
                    </p>
                  </div>
                </div>
              </div>
            </InViewAnimate>

            {/* Additional Important Information Section */}
            <InViewAnimate delay={600}>
              <div className="bg-gray-800 text-white rounded-3xl shadow-xl overflow-hidden border border-gray-700 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  <i className="fas fa-bullhorn mr-3 text-blue-400"></i>Informações Importantes!
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Publication Times */}
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-clock text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold">Horários de publicação:</h3>
                    </div>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
                      <li>
                        <span className="font-bold text-white">Segunda a Sexta:</span> 11h (horário de Brasília).
                      </li>
                      <li>
                        <span className="font-bold text-white">Sábados:</span> 13h (horário de Brasília).
                      </li>
                    </ul>
                  </div>

                  {/* Manual Collection */}
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-hand-sparkles text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold">Feito manualmente. 🤝</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Todas as notícias são coletadas e publicadas{" "}
                      <span className="font-bold text-white">manualmente por mim</span>, garantindo qualidade e
                      relevância.
                    </p>
                  </div>

                  {/* Publication Platforms */}
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fas fa-cloud text-xl text-white"></i>
                      </div>
                      <h3 className="text-xl font-bold">Onde publico:</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Publico as notícias tanto na <span className="font-bold text-white">Square Cloud</span> quanto no
                      servidor Discord <span className="font-bold text-white">LoFi Square</span>, onde você tem as
                      informações mais relevantes da tecnologia.
                    </p>
                    <div className="bg-gray-700 rounded-xl p-4 border border-gray-600">
                      <h4 className="font-bold text-lg mb-2 text-blue-300">Sobre o LoFi Square:</h4>
                      <p className="text-gray-300 mb-4">
                        LoFi Square é um projeto onde o som não interfere na sua produtividade, melhorando-a em{" "}
                        <span className="font-bold text-white">90%</span>.{" "}
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="text-blue-400 hover:underline cursor-pointer text-sm">
                              (Saiba Mais)
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-4xl bg-gray-900 text-white border-gray-700 max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-white">
                                Música e Produtividade
                              </DialogTitle>
                              <DialogDescription className="text-gray-400">
                                Um infográfico sobre o impacto da música na produtividade.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="py-4">
                              <Image
                                src="/images/music-productivity.png"
                                alt="Music and Productivity Infographic"
                                width={700}
                                height={1000}
                                className="w-full h-auto rounded-lg"
                              />
                              <p className="text-center text-gray-500 text-sm mt-4">
                                Criado por{" "}
                                <a
                                  href="https://www.webfx.com/blog/general/music-productivity-infographic/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline"
                                >
                                  WebFX
                                </a>
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </p>
                      <a
                        href="https://jeielmiranda.is-a.dev/LoFi_Square/"
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-md"
                      >
                        <i className="fas fa-headphones-alt mr-2"></i>
                        Acessar LoFi Square
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </InViewAnimate>

            {/* Discord Message Example */}
            <InViewAnimate delay={800}>
              <div className="mt-12">
                <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                  Exemplo de mensagem no Discord
                </h3>

                <div className="bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                      <Image
                        src="/images/profile-avatar.png"
                        alt="Avatar do Usuário"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-bold text-white text-lg">Jetbitbyte</span>
                        <span className="text-gray-400 text-sm">hoje às 11:14</span>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-blue-500">
                        <div className="text-gray-200 leading-relaxed text-lg">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              h2: ({ node, ...props }) => <h2 className="text-xl font-bold text-white mb-2" {...props} />,
                              ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1" {...props} />,
                              li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                              p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                            }}
                          >
                            {`## 📰 11h

- **Nvidia atinge valor histórico**: A empresa se tornou a primeira da história a ultrapassar 4 trilhões de dólares em valor de mercado, consolidando-se como a mais valiosa do mundo e líder na fabricação de GPUs para IA.
- **Hugging Face lança robô de mesa open-source**: O Reachy Mini, um robô de 299 dólares programável em Python, foi lançado com foco em aplicações de código aberto.
- **xAI anuncia Grok 4**: A nova versão do modelo de IA inclui a variante Heavy, que estabeleceu um novo recorde em benchmark. A empresa também oferece a assinatura SuperGrok Heavy.
- **Perplexity lança navegador Comet**: O novo browser se destaca pela integração nativa com o mecanismo de busca da empresa e um assistente para automatizar tarefas.
- **Pesquisadores projetam chip para 5G em IoT**: Uma nova tecnologia baseada no padrão 5G RedCap pode viabilizar a conexão 5G em dispositivos IoT, como sensores industriais e wearables.
- **Meta adquire 3% da EssilorLuxottica SA**: A Meta investiu 3,5 bilhões de dólares na maior fabricante de óculos do mundo, visando o conhecimento de fabricação e as redes de distribuição para seus óculos inteligentes.
- **Reino Unido firma parceria com Google Cloud**: O governo britânico busca modernizar sistemas legados no setor público e capacitar servidores em tecnologias digitais e IA, com expectativa de economia.
`}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </InViewAnimate>

            {/* Donation Section */}
            <InViewAnimate delay={1000}>
              <DonationSection />
            </InViewAnimate>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <InViewAnimate delay={1000}>
              <p className="text-gray-500 text-sm mb-4">Desde 2020-2025</p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href="https://discord.gg/CYCPPPr25z"
                  className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg"
                  aria-label="Link para o perfil do Discord"
                >
                  <i className="fab fa-discord text-white text-2xl"></i>
                </a>
                <VisitCounter /> {/* Add the visit counter here */}
              </div>
            </InViewAnimate>
          </div>
        </footer>
      </div>
    </div>
  )
}
