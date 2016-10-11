class ShippingAddressesController < ApplicationController
  before_action :find_address, only: [:new, :edit, :update, :destroy]

    def new
      @order = Order.find_by(id: params[:order_id])
      if @shipping_address
        @shipping_address.order = @order
        @shipping_address.save
        redirect_to edit_shipping_address_path(@shipping_address)
      else
        
        @shipping_address = ShippingAddress.new(order: @order, user: current_user)
      end

    end

    def create
      
      @shipping_address = ShippingAddress.new(shipping_address_params)
      
      if @shipping_address.save
        flash[:notice] = 'Thank You! for Your Orders.'
        redirect_to store_path
          
      else
        flash[:notice] = @shipping_address.errors
        render :new
          
      end
     end 

    def edit
    end

    def update
      
      if @shipping_address.update(shipping_address_params)
        flash[:notice] = 'Thank You! for Your Orders.'
        redirect_to store_path
      else
        flash[:notice] = @shipping_address.errors
        render :edit 
      end
      
    end

    def destroy

    end

    private

      def find_address
        @shipping_address = ShippingAddress.find_by(user_id: current_user.id)
      end

      def shipping_address_params
        params.require(:shipping_address).permit(:name, :address_line1, :address_line2, :city,
          :state, :zip_code, :country, :user_id, :order_id)
      end
end
