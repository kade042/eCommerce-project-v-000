class AddCurrentCartToUsers < ActiveRecord::Migration[5.0]
  def change
    add_reference :users, :current_cart, references: :carts
  end
end
