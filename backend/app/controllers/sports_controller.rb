class SportsController < ApplicationController
  def index
    
      sports = Sport.all
      render json: { sports: sports }, status: :ok
    
  end

  def new
  end

  def create
  end

  def destroy
  end
end
