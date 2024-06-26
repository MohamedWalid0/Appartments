Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  root "apartments#index"

  namespace :api do
    namespace :v1 do
      resources :apartments, only: [:index, :show, :create]
    end
  end

end
