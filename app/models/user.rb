class User < ApplicationRecord
	has_one :shipping_address
	has_one :cart
	belongs_to :current_cart, class_name: "Cart"

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:twitter, :facebook, :google_oauth2, :github, :linkedin]



  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.name = auth.info.name   # assuming the user model has a name
      #user.image = auth.info.image # assuming the user model has an image
    end
  end

end
