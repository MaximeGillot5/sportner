Rails.application.routes.draw do
  get 'current_user', to: 'current_user#index'
  resources :users, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :sports, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :participations, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  
  resources :events, only: [:index, :show, :new, :create, :edit, :update, :destroy] do
    post 'participations', to: 'participations#create'
  end
  
  post 'passwords/forgot', to: 'passwords#forgot'
  post 'passwords/reset', to: 'passwords#reset'

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
end
