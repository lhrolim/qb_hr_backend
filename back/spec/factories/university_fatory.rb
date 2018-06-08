# FactoryBot.define do
#   factory :university do
#     name "UNIP"
#     logo "https://d2my3dgdogz33p.cloudfront.net/logos/colorido/medium/25/logo_1489432787.png"
#     association course
#     # factory :universities_with_courses do
#     #   transient do 
#     #     courses_count 5
#     #   end
#     #   after(:create) do |course, evaluator|
#     #     create_list(:university, evaluator.courses_count, courses: [course])
#     #   end
#     # end
#   end
# end