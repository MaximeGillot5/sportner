class ParticipationsController < ApplicationController
  def index
    participations = Participation.all
    render json: { participations: participations }, status: :ok
  end

  def show
    participation = Participation.find(params[:id])
    render json: { participation: participation }, status: :ok
  end

  def new
  end

  def create
    @event = Event.find(params[:event_id])
  
    if @event
      puts @event.inspect 
      participation = Participation.new(user_id: current_user.id, event_id: @event.id)
  
      if participation.save
        render json: { message: 'Vous avez rejoint cet événement avec succès.' }
      else
        render json: { error: 'Impossible de rejoindre cet événement.' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'L\'événement spécifié n\'existe pas.' }, status: :not_found
    end
  end
  
  
  def edit
  end

  def update
  end


  def destroy
    participation = Participation.find_by(event_id: params[:id], id: params[:id])   
    if participation
      participation.destroy
      render json: { message: 'Participation supprimée avec succès' }, status: :ok
    else
      render json: { error: 'Erreur lors de la suppression de la participation' }, status: :unprocessable_entity
    end
  end
  
  
end
