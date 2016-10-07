class Item < ApplicationRecord
  belongs_to :category
  has_many :line_items
  has_attached_file :image, styles: { large:"660x320", medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
