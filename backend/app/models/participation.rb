class Participation < ApplicationRecord
  belongs_to :user
  belongs_to :event

  validates :user_id, uniqueness: { scope: :event_id, message: "Vous ne pouvez rejoindre cet événement qu'une seule fois." }
  validate :user_cannot_participate_in_own_event

  private

  def user_cannot_participate_in_own_event
    if user_id == event.user_id
      errors.add(:base, "L'utilisateur ne peut pas participer à son propre événement.")
    end
  end
end

