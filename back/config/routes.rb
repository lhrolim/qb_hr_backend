Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, constraints: {format: "json"}, defaults: {format: "json"} do
    resources :offer, :course, :subject

    resources :university do
      resources :offer, path: "offer"
      resources :university_course, path: "course"
    end
  end
end
