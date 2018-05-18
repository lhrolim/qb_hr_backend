# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "securerandom"

discount_arr = (10..70).step(5)
fullprice_arr = (400..1000).step(50)

un_arr = [
  {
    id: 1,
    name: "UNIP",
    logo: "https://d2my3dgdogz33p.cloudfront.net/logos/colorido/medium/25/logo_1489432787.png",
  },
  {
    id: 2,
    name: "ESTACIO",
    logo: "https://d2my3dgdogz33p.cloudfront.net/logos/colorido/medium/19/logo_1504890816.png",
  },
  {
    id: 3,
    name: "BILAC",
    logo: "https://d2my3dgdogz33p.cloudfront.net/logos/colorido/medium/292/logo_1489434305.png",
  },
  {
    id: 4,
    name: "UNICID",
    logo: "https://d2my3dgdogz33p.cloudfront.net/logos/colorido/medium/30/logo_1489432835.png",
  },
]

course_arr = [

  {
    id: 1,
    name: "Agronomia",
    kind: "Presencial",
    shift: "Manhã",
    level: "Graduação",
    max_periods: "6",
    description: "Nível: Graduação Tradicional – Bacharelado / Graduação Tecnológica
    Duração: 5 anos
    Área: Ciências Agrárias
    O profissional de Agronomia visa aumentar a produtividade agropecuária, do início ao fim da cadeia produtiva, por meio da preparação do solo para plantio, do controle de pragas e do armazenamento e conservação da produção, até a sua distribuição. Pode focar em aspectos econômicos, especializando-se no Agronegócio. Em um país que tem a agricultura como um dos pilares de sua economia, como é o Brasil, os agrônomos têm muito espaço para crescer, inclusive em órgãos públicos, na área de comércio exterior, indústrias de sementes, alimentos e adubos, além da área rural.",
  },

  {
    id: 2,
    name: "Agronomia",
    kind: "Presencial",
    shift: "Noite",
    level: "Graduação",
    max_periods: "6",
    description: "Nível: Graduação Tradicional – Bacharelado / Graduação Tecnológica
    Duração: 5 anos
    Área: Ciências Agrárias
    O profissional de Agronomia visa aumentar a produtividade agropecuária, do início ao fim da cadeia produtiva, por meio da preparação do solo para plantio, do controle de pragas e do armazenamento e conservação da produção, até a sua distribuição. Pode focar em aspectos econômicos, especializando-se no Agronegócio. Em um país que tem a agricultura como um dos pilares de sua economia, como é o Brasil, os agrônomos têm muito espaço para crescer, inclusive em órgãos públicos, na área de comércio exterior, indústrias de sementes, alimentos e adubos, além da área rural.",
  },

  {
    id: 3,
    name: "Engenharia de Telecomunicações",
    kind: "Presencial",
    shift: "Noite",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Telecomunicações forma profissionais capacitados para o trabalho com sistemas de telecomunicações, planejando, projetando, operando e oferecendo manutenção.
    Após a conclusão do curso, o profissional poderá trabalhar com recepção e transmissão de sinais, cuidar do sistema de cabeamento de dados e desenvolver novas tecnologias para o compartilhamento de informações.
    No mercado de trabalho, o profissional de Engenharia de Telecomunicações pode atuar em centros de pesquisa de novas tecnologias, agências de fiscalização de serviços, fornecedoras de serviços de infraestrutura para telecomunicações, distribuidoras de tv a cabo, internet e telefonia.",
  },

  {
    id: 4,
    name: "Engenharia de Telecomunicações",
    kind: "Presencial",
    shift: "Tarde",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Telecomunicações forma profissionais capacitados para o trabalho com sistemas de telecomunicações, planejando, projetando, operando e oferecendo manutenção.
    Após a conclusão do curso, o profissional poderá trabalhar com recepção e transmissão de sinais, cuidar do sistema de cabeamento de dados e desenvolver novas tecnologias para o compartilhamento de informações.
    No mercado de trabalho, o profissional de Engenharia de Telecomunicações pode atuar em centros de pesquisa de novas tecnologias, agências de fiscalização de serviços, fornecedoras de serviços de infraestrutura para telecomunicações, distribuidoras de tv a cabo, internet e telefonia.",
  },

  {
    id: 5,
    name: "Engenharia de Telecomunicações",
    kind: "EAD",
    shift: "Virtual",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Telecomunicações forma profissionais capacitados para o trabalho com sistemas de telecomunicações, planejando, projetando, operando e oferecendo manutenção.
    Após a conclusão do curso, o profissional poderá trabalhar com recepção e transmissão de sinais, cuidar do sistema de cabeamento de dados e desenvolver novas tecnologias para o compartilhamento de informações.
    No mercado de trabalho, o profissional de Engenharia de Telecomunicações pode atuar em centros de pesquisa de novas tecnologias, agências de fiscalização de serviços, fornecedoras de serviços de infraestrutura para telecomunicações, distribuidoras de tv a cabo, internet e telefonia.",
  },

  {
    id: 6,
    name: "Engenharia de Telecomunicações",
    kind: "EAD",
    shift: "Virtual",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Telecomunicações forma profissionais capacitados para o trabalho com sistemas de telecomunicações, planejando, projetando, operando e oferecendo manutenção.
    Após a conclusão do curso, o profissional poderá trabalhar com recepção e transmissão de sinais, cuidar do sistema de cabeamento de dados e desenvolver novas tecnologias para o compartilhamento de informações.
    No mercado de trabalho, o profissional de Engenharia de Telecomunicações pode atuar em centros de pesquisa de novas tecnologias, agências de fiscalização de serviços, fornecedoras de serviços de infraestrutura para telecomunicações, distribuidoras de tv a cabo, internet e telefonia.",
  },

  {
    id: 7,
    name: "Engenharia de Computação",
    kind: "Presencial",
    shift: "Manhã",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Computação forma profissionais habilitados para o desenvolvimento e planejamento de softwares e hardwares. Ao final do curso, o profissional poderá projetar, programar e gerenciar sistemas de softwares, além de criar e projetar hardwares.
    No mercado de trabalho, há espaço para o profissional de Engenharia de Computação em grandes empresas, criando e gerenciando sistemas, ou desenvolvendo novas máquinas industriais e novas tecnologias. Há ainda a opção de se manter no meio científico, dando aulas em universidades e desenvolvendo pesquisas.",
  },

  {
    id: 8,
    name: "Engenharia de Computação",
    kind: "Presencial",
    shift: "Noite",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia de Computação forma profissionais habilitados para o desenvolvimento e planejamento de softwares e hardwares. Ao final do curso, o profissional poderá projetar, programar e gerenciar sistemas de softwares, além de criar e projetar hardwares.
      No mercado de trabalho, há espaço para o profissional de Engenharia de Computação em grandes empresas, criando e gerenciando sistemas, ou desenvolvendo novas máquinas industriais e novas tecnologias. Há ainda a opção de se manter no meio científico, dando aulas em universidades e desenvolvendo pesquisas.",
  },

  {
    id: 9,
    name: "Engenharia de Computação",
    kind: "Presencial",
    shift: "Noite",
    level: "Graduação",
    max_periods: "10",
    description: "O curso de Engenharia Florestal forma profissionais com consciência ambiental para promover o manejo sustentável de florestas, tendo em mente a preservação e a exploração consciente. Após a conclusão do curso, o engenheiro pode desenvolver projetos de recuperação de áreas degradadas, planos de exploração de florestas e conservação de parques e reservas naturais.
    No mercado de trabalho, o profissional de Engenharia Florestal pode ser encontrado trabalhando em órgãos ambientais e em empresas privadas e públicas, realizando vistorias, encarregando-se de laudos técnicos, estudos e relatórios de impacto ambiental.",
  },

]

ActiveRecord::Base.transaction do
  un_arr = University.create(un_arr)
  course_arr = Course.create(course_arr)

  un_arr.each do |un|
    (1..3).each do |i|
      un.course << course_arr[(i * un.id) % 9]
    end
  end

  #creating 300 offers
  (1..300).each do |i|
    full_price = fullprice_arr.to_a.sample
    discount = discount_arr.to_a.sample
    offered_price = full_price - (full_price * discount / 100)
    Offer.create(
      {
        uuid: SecureRandom.uuid,
        description: "this is a very large description for the offer, please be aware that this is not used at the listing",
        discount_percentage: discount,
        full_price: full_price,
        offered_price: offered_price,
        university: un_arr.sample,
        course: course_arr.sample,
      }
    )
  end
end
