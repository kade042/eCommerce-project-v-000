class CartsController < ApplicationController
  def show
  	@line_items = current_cart.line_items
    render json: @line_items
  end
end
