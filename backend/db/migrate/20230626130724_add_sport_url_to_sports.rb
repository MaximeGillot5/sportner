class AddSportUrlToSports < ActiveRecord::Migration[7.0]
  def change
    add_column :sports, :sport_url, :string
  end
end
