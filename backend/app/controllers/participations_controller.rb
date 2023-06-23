class ParticipationsController < ApplicationController
  def index
    participations = Participation.all
    render json: { participations: participations }, status: :ok
  end

  def show
  end

  def new
  end

  def create
    @event = Event.find(params[:event_id])
  
    if @event
      # Crée une participation pour l'utilisateur courant et l'événement
      puts @event.inspect # Débogage : Affiche les informations de l'événement dans la console de sortie du serveur
      participation = Participation.new(user_id: current_user.id, event_id: @event.id)
  
      if participation.save
        # La participation a été enregistrée avec succès
        render json: { message: 'Vous avez rejoint cet événement avec succès.' }
      else
        # Une erreur s'est produite lors de l'enregistrement de la participation
        render json: { error: 'Impossible de rejoindre cet événement.' }, status: :unprocessable_entity
      end
    else
      # L'événement n'a pas été trouvé
      render json: { error: 'L\'événement spécifié n\'existe pas.' }, status: :not_found
    end
  end
  
  
  def edit
  end

  def update
  end

  def destroy
  end
end
