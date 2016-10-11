class Order < ApplicationRecord
  belongs_to :order_status
  belongs_to :user
  has_one :cart, through: :user
  has_many :shipping_addresses

  
end
