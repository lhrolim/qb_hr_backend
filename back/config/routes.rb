Rails.application.routes.draw do

  namespace :api, constraints: {format: "json"}, defaults: {format: "json"} do
    namespace :v1 do
      resources :offers, :courses
      resources :universities do
        resources :offers, path: "offers"
        resources :university_courses, path: "courses"
      end
    end
  end
  
end
