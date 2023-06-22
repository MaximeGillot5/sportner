class UsersController < ApplicationController
  # ...

  def create
    user = User.new(user_params)

    if user.save
      render json: { message: 'Utilisateur créé avec succès', user: user }
    else
      render json: { error: 'Erreur lors de la création de l\'utilisateur' }, status: :unprocessable_entity
    end
  end

  def update
    user = current_user

    if user.update(user_params)
      render json: user, status: :ok
    else
      render json: { error: "Erreur lors de la mise à jour des informations de l'utilisateur" }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :zip_code, :profile_pic)
  end
end
