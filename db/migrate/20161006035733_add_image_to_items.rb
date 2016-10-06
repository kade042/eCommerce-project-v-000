class AddImageToItems < ActiveRecord::Migration[5.0]
  def change
    add_attachment :items, :image
  end
end
