Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, constraints: {format: "json"}, defaults: {format: "json"} do
    namespace :v1 do
      resources :offer, :course
      resources :university do
        resources :offer, path: "offer"
        resources :university_course, path: "course"
      end
    end

    match '*:api/*path', to: redirect("/api/v1/%{path}"), via: [:get]
    match '*path', to: redirect("/api/v1/%{path}"), via: [:get]

  end
end
