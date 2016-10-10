class User < ApplicationRecord

	has_one :cart
	belongs_to :current_cart, class_name: "Cart"
	  		
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
