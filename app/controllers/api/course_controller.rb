class Api::CourseController < ActionController::Base
  include Response
  include ExceptionHandler

  PAGE_SIZE = 10

  def index
    courses = Course.take(PAGE_SIZE)

    respond_to do |format|
      format.json do
        json_response(courses)
      end
    end
  end

  def show
    json_response(Course.find(params[:id]))
  end
end
