class CategoriesController < ApplicationController
  before_action :find_category, only: :show
  def index
    @categories = Category.all
    respond_to do |format|
      format.json {render json: @categories }
    end
  end

  def show
    respond_to do |format|
      format.html {render :show }
      format.json { render json: @category}
    end
  end


  private

   def find_category
     @category = Category.find_by(id: params[:id])
   end
end
