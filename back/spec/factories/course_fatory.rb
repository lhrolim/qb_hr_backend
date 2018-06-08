# FactoryBot.define do
#   factory :course do
#     name "Engenharia de Telecomunicações",
#     kind "Presencial",
#     shift "Tarde",
#     level "Graduação",
#     description "O curso de Engenharia de Telecomunicações forma profissionais capacitados para o trabalho com sistemas de telecomunicações, planejando, projetando, operando e oferecendo manutenção.\n    Após a conclusão do curso, o profissional poderá trabalhar com recepção e transmissão de sinais, cuidar do sistema de cabeamento de dados e desenvolver novas tecnologias para o compartilhamento de informações.\n    No mercado de trabalho, o profissional de Engenharia de Telecomunicações pode atuar em centros de pesquisa de novas tecnologias, agências de fiscalização de serviços, fornecedoras de serviços de infraestrutura para telecomunicações, distribuidoras de tv a cabo, internet e telefonia.",
#     maxPeriods 10
#     factory :course_with_universities do
#       transient do 
#         universities_count 5
#       end
#       after(:create) do |course, evaluator|
#         create_list(:university, evaluator.universities_count, courses: [course])
#       end
#     end
#   end
# end