class ShippingAddress < ApplicationRecord
  belongs_to :user
  belongs_to :order

  validates_format_of :zip_code,
                  with: /\A\d{5}-\d{4}|\A\d{5}\z/,
                  errors: "should be 12345 or 12345-1234",
                  allow_blank: true
  validates :name, :address_line1, :address_line2, :city, :state, :country, presence: true
end
