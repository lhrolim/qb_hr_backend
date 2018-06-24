class Api::UniversityController < ActionController::Base
  include Response
  include ExceptionHandler

  # PAGE_SIZE = 10

  def index
    un = University.unscoped
    un = un.where("name like ?", "%#{params["name"]}%") unless params["name"] == nil
    universities = un

    respond_to do |format|
      format.json do
        json_response(universities)
      end
    end
  end

  def show
    json_response(University.find(params[:id]))
  end
end
