module ApplicationHelper
  def login_screen
    params[:action] == "login"
  end

  def get_atcond_class(name)
    if params[:controller] == "home" && params[:action] == "index" && name == "home"
      "btn btn-sidebar btn-block btn-at"
    elsif params[:controller] == "home" && params[:action] == "login" && name == "login"
      "btn btn-sidebar btn-block btn-at"
    elsif params[:controller] == "home" && (params[:action] == "user_guides" || params[:action] == "user_guide_page") && name == "help"
      "btn btn-sidebar btn-block btn-at"
    elsif params[:controller] == "floorplans" && params[:action] == "index" && name == "floorplans"
      "btn btn-sidebar btn-block btn-at"
    else
      "btn btn-sidebar btn-block"
    end
  end

  def show_rand_bg()
    bgid = rand(1..3)
    session[:bgid] = bgid
    "/assets/recontrac-bg#{bgid}.jpg"
  end

  def show_rand_bg_int()
    if !session[:bgid]
      bgigint = 2
    else
      bgidint = session[:bgid]
    end
    "/assets/recontrac-bg#{bgidint}-int.jpg"
  end
end
