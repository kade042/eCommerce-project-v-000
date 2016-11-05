class Order < ApplicationRecord
  belongs_to :order_status
  belongs_to :user
  has_one :cart, through: :user
  has_one :shipping_address, through: :user

  before_create :set_order_status
  before_save :set_total

  def total
  	cart.total
  end

  private

  def set_order_status
	self.order_status_id = 1
  end

  def set_total
  	self[:total] = total
  end


end
