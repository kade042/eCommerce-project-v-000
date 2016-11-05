class ItemsController < ApplicationController
  before_action :authenticate_user!, except: :show
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  # GET /items
  # GET /items.json
  def index
    if params[:category_id]
      if Category.find_by(id: params[:category_id])
        flash[:alert] = "Category not found."
        redirect_to categories_path
      else
        @items = Category.find_by(id: params[:category_id]).items
      end
    else
      @items = Item.all
    end

    authorize @items
    respond_to do |format|
      format.html { render :index}
      format.json { render json: @items}
    end
  end

  # GET /items/1
  # GET /items/1.json
  def show
    if params[:category_id]
      if !@item
        @category = Category.find_by(id: params[:category_id])
        flash[:alert] = "Item not found"
        redirect_to category_item_path(@category)
      end
    end
    
    respond_to do |format|
      format.html { render :show}
      format.json { render json: @item}
    end
  end

  # GET /items/new
  def new
    @item = Item.new
    authorize @item
  end

  # GET /items/1/edit
  def edit
    authorize @item
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    authorize @item
    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render :show, status: :created, location: @item }
      else
        format.html { render :new }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    authorize @item
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    authorize @item
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_item
      @item = Item.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def item_params
      params.require(:item).permit(:title, :inventory, :price, :description, :category_id, :image)
    end
end
