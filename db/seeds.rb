# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.delete_all
Item.delete_all
OrderStatus.delete_all
User.delete_all

90.times do
  Item.create(
    title: Faker::Commerce.product_name,
    inventory: Faker::Number.number(2),
    price: Faker::Number.number(4),
    image: Faker::Avatar.image,
    description: Faker::StarWars.quote
  )
end

10.times do |i|
  Category.create(title: Faker::Commerce.department)
end

counter = 1
Item.all.each do |item|
  item.category_id = counter
  item.save
  if counter < 10
    counter += 1
  else
    counter = 1
  end
end



10.times do |u|
  User.create(
    name: "user#{u+1}",
    email: "user#{u+1}@email.com",
    password: "password"
  )
end


OrderStatus.create! id: 1, name: "In Progress"
OrderStatus.create! id: 2, name: "Placed"
OrderStatus.create! id: 3, name: "Shipped"
OrderStatus.create! id: 4, name: "Cancelled"
