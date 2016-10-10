class Order < ApplicationRecord
  belongs_to :order_status
  belongs_to :user
  has_one :cart, through: :user

  
end
