class LineItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_line_item, only: [:show, :create, :edit, :update, :destroy]
  before_action :set_cart, only: [:index, :new]
  before_action :update_params, only: :create
  # GET /line_items
  # GET /line_items.json
  def index
    @line_items = @cart.line_items #LineItem.all
    render json: @line_items
  end

  # GET /line_items/1
  # GET /line_items/1.json
  def show
  end

  # GET /line_items/new
  def new
    @line_item = @cart.line_items.new
  end

  # GET /line_items/1/edit
  def edit
  end

  # POST /line_items
  # POST /line_items.json
  def create


    #binding.pry
    if @line_item
      @line_item.update_attributes(update_params)
    else

      @line_item = @item.line_items.create(quantity: 1, cart: @cart)

      respond_to do |format|
       if @line_item
          #format.html { redirect_to @cart, notice: 'Line item was successfully created.' }
          format.json { render json: @line_item }
        else
          #format.html { render :new }
          format.json { render json: @line_item.errors, status: :unprocessable_entity }
        end
      end
    end
  end

  # PATCH/PUT /line_items/1
  # PATCH/PUT /line_items/1.json
  def update
    #binding.pry
    respond_to do |format|
      if @line_item.update_attributes(line_item_params)
        format.html { redirect_to @cart, notice: 'Line item was successfully updated.' }
        format.json { render json: @line_item }
      else
        format.html { render :edit }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /line_items/1
  # DELETE /line_items/1.json
  def destroy
    @line_item.destroy
    respond_to do |format|
      format.html { redirect_to cart_url, notice: 'Line item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_line_item
      @cart = set_cart
      if params[:id]
       @line_item = LineItem.find(params[:id])
      elsif @cart.line_items
        @item = Item.find_by(id: params[:item_id])
        @line_item = @cart.line_items.find{ |li| li.item_id == @item.id }
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def line_item_params
      params.require(:line_item).permit(:quantity, :unit_price, :sub_total, :item_id)
    end

    def update_params
      if !@line_item.nil?
        attr_hash = @line_item.attributes
        attr_hash["quantity"] += 1
        attr_hash
      end
    end

    def set_cart
      @cart = current_cart
    end
end
