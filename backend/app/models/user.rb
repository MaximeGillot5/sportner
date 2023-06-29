class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :validatable, :jwt_authenticatable, jwt_revocation_strategy: self
  has_many :participations
  has_many :events, through: :participations
  has_many :created_events, class_name: 'Event', foreign_key: 'user_id'

  validates :email, presence: true, uniqueness: true, format: { with: Devise.email_regexp }
  validates :password, presence: true, length: { minimum: 6 }, if: :password_required?

  validates :first_name, presence: true, length: { maximum: 50 }
  validates :last_name, presence: true, length: { maximum: 50 }
  validates :zip_code, numericality: { only_integer: true }, allow_nil: true
  

         after_create :welcome_send
        before_validation :downcase_email

         def welcome_send
           UserMailer.welcome_email(self).deliver_now
         end

         def generate_password_token!
          self.reset_password_token = generate_token
          self.reset_password_sent_at = Time.now.utc
          save!
         end
         
         def password_token_valid?
          (self.reset_password_sent_at + 4.hours) > Time.now.utc
         end
         
         def reset_password!(password)
          self.reset_password_token = nil
          self.password = password
          save!
         end
         
         private

         def password_required?
          !persisted? || !password.nil? || !password_confirmation.nil?
        end
      
        def downcase_email
          self.email = email.downcase if email.present?
        end
         
         def generate_token
          SecureRandom.hex(10)
         end
end
