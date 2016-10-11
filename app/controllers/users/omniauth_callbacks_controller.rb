class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
	def twitter
	# You need to implement the method below in your model (e.g. app/models/user.rb)
		@user = User.from_omniauth(request.env["omniauth.auth"])

		if @user.persisted?
		  sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
		  set_flash_message(:notice, :success, :kind => "Twitter") if is_navigational_format?
		else
		  session["devise.twitter_data"] = request.env["omniauth.auth"]
		  redirect_to new_user_registration_url
		end
	end

	def facebook
	# You need to implement the method below in your model (e.g. app/models/user.rb)
		@user = User.from_omniauth(request.env["omniauth.auth"])

		if @user.persisted?
		  sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
		  set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
		else
		  session["devise.facebook_data"] = request.env["omniauth.auth"]
		  redirect_to new_user_registration_url
		end
	end

	def github
	# You need to implement the method below in your model (e.g. app/models/user.rb)
		@user = User.from_omniauth(request.env["omniauth.auth"])

		if @user.persisted?
		  sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
		  set_flash_message(:notice, :success, :kind => "Github") if is_navigational_format?
		else
		  session["devise.github_data"] = request.env["omniauth.auth"]
		  redirect_to new_user_registration_url
		end
	end

	def linkedin
	# You need to implement the method below in your model (e.g. app/models/user.rb)
		@user = User.from_omniauth(request.env["omniauth.auth"])

		if @user.persisted?
		  sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
		  set_flash_message(:notice, :success, :kind => "Linkedin") if is_navigational_format?
		else
		  session["devise.linkedin_data"] = request.env["omniauth.auth"]
		  redirect_to new_user_registration_url
		end
	end

	def google_oauth2
	# You need to implement the method below in your model (e.g. app/models/user.rb)
		@user = User.from_omniauth(request.env["omniauth.auth"])

		if @user.persisted?
		  sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
		  set_flash_message(:notice, :success, :kind => "Google") if is_navigational_format?
		else
		  session["devise.google_data"] = request.env["omniauth.auth"]
		  redirect_to new_user_registration_url
		end
	end

  def failure
    redirect_to root_path
  end
end