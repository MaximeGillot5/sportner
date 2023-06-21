class UserMailer < ApplicationMailer
    default from: 'sportner@yopmail.com'
    include Rails.application.routes.url_helpers

    def password_forgot_email(user, token)
      @user = user
      @reset_password_token = token

      mail(to: @user.email, subject: 'Bienvenue chez nous !')
    end
  
    def welcome_email(user)
      # on récupère l'instance user pour ensuite pouvoir la passer à la view en @user
      @user = user
  
      # on définit une variable @url qu'on utilisera dans la view d’e-mail
    #   @url  = 'https://troxfr.herokuapp.com/'
  
      # c'est cet appel à mail() qui permet d'envoyer l’e-mail en définissant destinataire et sujet.
      mail(to: @user.email, subject: 'Bienvenue chez nous !')
    end

  end
