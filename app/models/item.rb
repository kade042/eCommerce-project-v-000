class Item < ApplicationRecord
  validates :title, uniqueness: true
  validates :title, :category, :price, :description, :image, presence: true
  belongs_to :category
  has_many :line_items
  has_many :reviews
  has_attached_file :image, styles: { large:"450x600", medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  def update_inventory(inventory)
  	item_to_hash = self.attributes
  	item_to_hash["inventory"] -= inventory
  	self.update(item_to_hash)
  end
end
